import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from "./Splash";
import Login from "./Login";
import Register from "./Register";
import setup from "./setup";

const AppNavigator = createStackNavigator({
  /*SplashScreen: {
     screen: SplashScreen
   },*/
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  }
});

export default createAppContainer(AppNavigator);


