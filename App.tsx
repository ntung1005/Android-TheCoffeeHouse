/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Dimensions, Image, LogBox } from 'react-native';
import { Provider } from 'react-redux';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

import React, { useEffect } from 'react';
import {
 
    StyleSheet,
    AsyncStorage
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from './src/navigation/StackNavigation';
import store from './src/store/store';
import { checkLogin } from './src/modules/AsyncStorage';
import { useDispatch, useSelector } from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const dummyData =
    [{
        title: 'Anise Aroma Art Bazar', url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        id: 1

    },
    {
        title: 'Food inside a Bowl', url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        id: 2
    },
    {
        title: 'Vegatable Salad',
        url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        id: 3
    }
    ];


const { width, height } = Dimensions.get('window');

const App = () => {
    return (

        <Provider store={store}>
            <NavigationContainer>
                {/* <BottomTabs/> */}
                <StackNavigation />
            </NavigationContainer>
        </Provider>
    );
};

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: height / 3,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: width - 20,
        height: height / 3,
        borderRadius: 10
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
});

export default App;
