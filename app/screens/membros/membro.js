import React from 'react';
import {
    View, Dimensions, Image, ScrollView, FlatList, Text
} from 'react-native';
import {
    RkText,
    RkStyleSheet, RkButton,
} from 'react-native-ui-kitten';

import MembroController from '../../data/membro';


export class Membro extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `${navigation.state.params.membro.item.nome}`,
        headerTintColor: '#FFF',
        headerStyle: {
            backgroundColor: '#cd6133'
        },
        headerLeft: null
    });


    static tabbarOptions = {
        hide: true,
    };


    async componentWillMount(){
        console.log(this.props.navigation.state.params.membro);
        this.setState({membro: this.props.navigation.state.params.membro.item});
    }


    constructor(props) {
        super(props);
        this.state = {
            membro: null
        };
    }

    _renderMembro(membro){
        let largura = Dimensions.get('window').width;
        return (
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
        )
    }

    renderMembro(){
        membro = null;
        if(this.state.membro !== null){
            membro = (<View><Image source={{uri: this.state.membro.avatar}}/></View>);
        }
        return this.state.membro!==null?membro:null;
    }


    render() {
        return (
            <ScrollView style={styles.screen} contentContainerStyle={{alignItems: 'center', justifyContent: 'center',}}>
                {this.renderMembro()}
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
    }
}));