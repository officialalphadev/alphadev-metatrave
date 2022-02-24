import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
