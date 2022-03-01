import React from 'react';
import {StyleSheet, View} from 'react-native';

import LottieView from 'lottie-react-native';

const LoadingAnimation = () => (
  <View style={styles.container}>
    <View style={styles.loading}>
      {/* <ActivityIndicator size={100} color="#053DC7" /> */}
      <LottieView
        source={require('../assets/json/loading-dots-blue.json')}
        style={{width: '150%'}}
        autoPlay
        loop
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    // backgroundColor: '#26262630',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingAnimation;
