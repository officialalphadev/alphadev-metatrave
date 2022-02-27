import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoadingAnimation from '../components/LoadingAnimation';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <LoadingAnimation />
      <Button title="TEST" />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
