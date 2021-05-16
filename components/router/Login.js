import React, { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import * as  firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert } from 'react-native';
import { Redirect, useHistory } from 'react-router-dom';
import Nav from '../Nav';


const firebaseConfig = {
  apiKey: "AIzaSyBUkEJdwGHyjU5_2DFVaesHkQzUDNHnc1w",
  authDomain: "mymusic-c0882.firebaseapp.com",
  databaseURL: "https://mymusic-c0882-default-rtdb.firebaseio.com",
  projectId: "mymusic-c0882",
  storageBucket: "mymusic-c0882.appspot.com",
  messagingSenderId: "613797255615",
  appId: "1:613797255615:web:e2e093c71441ff34d7e90a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = ({ setIsLogin }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: '', password: '' });
  const [isHidden, setIsHidden] = useState(true);
  const [icon, setIcon] = useState(true);

  let history = useHistory();

  useEffect(() => {
    setIsLogin(true);
    getUsers();
  }, [])

  const getUsers = () => {
    firebase.database().ref('account').on('value', snapshot => {
      const data = snapshot.val();
      const accounts = Object.values(data);
      setUsers(accounts);
    })
  }

  const showPassword = () => {
    setIsHidden(!isHidden);
    setIcon(!icon);
  }

  const getLoginResult = () => {
    let result;
    for (const element of users) {
      if (element.username !== user.username || element.password !== user.password) {
        result = 'fail';
      } else {
        result = 'success';
        break;
      }
    }

    return result;
  }

  const login = () => {
    // const result = getLoginResult();

    // result === 'success' ? history.push('/app') : Alert.alert('Check username & password')
    history.push('/app')
  }


  if (getLoginResult() !== 'success')
    return (
      <>
        <StatusBar hidden />

        <Input
          placeholder='Enter user name'
          onChangeText={text => setUser({ ...user, username: text.toLowerCase() })}
          containerStyle={{ width: '80%' }}
        />

        <Input
          placeholder='Password'
          onChangeText={text => setUser({ ...user, password: text })}
          containerStyle={{ width: '80%' }}
          secureTextEntry={isHidden}
          rightIcon={
            <Icon
              name={icon ? 'eye' : 'eye-slash'}
              color='gray'
              size={25}
              onPress={showPassword}
            />}
        />

        <View style={{ width: '75%', alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 12, color: '#FF94A1' }}>
            Forgot password?
        </Text>
        </View>

        <Button
          title='Log in'
          containerStyle={{ width: '75%', marginTop: 60, borderRadius: 50 }}
          buttonStyle={{ backgroundColor: '#FF94A1' }}
          onPress={login}
        />
      </>
    )
  else
    return (
      <Nav />
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F7',
    width: '80%',
    borderRadius: 50,
    alignItems: 'center'
  },
})


export default Login
