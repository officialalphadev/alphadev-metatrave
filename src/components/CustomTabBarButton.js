import {StyleSheet} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';

import {IconVr} from '../assets';
import {ColorNeutral900} from '../utils/Colours';

const CustomTabBarButton = ({onPress}) => {
  return (
    <TouchableScale onPress={onPress} style={styles.buttonContainer}>
      <LinearGradient
        start={{x: 1, y: 0.5}}
        end={{x: 0, y: 0}}
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonBackground: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
