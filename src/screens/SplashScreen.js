import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useContext, useEffect} from 'react';

import {Logo} from '../assets';
import {AuthContext} from '../navigation/AuthProvider';

const SplashScreen = ({navigation}) => {
  const {user, isFirstLaunch} = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(
        user !== 'logout'
          ? 'MainApp'
          : isFirstLaunch !== 'dontLaunch'
          ? 'Onboarding'
          : 'Login',
      );
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Logo width={180} height={180} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
