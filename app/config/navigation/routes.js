import * as Screens from '../../screens';
import React from 'react';
import {
    StackNavigator
} from 'react-navigation';
import {
    RkText
} from 'react-native-ui-kitten';
import {Platform, StatusBar} from 'react-native';
import {FontAwesome} from "../../assets/icons";
let routes = {
    DashboardStack: {
        title: 'dashboard',
        screen: StackNavigator({
            Dashboard: {
                screen: Screens.Dashboard,
            },
        },
            {
                cardStyle: {
                    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
                }
            }),
        navigationOptions:{
            tabBarIcon: (<RkText rkType='awesome'>{FontAwesome.lineChart}</RkText>),
        },
    },
    ReunioesStack: {
        title: 'reuniões',
        screen: StackNavigator({
            Reunioes: {
                screen: Screens.Reunioes,
            },
        },
            {
                cardStyle: {
                    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
                }
            }),
        navigationOptions:{
            tabBarIcon: (<RkText rkType='awesome'>{FontAwesome.dashboard}</RkText>),
        },
    },
    MembrosStack: {
        title: 'membros',
        screen: StackNavigator({
            Membros: {
                screen: Screens.Membros,
            },
            Membro: {
                screen: Screens.Membro,
            }
        },
            {
                cardStyle: {
                    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
                }
            }),
        navigationOptions:{
            tabBarIcon: (<RkText rkType='awesome'>{FontAwesome.users}</RkText>)
        },
    },
    ConfiguracoesStack: {
        title: 'configurações',
        screen: StackNavigator({
            Dashboard: {
                screen: Screens.Configuracoes,
            },
        },
            {
                cardStyle: {
                    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
                }
            }),
        navigationOptions:{
            tabBarIcon: (<RkText rkType='awesome'>{FontAwesome.cogs}</RkText>),
        },
    },

};

export const AppRoutes = routes;