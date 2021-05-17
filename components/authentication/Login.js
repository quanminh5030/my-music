import React, { useEffect, useState } from 'react'
import { Alert, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, Header, Image, Input } from 'react-native-elements';
import * as  firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-native';
import * as GoogleSignIn from 'expo-google-sign-in';
import { firebaseConfig } from '../../config/keysConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: '', password: '' });
  const [isHidden, setIsHidden] = useState(true);
  const [icon, setIcon] = useState(true);

  // const [googleUser, setGoogleUser] = useState(null);

  let history = useHistory();

  useEffect(() => {
    getUsers();
    // initAsync();
    // return () => firebase.database().goOffline();
  }, [user])

  // Google sign in
  // const initAsync = async () => {
  //   await GoogleSignIn.initAsync({
  //     //clientId: '' in app.json
  //   });

  //   _syncUserWithStateAsync();
  // }

  // const _syncUserWithStateAsync = async () => {
  //   const gUser = await GoogleSignIn.signInSilentlyAsync();
  //   setGoogleUser(gUser);
  // }

  // const signOutAsync = async () => {
  //   await GoogleSignIn.signOutAsync();
  //   setGoogleUser(null);
  // }

  // const signInAsync = async () => {
  //   try {
  //     await GoogleSignIn.askForPlayServicesAsync();
  //     const { type, user } = await GoogleSignIn.signInAsync();
  //     if (type === 'success') {
  //       _syncUserWithStateAsync()
  //     }
  //   } catch ({ message }) {
  //     Alert.alert('login: Error: ' + message)
  //   }
  // };

  // const ggSignIn = () => {
  //   if (googleUser) {
  //     signOutAsync();
  //   } else {
  //     signInAsync();
  //   }
  // }


  const ggSignIn = () => {
    console.log('google')
  }


  const getUsers = () => {
    firebase.database().ref('account').on('value', snapshot => {
      const data = snapshot.val();
      const accounts = Object.values(data);
      setUsers(accounts)
    })
  }

  // console.log(users)

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
    const result = getLoginResult();

    result === 'success' ? history.push('/app') : Alert.alert('Username or password is incorrect')
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
            style={{ width: '50%', borderRadius: 50, backgroundColor: '#FF94A1' }}
          >
            <Text
              style={{
                textAlign: 'center',
                padding: 10,
                fontSize: 15,
                color: 'white'
              }}
            >Log In</Text>
          </Link>

          <Link to='/signup'
            style={{ width: '50%', borderRadius: 50, backgroundColor: '#FFDCE0' }}
          >
            <Text
              style={{
                textAlign: 'center',
                padding: 10,
                fontSize: 15,
                color: '#FF94A1',

              }}
            >
              Sign Up
                </Text>
          </Link>
        </View>


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
          <Text style={{ fontSize: 12, color: '#FF94A1' }}
            onPress={() => console.log('forgot')}
          >
            Forgot password?
        </Text>
        </View>

        <Button
          title='Log in'
          containerStyle={{ width: '75%', marginTop: 60, borderRadius: 50 }}
          buttonStyle={{ backgroundColor: '#FF94A1' }}
          onPress={login}
        />

        <View style={{ width: '75%', alignItems: 'center', margin: 25 }}>
          <Text style={{ fontSize: 15, color: '#FF94A1' }}>
            OR
        </Text>
        </View>

        <View style={{flex: 1, display: 'flex', flexDirection: 'row-reverse', width: '50%', justifyContent: 'space-evenly'}}>
          <TouchableOpacity onPress={ggSignIn}>
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
    alignItems: 'center',
  },
})


export default Login
