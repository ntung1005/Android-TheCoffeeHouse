import AuthType from './../../types/AuthType';

const login = () =>{
    return{
        type:AuthType.LOGIN
    }
}

const logout = () =>{
    return{
        type:AuthType.LOGOUT
    }
}