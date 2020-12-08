import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {memo, useCallback} from 'react';
import NewsScreen from '../screens/NewsScreen/NewsScreen';
import OrderScreen from '../screens/OrderScreen/OrderScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {View} from "react-native";
import {BASE_COLOR} from "../styles/globalStyles";
import NotLoggedInScreen from "../screens/Acount/NotLoggedIn/NotLoggedInScreen";
import StoreScreen from "../screens/StoreScreen/StoreScreen";

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: BASE_COLOR,
            }}
        >
            <Tab.Screen
                name="NewsScreen"
                component={NewsScreen}
                options={{
                    tabBarLabel: 'Tin tức',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="newspaper-variant-outline" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name="OrderScreen"
                component={OrderScreen}
                options={{
                    tabBarLabel: 'Tin tức',
                    tabBarIcon: ({color}) => (
                        <Fontisto name="motorcycle" color={color} size={26}/>
                    ),
                }}
            />

            <Tab.Screen
                name="StoreScreen"
                component={() => <StoreScreen/>}
                options={{
                    tabBarLabel: 'Cửa hàng',
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="store" color={color} size={22}/>
                    ),
                }}
            />

            <Tab.Screen
                name="AcountScreen"
                component={() => <NotLoggedInScreen/>}
                options={{
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({color}) => (
                        <Ionicons name="person" color={color} size={26}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default memo(BottomTabs);
