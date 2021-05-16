import React, { useState } from 'react';
import { Link, NativeRouter, Route } from 'react-router-native';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Button, Header, Text } from 'react-native-elements';
import Nav from '../Nav';

const Router = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <NativeRouter>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <StatusBar hidden />

        <Header
          containerStyle={{ height: 150, backgroundColor: 'white' }}
          backgroundImage={require('./camp.jpg')}
          backgroundImageStyle={{ resizeMode: 'cover', height: 200, borderBottomLeftRadius: 50, borderBottomRightRadius: 120 }}
        />

        <View style={styles.container}>
          <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 40, justifyContent: 'center', width: '80%', backgroundColor: '#FFDCE0', borderRadius: 50 }}>

            <Link to='/login'
              style={isLogin ? { width: '50%', borderRadius: 50, backgroundColor: '#FF94A1' } : { width: '50%', borderRadius: 50, backgroundColor: '#FFDCE0' }}
            >
              <Text
                style={isLogin ? {
                  textAlign: 'center',
                  padding: 10,
                  fontSize: 15,
                  color: 'white'
                } : {
                  textAlign: 'center',
                  padding: 10,
                  fontSize: 15,
                  color: '#FF94A1'
                }}
              >Log In</Text>
            </Link>

            <Link to='/signup'
              style={!isLogin ? { width: '50%', borderRadius: 50, backgroundColor: '#FF94A1' } : { width: '50%', borderRadius: 50, backgroundColor: '#FFDCE0' }}
            >
              <Text
                style={!isLogin ? {
                  textAlign: 'center',
                  padding: 10,
                  fontSize: 15,
                  color: 'white',

                } : {
                  textAlign: 'center',
                  padding: 10,
                  fontSize: 15,
                  color: '#FF94A1'
                }}
              >
                Sign Up
                </Text>
            </Link>
          </View>

          <Route exact path='/' component={Landing} />
          <Route path='/signup' render={() => <Signup setIsLogin={setIsLogin} />} />
          <Route path='/login' render={() => <Login setIsLogin={setIsLogin} />} />
          <Route path='/app' render={() => <Nav />} />
        </View>
      </View>
    </NativeRouter>
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

export default Router
