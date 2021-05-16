import React from 'react'
import { Alert, Text } from 'react-native'
import { useHistory } from 'react-router-dom'

const Logout = () => {
    let history = useHistory();

    Alert.alert(
        '',
        'Are you sure your want to logout?',
        [
            {
                text: 'OK',
                onPress: () => history.push('/login'),
                style: 'destructive'
            },
            {
                text: 'Cancel',
                style: 'cancel'
            }
        ]
    )

    return (
        <></>
    )
}

export default Logout
