import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

import {Logo} from '../assets';

const SplashScreen = ({navigation}) => {
  const User = true;

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(User ? 'MainApp' : 'Onboarding');
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
