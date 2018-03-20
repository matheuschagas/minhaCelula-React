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

export class Login extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    registerForPushNotificationsAsync() {
        return new Promise(async (resolve)=>{
            const { status } = await Permissions.getAsync(
                Permissions.NOTIFICATIONS
            );
            console.log(status);
            let finalStatus = status;

            // only ask if permissions have not already been determined, because
            // iOS won't necessarily prompt the user a second time.
            if (status !== 'granted') {
                // Android remote notification permissions are granted during the app
                // install, so this will only ask on iOS
                finalStatus = await Expo.Permissions.askAsync(Expo.Permissions.NOTIFICATIONS);
            }
            // Stop here if the user did not grant permissions
            console.log()
            if (finalStatus !== 'granted') {
                await new Promise((resolve) => {
                    Alert.alert('Notificações', 'Suas notificações estão desativadas e você pode ficar de fora quando os Alertas da luz e Cartas da luz chegarem.\n Vá em Configurações>Notificações e habilite as notificações', [{text: "Cancelar", onPress: ()=>{resolve(false);}},
                        {
                            text: "Ativar", onPress: async () => {
                            console.log('kakaka');
                            resolve(true);
                        }
                        } ], {cancelable: false}
                    );
                });
                resolve(false);
            }

            // Get the token that uniquely identifies this device
            let token = await Notifications.getExpoPushTokenAsync();
            console.log("TOKEN PUSH:", token);

            resolve(token);
        });
    }
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', cpf: '', visible: false};
    }

    componentDidMount(){
    }

    async login(firstLogin = true){
        let email = this.state.username;
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
        }else if(input==='cpf'){
            this.refs.cpf._focusInput();
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
                {image}
                <RkText style={{color: '#cd6133', fontSize: 30}}>Minha Célula</RkText>
                <View style={styles.container}>
                    <RkText style={styles.label}>E-mail</RkText>
                    <RkTextInput ref={'log'} onSubmitEditing={()=> this._focus('senha')} autoCorrect={false} onChangeText={(username) => this.setState({username})} keyboardType={'email-address'} autoCapitalize={'none'} returnKeyType={'next'} rkType='rounded' style={{backgroundColor: 'white'}} inputStyle={{color: 'black',}} />
                    <RkText style={styles.label}>Senha</RkText>
                    <RkTextInput ref={'senha'} onSubmitEditing={()=> this.login()} onChangeText={(password) => this.setState({password})} rkType='rounded' keyboardType={'default'} returnKeyType={'go'} autoCapitalize={'none'} style={{backgroundColor: 'white'}} inputStyle={{color: 'black',}}/>
                    <GradientButton onPress={() => {
                        this.login();
                    }} rkType='large' style={styles.save} text='Entrar'/>

                    <TouchableHighlight onPress={()=>{
                        this.props.navigation.navigate('CadastreSe');
                    }}>
                        <View >
                        <Text style={{alignSelf: 'center'}}>Não possui conta? Cadastre-se!</Text>
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
        paddingBottom: scaleVertical(100),
        paddingHorizontal: 17,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: Dimensions.get('window').width,
        height: (Dimensions.get('window').height) * 0.65,
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