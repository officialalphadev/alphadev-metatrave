import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from './AuthProvider';

const Route = () => {
  const {user} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user !== 'logout' ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Route;
