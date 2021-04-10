import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './components/Nav';

export default function App() {

  return (
    <>
    <StatusBar hidden />
    <Nav />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c7c7c7',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})