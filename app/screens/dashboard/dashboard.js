    import React from 'react';
    import {
    View,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';

import {
    RkText,
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten';


import {
    ProgressChart,
    DoughnutChart,
    AreaChart,
    AreaSmoothedChart
} from '../../components/';


export class Dashboard extends React.Component {

    static navigationOptions = {
        title: 'DASHBOARD',
        headerTintColor: '#FFF',
        headerStyle: {
            backgroundColor: '#2c3e50'
        },
        headerLeft: null
    };

    constructor(props) {
        super(props);
        };

    render() {
        let chartBlockStyles = [styles.chartBlock, {backgroundColor: RkTheme.current.colors.control.background}];
        return (
            <ScrollView style={styles.screen}>
                <View style={chartBlockStyles}>
                    <DoughnutChart/>
                </View>
                <View style={chartBlockStyles}>
                    <AreaChart/>
                </View>
                <View style={chartBlockStyles}>
                    <ProgressChart/>
                </View>
                <View style={chartBlockStyles}>
                    <AreaSmoothedChart/>
                </View>
            </ScrollView>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({

    screen: {
        backgroundColor: theme.colors.screen.scroll,
        paddingHorizontal: 15,
    },
    statItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    statItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    statItemIcon: {
        alignSelf: 'center',
        marginLeft: 10,
        color: 'white',
    },
    statItemValue: {
        color: 'white',
    },
    statItemName: {
        color: 'white',
    },
    chartBlock: {
        padding: 15,
        marginBottom: 15,
        justifyContent: 'center'
    },
}));