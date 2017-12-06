import * as Screens from '../../screens';
import {
    StackNavigator
} from 'react-navigation';
let routes = {
    DashboardStack: {
        title: 'dashboard',
        screen: StackNavigator({
            Dashboard: {
                screen: Screens.Dashboard,
            },
        }),
    },
    ReunioesStack: {
        title: 'reuniões',
        screen: StackNavigator({
            Reunioes: {
                screen: Screens.Reunioes,
            },
        }),
    },
    MembrosStack: {
        title: 'membros',
        screen: StackNavigator({
            Membros: {
                screen: Screens.Membros,
            },
        }),
    },
    ConfiguracoesStack: {
        title: 'configurações',
        screen: StackNavigator({
            Dashboard: {
                screen: Screens.Configuracoes,
            },
        }),
    },

};

export const AppRoutes = routes;