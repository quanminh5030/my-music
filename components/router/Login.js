import React, { useEffect } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

const Login = ({setIsLogin}) => {

  useEffect(() => setIsLogin(true), [])

  return (
    <>
      <StatusBar hidden />

      <Input
        placeholder='Enter user name'
        onChangeText={text => console.log(text)}
        containerStyle={{ width: '80%' }}
      />

      <Input
        placeholder='Password'
        onChangeText={text => console.log(text)}
        containerStyle={{ width: '80%' }}
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


export default Login
