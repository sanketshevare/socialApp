import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from "./Splash";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import Chat from "./Chat";
//import setup from "./setup";

const AppNavigator = createStackNavigator({
  // Splash: {
  //   screen: Splash
  // },
  // setup: {
  //   screen: setup
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
  Chat: {
    screen: Chat
  },
});

export default createAppContainer(AppNavigator);