import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const VirtualTourScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Text>VirtualTourScreen</Text>
    </View>
  );
};

export default VirtualTourScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
