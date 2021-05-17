import React from 'react'
import TabNavigation from '../navigation/TabNavigation'
import Login from './Login'
import Signup from './Signup'

const Auth = ({ authRoute }) => {
    return (
        <>
            {authRoute === 'login' && <Login />}
            {authRoute === 'signup' && <Signup />}
            {authRoute === 'app' && <TabNavigation />}
        </>
    )
}

export default Auth
