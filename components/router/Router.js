import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Landing from './Landing';
import Auth from './Auth';

const Router = () => {

  return (
    <NativeRouter>
      <Route exact path='/' component={Landing} />
      <Route exact path='/signup' render={() => <Auth authRoute='signup' />} />
      <Route exact path='/login' render={() => <Auth authRoute='login' />} />
      <Route exact path='/app' render={() => <Auth authRoute='app' />} />
    </NativeRouter>
  )
}

export default Router
