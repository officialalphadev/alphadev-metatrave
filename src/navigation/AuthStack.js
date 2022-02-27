import React, {useContext, useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SplashScreen,
  LoginScreen,
  SignupScreen,
  OnboardingScreen,
} from '../screens';
import {AuthContext} from './AuthProvider';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const {isFirstLaunch, setIsFirstLaunch} = useContext(AuthContext);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunch').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunch', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Splash';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
