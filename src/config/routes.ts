import PhoneLogin from '../pages/Login/PhoneLogin'
import PasswordLogin from '../pages/Login/PasswordLogin'
import CodeRegister from '../pages/Register/CodeRegister'
import PasswordRegister from '../pages/Register/PasswordRegister'
import PhoneRegister from '../pages/Register/PhoneRegister'

import {FunctionComponent} from 'react'

export interface RouteType{
    path:string;
    component:FunctionComponent
}

const routes:RouteType[] = [
    {
        path:'/phoneLogin',
        component:PhoneLogin
    },
    {
        path:'/passwordLogin',
        component:PasswordLogin
    },
    {
        path:'/codeRegister',
        component:CodeRegister
    },
    {
        path:'/passwordRegister',
        component:PasswordRegister
    }, 
    {
        path:'/phoneRegister',
        component:PhoneRegister
    },
    
]
export default routes