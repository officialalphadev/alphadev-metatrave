import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Route = () => {
  const User = true;
  return (
    <NavigationContainer>
      {User ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Route;
