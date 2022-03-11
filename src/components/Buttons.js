import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Heading2, Heading3, Heading4} from '../utils/Headings';

const Buttons = ({
  children,
  style,
  onPress,
  title,
  backgroundColor,
  type,
  disabled,
}) => {
  return (
    <View style={style}>
      <TouchableOpacity
        {...(!disabled ? (onPress = {onPress}) : null)}
        style={[
          {
            paddingHorizontal:
              type == 'small'
                ? 12
                : type == 'medium'
                ? 20
                : type == 'large'
                ? 24
                : null,
            paddingVertical:
              type == 'small'
                ? 6
                : type == 'medium'
                ? 8
                : type == 'large'
                ? 12
                : null,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          },
          {
            backgroundColor: disabled
              ? backgroundColor + '50'
              : backgroundColor,
          },
        ]}>
        <Text
          style={[
            {color: '#ffffff'},
            type == 'small'
              ? {...Heading4}
              : type == 'medium'
              ? {...Heading3}
              : type == 'large'
              ? {...Heading2}
              : null,
          ]}>
          {title}
        </Text>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
