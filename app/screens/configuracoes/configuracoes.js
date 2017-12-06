import React from 'react';
import {
    View, Dimensions, Image
} from 'react-native';
import {
    RkText,
    RkStyleSheet, RkButton,
} from 'react-native-ui-kitten';


export class Configuracoes extends React.Component {
    static navigationOptions = {
        title: 'CONFIGURAÇÕES',
        headerTintColor: '#FFF',
        headerStyle: {
            backgroundColor: '#3d30c7'
        },
        headerLeft: null
    };


    async componentWillMount(){
    }


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.screen}>
                <RkText style={styles.text}>Configurações</RkText>
            </View>
        )
    }
}
let styles = RkStyleSheet.create(theme => ({
    screen: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        marginTop: 40
    }
}));