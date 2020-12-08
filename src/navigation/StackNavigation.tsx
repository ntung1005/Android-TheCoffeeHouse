import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { checkLogin } from '../modules/AsyncStorage';
import NotificationScreen from '../screens/MoreScreen/NotificationScreen';
import {useDispatch} from 'react-redux';

import BottomTab from './BottomTabs';

const Stack = createStackNavigator();

function StackNavigation() {

    const dispatch = useDispatch();
    useEffect(()=>{
        checkLogin(dispatch)
    },[])

    return (
        <Stack.Navigator
            initialRouteName="BottomTab"
        >
            <Stack.Screen
                name="BottomTab"
                component={BottomTab}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default StackNavigation;