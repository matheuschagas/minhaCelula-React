import React from 'react';
import {
    View, Dimensions, Image, ScrollView, FlatList, Text, TouchableHighlight, Switch
} from 'react-native';
import {
    RkText,
    RkStyleSheet, RkButton,
    RkTextInput,
} from 'react-native-ui-kitten';

import MembroController from '../../data/membro';
import {FontAwesome} from "../../assets/icons";
import ActionSheet from "react-native-actionsheet";


export class Membro extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'MEMBRO',
        headerTintColor: '#FFF',
        headerStyle: {
            backgroundColor: '#cd6133'
        },
        headerLeft:(
            <RkButton
                style={{backgroundColor: 'transparent'}}
                onPress={async () => {
                    navigation.goBack();
                }}
            >
                <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row', flex: 1}}>
                    <RkText rkType='awesome hero' style={{color: 'white', fontSize: 30}}>{FontAwesome.chevronLeft}</RkText>
                </View>
            </RkButton>
        ),
        headerRight:(
            <RkButton
                style={{backgroundColor: 'transparent'}}
                onPress={async () => {

                }}
            >
                <View style={{alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row', flex: 1}}>
                    <RkText rkType='awesome hero' style={{color: 'white', fontSize: 30}}>{FontAwesome.save}</RkText>
                </View>
            </RkButton>
        )
    });


    static tabbarOptions = {
        hide: true,
    };

    showActionSheet() {
        this.ActionSheet.show()
    }

    handlePress(i) {
        this.setState({
            selected: i
        })
    }

    async componentWillMount(){
        console.log(this.props.navigation.state.params.membro);
        this.setState({membro: this.props.navigation.state.params.membro.item, alteracao: false});
    }


    constructor(props) {
        super(props);
        this.state = {
            membro: null,
            options: [ 'Cancelar', 'Galeria', 'Câmera' ],
            selected: '',
        };
        this.handlePress = this.handlePress.bind(this);
        this.showActionSheet = this.showActionSheet.bind(this);
    }

    renderMembro(){
        membro = null;
        const largura = Dimensions.get('window').width * 0.35;
        if(this.state.membro !== null){
            membro = (<View style={{alignItems: 'center', paddingTop: 10}}>
                <TouchableHighlight onPress={this.showActionSheet}>
                <Image source={{uri: this.state.membro.avatar}}
                       style={{width: largura, height: largura, borderRadius: largura/2}}/>
                </TouchableHighlight>
                <RkTextInput labelStyle={{color: 'black'}} label={'Nome'} ref={'nome'} autoCorrect={false} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} value={this.state.membro.nome} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Data de Nascimento'} ref={'datanascimento'} autoCorrect={false} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} value={this.state.membro.dataNascimento} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Sexo'} ref={'sexo'} autoCorrect={false} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} value={this.state.membro.sexo} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Telefone'} ref={'telefone'} autoCorrect={false} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} value={this.state.membro.telefone} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Endereço'} ref={'endereco'} autoCorrect={false} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} value={this.state.membro.endereco} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Nº'} ref={'numero'} autoCorrect={false} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} value={this.state.membro.numero} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Bairro'} ref={'bairro'} autoCorrect={false} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} value={this.state.membro.bairro} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Complemento'} ref={'complemento'} autoCorrect={false} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} value={this.state.membro.complemento} />
                <View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
                    <RkText>Membro</RkText>
                    <Switch style={{marginLeft: 20}} value={this.state.membro.membroDaCelula} onValueChange={()=>{
                        let membro = this.state.membro;
                        membro.membroDaCelula = !membro.membroDaCelula;
                        this.setState({membro});
                    }}/>
                </View>
                <View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
                    <RkText>Cristão</RkText>
                    <Switch style={{marginLeft: 20}} value={this.state.membro.cristao} onValueChange={()=>{
                        let membro = this.state.membro;
                        membro.cristao = !membro.cristao;
                        this.setState({membro});
                    }}/>
                </View>
                <View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
                    <RkText>Discipulado</RkText>
                    <Switch style={{marginLeft: 20}} value={this.state.membro.discipulado} onValueChange={()=>{
                        let membro = this.state.membro;
                        membro.discipulado = !membro.discipulado;
                        this.setState({membro});
                    }}/>
                </View>
                {this.state.membro.discipulado?<RkTextInput labelStyle={{color: 'black'}} label={'Discipulador'} ref={'discipulador'} autoCorrect={false} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} value={this.state.membro.discipulador} />:null}
            </View>);
        }
        return this.state.membro!==null?membro:null;
    }


    render() {
        return (
            <ScrollView style={styles.screen} contentContainerStyle={{alignItems: 'center', justifyContent: 'center',}}>
                {this.renderMembro()}
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={'Deseja alterar a foto do membro?'}
                    options={this.state.options}
                    cancelButtonIndex={0}
                    onPress={this.handlePress}
                />
            </ScrollView>
        )
    }
}
let styles = RkStyleSheet.create(theme => ({
    screen: {
        backgroundColor: '#fff',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        marginTop: 40
    },
    input:{
        backgroundColor: 'white',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    }
}));