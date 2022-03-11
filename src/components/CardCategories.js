import {View, Image, Text} from 'react-native';
import React from 'react';
import TouchableScale from 'react-native-touchable-scale';
import {
  ColorNeutral100,
  ColorNeutral300,
  ColorNeutral900,
} from '../utils/Colours';
import {
  RoundedCornerCardMedium,
  RoundedCornerCardSmall,
} from '../utils/RoundedCorners';
import {Heading5SemiBold} from '../utils/Headings';

const CardCategories = ({style, onPress, source, title}) => {
  return (
    <View style={style}>
      <TouchableScale style={{height: 150, width: '100%'}} onPress={onPress}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: ColorNeutral300,
            overflow: 'hidden',
            elevation: 10,
            shadowColor: ColorNeutral900,
            ...RoundedCornerCardMedium,
          }}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 5,
              backgroundColor: '#ffffff30',
              position: 'absolute',
              zIndex: 1,
              right: 16,
              bottom: 10,
              ...RoundedCornerCardSmall,
            }}>
            <Text style={{...Heading5SemiBold, color: ColorNeutral100}}>
              {title}
            </Text>
          </View>
          <Image
            source={source}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
      </TouchableScale>
    </View>
  );
};

export default CardCategories;
