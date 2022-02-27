import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from './AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Route = () => {
  const {user, setUser, setUserId} = useContext(AuthContext);

  const GetUserId = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userId');
      jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserId(jsonValue);
      if (jsonValue != null) {
        setUser(true);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    GetUserId();
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Route;
