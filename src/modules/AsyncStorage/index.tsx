import { AsyncStorage } from 'react-native';

import React from 'react';
import AuthType from '../../store/types/AuthType';

const checkLogin = async (dispatch:any) => { 
    const isLogged = await AsyncStorage.getItem('isLoggedIn');

    if(isLogged){
        dispatch({
            type:AuthType.LOGIN
        })
    }

};

const setLoginStorage = (dispatch:any) =>{
    AsyncStorage.setItem('isLoggedIn', JSON.stringify({
        isLogin:true
    }));

    dispatch({
        type:AuthType.LOGIN
    })
}

const removeLoginStorage = (dispatch:any) =>{
    AsyncStorage.clear();

    dispatch({
        type:AuthType.LOGOUT
    })
}

export {checkLogin,setLoginStorage,removeLoginStorage}