import React, { useEffect, useState } from 'react'
import { Alert, StatusBar, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import * as  firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const Signup = ({ setIsLogin }) => {

  const [user, setUser] = useState({ username: '', password: '' })
  const [pwCheck, setPwCheck] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isHidden, setIsHidden] = useState(true);
  const [icon, setIcon] = useState(true);

  useEffect(() => {
    setIsLogin(false)
  }, [])

  const showPassword = () => {
    setIsHidden(!isHidden);
    setIcon(!icon);
  }

  const handleCheckPassword = pw => {
    setPwCheck(pw);
    if (pw !== user.password) {
      setErrorMsg('Password is incorrect!')
    } else {
      setErrorMsg('');
    }
  }

  const signUp = () => {
    if (!user.username || !user.password) {
      Alert.alert('Username or password is missing');
    } else if (pwCheck !== user.password) {
      Alert.alert('Password is incorrect')
    }
    else {
      firebase.database().ref('account').push(
        {
          'username': user.username,
          'password': user.password
        }
      )

      setUser({ username: '', password: '' });
      setPwCheck('');
    }
  }

  return (
    <>
      <StatusBar hidden />

      <Input
        placeholder='Enter user name'
        value={user.username}
        onChangeText={text => {
          setUser({ ...user, username: text.trim().toLowerCase() })
        }}
        containerStyle={{ width: '80%' }}
      />

      <Input
        placeholder='Password'
        secureTextEntry={isHidden}
        value={user.password}
        onChangeText={text => {
          setUser({ ...user, password: text.trim() })
        }}
        containerStyle={{ width: '80%' }}

        rightIcon={
          <Icon
            name={icon ? 'eye' : 'eye-slash'}
            color='gray'
            size={25}
            onPress={showPassword}
          />}
      />

      <Input
        placeholder='Confirm password'
        secureTextEntry={isHidden}
        value={pwCheck}
        onChangeText={handleCheckPassword}
        containerStyle={{ width: '80%' }}
        errorMessage={errorMsg}
        errorStyle={errorMsg && { color: 'red', fontSize: 10 }}

        rightIcon={
          <Icon
            name={icon ? 'eye' : 'eye-slash'}
            color='gray'
            size={25}
            onPress={showPassword}
          />}
      />

      <Button
        title='Sign up'
        containerStyle={{ width: '75%', marginTop: 60, borderRadius: 50 }}
        buttonStyle={{ backgroundColor: '#FF94A1' }}
        onPress={signUp}
      />
    </>
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


export default Signup
