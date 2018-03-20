import React from 'react';
import {
    View, Dimensions, Image, ScrollView, FlatList, Text, TouchableHighlight, SegmentedControlIOS
} from 'react-native';
import {
    RkText,
    RkStyleSheet, RkButton,
} from 'react-native-ui-kitten';

import MembroController from '../../data/membro';
import {FontAwesome} from "../../assets/icons";


export class Membros extends React.Component {
    static navigationOptions = {
        header: null,
    };


    async componentWillMount(){
        const membros = await MembroController.getMembros();
        const visitantes = await MembroController.getVisitantes();
        this.setState({membros: membros, visitantes: visitantes});
    }


    constructor(props) {
        super(props);
        this.state = {
            membros:[],
            isVisitantes: false,
        };
    }

    clicked = false;


    _renderMembro(membro, navigation){
        let largura = Dimensions.get('window').width;
        let _openMembro = (membro)=>{
            if(!this.clicked) {
                this.clicked = true;
                navigation.navigate('Membro', {membro: membro});
                this.clicked = false;
            }
        };
        return (
            <TouchableHighlight onPress={()=>{_openMembro(membro)}}>
            <View style={{height: (largura*0.15+12), width: largura, paddingTop: 5, flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={{uri: membro.item.avatar}}
                           style={{width: largura*0.15, height: largura*0.15, borderRadius: (largura*0.15)/2}}/>
                    <View style={{width:  largura*0.85, height: largura*0.15, alignItems:'flex-start', justifyContent: 'center', paddingLeft: 10}}>
                        <Text style={{color: '#000'}}>{membro.item.nome}</Text>
                        <Text style={{color: '#686868'}}>{membro.item.dataNascimento}</Text>
                    </View>
                </View>
                <View style={{width: largura, height: 1, backgroundColor: '#b1b1b1'}}/>
            </View>
            </TouchableHighlight>
        )
    }

    _keyExtractor(item){
        return item.key;
    }


    render() {
        return (
            <View style={{flexDirection: 'column', flex: 1, alignItems: 'center'}}>
            <View
                style={{
                    backgroundColor: '#cd6133',
                    paddingTop: 25, /* only for IOS to give StatusBar Space */
                    height: 65,
                    flexDirection: 'row',
                }}
            >
                <View style={{height: 1, width: Dimensions.get('window').width * 0.15}}/>
                <SegmentedControlIOS style={{width: Dimensions.get('window').width * 0.7}}
                                     values={['Membros', 'Visitantes']}
                                     selectedIndex={this.state.isVisitantes}
                                     tintColor={'black'}
                                     onChange={(event) => {
                                         this.setState({isVisitantes: event.nativeEvent.selectedSegmentIndex});
                                     }}
                />
                <View style={{width: Dimensions.get('window').width * 0.15}}>
                    <RkButton
                        style={{backgroundColor: 'transparent'}}
                        onPress={async () => {

                        }}
                    >
                        <View style={{alignItems: 'center', flexDirection: 'row', flex: 1, bottom: 7, left: 5}}>
                            <RkText rkType='awesome hero' style={{color: 'white', fontSize: 25}}>{FontAwesome.personPlus}</RkText>
                        </View>
                    </RkButton>
                </View>
            </View>
            <ScrollView style={styles.screen} contentContainerStyle={{alignItems: 'center', justifyContent: 'center',}}>
                {!this.state.isVisitantes?<FlatList
                    data={this.state.membros}
                    ref='list'
                    style={styles.list}
                    keyExtractor={this._keyExtractor}
                    renderItem={(item)=> this._renderMembro(item, this.props.navigation)}
                />:null}
                {this.state.isVisitantes?<FlatList
                    data={this.state.visitantes}
                    ref='list'
                    style={styles.list}
                    keyExtractor={this._keyExtractor}
                    renderItem={(item)=> this._renderMembro(item, this.props.navigation)}
                />:null}
            </ScrollView>
            </View>
        )
    }
}
let styles = RkStyleSheet.create(theme => ({
    screen: {
        backgroundColor: '#fff',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        height: Dimensions.get('window').height - 65,
    },
    list:{
        width: Dimensions.get('window').width - 20,
        paddingRight: 10,
    },
    text: {
        marginTop: 40
    }
}));