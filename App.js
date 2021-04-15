import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from "./Splash";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
// import Setup from "./footer/setup";

const AppNavigator = createStackNavigator({
  //  Splash: {
  //   screen: Splash
  // },
  // setup: {
  //   screen: Setup
  // },
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Splash: {
    screen: Splash
  },

  ForgotPassword: {
    screen: ForgotPassword
  },

});

export default createAppContainer(AppNavigator);