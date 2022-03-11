import {Text, View} from 'react-native';
import React from 'react';

import {Body1} from '../utils/Bodys';
import {RoundedCornerCardSmall} from '../utils/RoundedCorners';
import TouchableScale from 'react-native-touchable-scale';

const CardIcon = ({
  children,
  width,
  height,
  backgroundColor,
  title,
  onPress,
}) => {
  return (
    <TouchableScale
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width,
      }}>
      <View
        style={{
          width,
          height,
          backgroundColor,
          marginBottom: 5,
          justifyContent: 'center',
          alignItems: 'center',
          ...RoundedCornerCardSmall,
        }}>
        {children}
      </View>
      <Text style={{textAlign: 'center', color: '#262626', ...Body1}}>
        {title}
      </Text>
    </TouchableScale>
  );
};

export default CardIcon;
