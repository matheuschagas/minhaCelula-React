import React from 'react';
import {
    View, Dimensions, Image, ScrollView, Switch, Alert
} from 'react-native';
import {
    RkText,
    RkStyleSheet, RkButton, RkTextInput, RkChoice,
} from 'react-native-ui-kitten';
import {FontAwesome} from '../../assets/icons';
import { NavigationActions } from 'react-navigation';


export class Configuracoes extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'CONFIGURAÇÕES',
        headerTintColor: '#FFF',
        headerStyle: {
            backgroundColor: '#cd6133'
        },
        headerLeft: null,
        headerRight:(
            <RkButton
                style={{backgroundColor: 'transparent'}}
                onPress={async () => {
                    Alert.alert('Sair', 'Tem certeza que você deseja sair?', [{text: "Nao", onPress: ()=>{}},
                        {
                            text: "Sim", onPress: async () => {
                            screenProps.rootNavigation.dispatch(NavigationActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: 'Login' }),
                                ],
                            }));
                        }
                        } ], {cancelable: false}
                    );
                }}
            >
                <View style={{alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row', flex: 1}}>
                    <RkText rkType='awesome hero' style={{color: 'white', fontSize: 30}}>{FontAwesome.logout}</RkText>
                </View>
            </RkButton>
        )
    });


    async componentWillMount(){
    }


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ScrollView contentStyle={{}} style={{backgroundColor: '#fff'}}>
                <RkTextInput labelStyle={{color: 'black'}} label={'Local'} ref={'local'} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Dia da Semana'} ref={'diadasemana'} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Horário'} ref={'horario'} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} />
                <View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
                    <RkText>Célula no Radar?</RkText>
                    <Switch style={{marginLeft: 20}}/>
                </View>
                <RkText style={{alignSelf: 'center', fontSize: 27, marginTop: 15}}>Suas Informações</RkText>
                <RkTextInput labelStyle={{color: 'black'}} label={'Nome'} ref={'nome'} autoCorrect={false} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Data de Nascimento'} ref={'datadenascimento'} autoCorrect={false} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Telefone'} ref={'telefone'} autoCorrect={false} autoCapitalize={'none'} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Email'} ref={'email'} keyboardType={'email-address'} autoCorrect={false} autoCapitalize={'none'} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Endereço'} ref={'endereco'} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} />
                <RkTextInput labelStyle={{color: 'black'}} keyboardType={'numeric'} label={'Nº'} ref={'numero'} autoCorrect={false} autoCapitalize={'none'} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Complemento'} ref={'complemento'} autoCorrect={false} autoCapitalize={'none'} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Bairro'} ref={'bairro'} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Cidade'} ref={'cidade'} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} />
                <RkTextInput labelStyle={{color: 'black'}} label={'Estado'} ref={'estado'} returnKeyType={'done'} style={styles.input} inputStyle={{color: 'black'}} />
            </ScrollView>
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
    },
    label:{
        paddingLeft: 5,
        paddingRight: 5,
        top: 25,
    },
    input:{
        backgroundColor: 'white',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    }
}));