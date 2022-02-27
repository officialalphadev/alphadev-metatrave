import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import {AuthContext} from '../navigation/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingScreen = () => {
  const {userId, setUserId} = useContext(AuthContext);

  const DisplayUserId = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userId');
      jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserId(jsonValue.replace('"', '').replace('"', ''));
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    DisplayUserId();
  }, []);

  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Text style={{marginBottom: 20}}>User Id : {userId}</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
