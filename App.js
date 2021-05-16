
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import Router from './components/router/Router';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);

  // useEffect(() => changeScreenOrientation, [])

  // async function changeScreenOrientation() {
  //   await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  // }

  return (
    <Router />
  );
}