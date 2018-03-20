import React from 'react';
import {
    View,
    Image,
    Dimensions,
    Keyboard, StatusBar,
    Alert, KeyboardAvoidingView, Linking, TouchableHighlight, Text, ScrollView
} from 'react-native';
import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard,
    RkStyleSheet,
    RkTheme
} from 'react-native-ui-kitten';
import {GradientButton} from '../../components/';
import {scale, scaleModerate, scaleVertical} from '../../utils/scale';
import { data } from './../../data/index';
import HttpService  from './../../utils/http';
import { NavigationActions } from 'react-navigation';
import Spinner from "react-native-loading-spinner-overlay";
import Version from '../../utils/version';
import * as firebase from 'firebase';
import { Permissions, Notifications } from 'expo';

export class CadastreSe extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', nome: '', igreja: '', visible: false};
    }

    componentDidMount(){
    }

    async login(firstLogin = true){
        let email = this.state.username;
        let nome = this.state.nome;
        let igreja = this.state.igreja;
        let password = this.state.password.replace(/\D/g,'');
        //this.setState({visible: true});
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'App' }),
            ],
        }));
    }

    async componentWillMount(){
        //check if logged
    }

    _renderImage(image) {
        let imageRatio = 200/113;
        let height = (Dimensions.get('window').height) * 0.1;
        let width = height*imageRatio;
        image = (<View style={styles.containerImage}><Image style={[styles.image, {height, width}]}
                                                            source={require('../../assets/images/minhaCelula.png')}/></View>);
        return image;
    }

    _focus(input){
        if(input==='senha') {
            this.refs.senha._focusInput();
        }else if(input==='email'){
            this.refs.email._focusInput();
        }else if(input==='igreja'){
            this.refs.igreja._focusInput();
        }
    }

    render() {
        let image = this._renderImage();


        return (

            <ScrollView contentStyle={{}} style={{backgroundColor: '#fff'}}>
                <KeyboardAvoidingView
                    onStartShouldSetResponder={ (e) => true}
                    onResponderRelease={ (e) => Keyboard.dismiss()}
                    style={styles.screen}>
                    <View style={styles.container}>
                        <RkText style={styles.label}>Nome Completo</RkText>
                        <RkTextInput ref={'nome'} onSubmitEditing={()=> this._focus('email')} autoCorrect={false} onChangeText={(nome) => this.setState({nome})} keyboardType={'default'} autoCapitalize={'words'} returnKeyType={'next'} rkType='rounded' style={{backgroundColor: 'white'}} inputStyle={{color: 'black',}} />
                        <RkText style={styles.label}>E-mail</RkText>
                        <RkTextInput ref={'email'} onSubmitEditing={()=> this._focus('senha')} autoCorrect={false} onChangeText={(username) => this.setState({username})} keyboardType={'email-address'} autoCapitalize={'none'} returnKeyType={'next'} rkType='rounded' style={{backgroundColor: 'white'}} inputStyle={{color: 'black',}} />
                        <RkText style={styles.label}>Senha</RkText>
                        <RkTextInput ref={'senha'} onSubmitEditing={()=> this._focus('igreja')} onChangeText={(password) => this.setState({password})} rkType='rounded' keyboardType={'default'} returnKeyType={'next'} autoCapitalize={'none'} style={{backgroundColor: 'white'}} inputStyle={{color: 'black',}}/>
                        <RkText style={styles.label}>Igreja</RkText>
                        <RkTextInput ref={'igreja'} autoCorrect={false} onChangeText={(igreja) => this.setState({igreja})} keyboardType={'numeric'} autoCapitalize={'none'} returnKeyType={'done'} rkType='rounded' style={{backgroundColor: 'white'}} inputStyle={{color: 'black',}} />
                        <GradientButton onPress={() => {
                            this.login();
                        }} rkType='large' style={styles.save} text='Entrar'/>

                        <TouchableHighlight onPress={()=>{
                            this.props.navigation.goBack();
                        }}>
                            <View >
                                <Text style={{alignSelf: 'center'}}>Voltar</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <Spinner visible={this.state.visible} />
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        resizeMode: 'cover',
        marginBottom: scaleVertical(10),
    },
    container: {
        marginTop: 50,
        paddingHorizontal: 17,
        flexDirection: 'column',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        flex: -1
    },
    containerImage:{
        paddingBottom: scaleVertical(30),
        paddingTop: scaleVertical(70)
    },
    footer: {
        justifyContent: 'flex-end',
        flex: 1
    },
    label: {
        color: 'black',
        paddingLeft: 25
    },
    buttons: {
        flexDirection: 'row',
        marginBottom: scaleVertical(24)
    },
    button: {
        marginHorizontal: 14
    },
    save: {
        marginTop: 5,
        marginVertical: 9,
        backgroundColor: '#cd6133'
    },
    textRow: {
        justifyContent: 'center',
        flexDirection: 'row',
    }
}));