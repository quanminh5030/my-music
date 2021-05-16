import React, { useEffect, useState } from 'react'
import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Header, Image, Input } from 'react-native-elements';
import * as  firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'react-router-native';
import { firebaseConfig } from '../../config/keysConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Signup = () => {
  const [user, setUser] = useState({ username: '', password: '' })
  const [pwCheck, setPwCheck] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isHidden, setIsHidden] = useState(true);
  const [icon, setIcon] = useState(true);

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

      Alert.alert('User created successfully!');

      // firebase.database().goOffline();
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <StatusBar hidden />

      <Header
        containerStyle={{ height: 150, backgroundColor: 'white' }}
        backgroundImage={require('../../assets/myImg/camp.jpg')}
        backgroundImageStyle={{ resizeMode: 'cover', height: 200, borderBottomLeftRadius: 50, borderBottomRightRadius: 120 }}
      />
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 40, justifyContent: 'center', width: '80%', backgroundColor: '#FFDCE0', borderRadius: 50 }}>
          <Link to='/login'
            style={{ width: '50%', borderRadius: 50, backgroundColor: '#FFDCE0' }}
          >
            <Text
              style={{
                textAlign: 'center',
                padding: 10,
                fontSize: 15,
                color: '#FF94A1'
              }}
            >Log In</Text>
          </Link>

          <Link to='/signup'
            style={{ width: '50%', borderRadius: 50, backgroundColor: '#FF94A1' }}
          >
            <Text
              style={{
                textAlign: 'center',
                padding: 10,
                fontSize: 15,
                color: 'white',
              }}
            >
              Sign Up
                </Text>
          </Link>
        </View>

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
          containerStyle={{ width: '75%', marginTop: 20, borderRadius: 50 }}
          buttonStyle={{ backgroundColor: '#FF94A1' }}
          onPress={signUp}
        />

        <View style={{ width: '75%', alignItems: 'center', margin: 25 }}>
          <Text style={{ fontSize: 15, color: '#FF94A1' }}>
            OR
        </Text>
        </View>

        <View style={{ flex: 1, display: 'flex', flexDirection: 'row-reverse', width: '50%', justifyContent: 'space-evenly' }}>
          <TouchableOpacity onPress={() => console.log('google')}>
            <Image
              source={require('../../assets/myImg/google.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('facebook')}>
            <Image
              source={require('../../assets/myImg/facebook.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: '#FFF5F7',
    width: '80%',
    borderRadius: 50,
    alignItems: 'center'
  },
})


export default Signup
