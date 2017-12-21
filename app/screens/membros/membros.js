import React from 'react';
import {
    View, Dimensions, Image, ScrollView, FlatList, Text
} from 'react-native';
import {
    RkText,
    RkStyleSheet, RkButton,
} from 'react-native-ui-kitten';


export class Membros extends React.Component {
    static navigationOptions = {
        title: 'MEMBROS',
        headerTintColor: '#FFF',
        headerStyle: {
            backgroundColor: '#2c3e50'
        },
        headerLeft: null
    };


    async componentWillMount(){
    }


    constructor(props) {
        super(props);
    }

    _renderMembro(membro){
        return (
            <View style={{height: 100, width: 200}}>
                <View style={{width: 200, height: 99, alignItems:'center'}}><Text style={{color: '#000'}}>{membro.item.nome}</Text></View>
                <View style={{width:200, height: 1, backgroundColor: '#b1b1b1'}}/>
            </View>
        )
    }

    _keyExtractor(item){
        return item.key;
    }


    render() {
        return (
            <ScrollView style={styles.screen} contentContainerStyle={{alignItems: 'center', justifyContent: 'center',}}>
                <FlatList
                    data={[{key: 1, nome: 'Matheus Marrane Chagas', dataNascimento: '08/05/1995'}]}
                    ref='list'
                    style={styles.list}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderMembro}
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
    }
}));