import AuthType from './../../types/AuthType';
import { AsyncStorage } from 'react-native';

interface AuthInterface {
    isLogin: boolean,
}

const AuthReducer = (state: AuthInterface = {
    isLogin: false
}, action: any) => {
    switch (action.type) {
        case AuthType.LOGIN:
            AsyncStorage.setItem('isLogin',JSON.stringify({isLogin:true}));
            return {
                isLogin:true
            }

        case AuthType.LOGOUT:
            AsyncStorage.clear();
            return {
                isLogin:false
            }
    }

    return state;
}

export default AuthReducer;