
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import Router from './components/authentication/Router';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  LogBox.ignoreAllLogs();

  // useEffect(() => changeScreenOrientation, [])

  // async function changeScreenOrientation() {
  //   await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  // }

  return (
    <Router />
  );
}