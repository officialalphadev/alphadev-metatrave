import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const LoadingAnimation = () => (
  <View style={styles.container}>
    <View style={styles.loading}>
      <ActivityIndicator size={100} color="#053DC7" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoadingAnimation;
