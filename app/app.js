import React from 'react';
import {
     TabNavigator
} from 'react-navigation';
import {AppRoutes} from './config/navigation/routes';
import {StatusBar} from "react-native";
import {data} from './data';

import {bootstrap} from './config/bootstrap';

bootstrap();


function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

const MinhaCelula = TabNavigator({
    ...AppRoutes
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
    headerMode: 'screen',
    cardStyle: {
        paddingTop: StatusBar.currentHeight
    }
});





const defaultGetStateForAction = MinhaCelula.router.getStateForAction;
MinhaCelula.router.getStateForAction = (action, state) => {
    if(state && action.type === 'ReplaceCurrentScreen'){
        let routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
            ...state,
            routes,
            index: state.routes.length - 1,
        };

    }
    return defaultGetStateForAction(action, state);
};

export default class App extends React.Component{
    async componentDidMount() {
        Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
        await Font.loadAsync({
            'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
            'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
            'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
            'fontawesome': require('./assets/fonts/fontawesome.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    componentWillMount() {
    }

    render(){
        return(
            this.state.fontLoaded ?
                <MinhaCelula
                /> : null
        );
    }
}