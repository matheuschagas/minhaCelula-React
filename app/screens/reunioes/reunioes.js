import React from 'react';
import {
    View, Dimensions, Image, TouchableHighlight, Text, ScrollView, FlatList
} from 'react-native';
import {
    RkText,
    RkStyleSheet, RkButton,
} from 'react-native-ui-kitten';
import ReuniaoController from "../../data/reunioes";
const moment = require('moment');
import 'moment/locale/pt-br';
moment.locale('pt-BR');


export class Reunioes extends React.Component {
    static navigationOptions = {
        title: 'REUNIÕES',
        headerTintColor: '#FFF',
        headerStyle: {
            backgroundColor: '#cd6133'
        },
        headerLeft: null
    };


    async componentWillMount(){
        const reunioes = await ReuniaoController.getAll();
        this.setState({reunioes});
    }


    constructor(props) {
        super(props);
        this.state = {
            reunioes:[]
        };
    }

    clicked = false;

    _renderReuniao(reuniao, navigation){
        let largura = Dimensions.get('window').width;
        let _openReuniao = (reuniao)=>{
            if(!this.clicked) {
                this.clicked = true;
                navigation.navigate('Reuniao', {reuniao});
                this.clicked = false;
            }
        };
        return (
            <TouchableHighlight onPress={()=>{_openReuniao(reuniao)}}>
                <View style={{height: (largura*0.15+12), width: largura, paddingTop: 5, flex: 1}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width:  largura*0.85, height: largura*0.15, alignItems:'flex-start', justifyContent: 'center', paddingLeft: 10}}>
                            <Text style={{color: '#000'}}>{moment(reuniao.item.data).format('LL')}</Text>
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
            <ScrollView style={styles.screen} contentContainerStyle={{alignItems: 'center', justifyContent: 'center',}}>
                <FlatList
                    data={this.state.reunioes}
                    ref='list'
                    style={styles.list}
                    keyExtractor={this._keyExtractor}
                    renderItem={(item)=> this._renderReuniao(item, this.props.navigation)}
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
    list:{
        width: Dimensions.get('window').width - 20,
        paddingRight: 10,
    },
    text: {
        marginTop: 40
    }
}));