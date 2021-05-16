import React from 'react'
import Nav from '../Nav'
import Login from './Login'
import Signup from './Signup'

const Auth = ({ authRoute }) => {
    return (
        <>
            {authRoute === 'login' && <Login />}
            {authRoute === 'signup' && <Signup />}
            {authRoute === 'app' && <Nav />}
        </>
    )
}

export default Auth
