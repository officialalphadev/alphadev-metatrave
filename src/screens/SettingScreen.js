import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';

import {AuthContext} from '../navigation/AuthProvider';

const SettingScreen = () => {
  const {logout, user} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Text>{user ? user : 'TEST'}</Text>
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
