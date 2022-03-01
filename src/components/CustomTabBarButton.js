import {StyleSheet} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';

import {IconVr} from '../assets';

const CustomTabBarButton = ({onPress}) => {
  return (
    <TouchableScale onPress={onPress} style={styles.buttonContainer}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#053DC7', '#05B8C7']}
        style={styles.buttonBackground}>
        <IconVr width={40} height={40} />
      </LinearGradient>
    </TouchableScale>
  );
};

export default CustomTabBarButton;

const styles = StyleSheet.create({
  buttonContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBackground: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#053DC7',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
});
