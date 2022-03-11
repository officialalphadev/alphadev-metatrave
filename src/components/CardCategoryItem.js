import {Image, Text, View} from 'react-native';
import React from 'react';

import TouchableScale from 'react-native-touchable-scale';

import IconStar from '../assets/svg/icon-star.svg';
import {
  RoundedCornerCardExtraSmall,
  RoundedCornerCardSmall,
} from '../utils/RoundedCorners';
import {
  ColorNeutral100,
  ColorNeutral300,
  ColorNeutral900,
  ColorPrimary500,
} from '../utils/Colours';
import {Heading5SemiBold, Heading6SemiBold} from '../utils/Headings';
import {Body1Regular, Body2Light} from '../utils/Bodys';

const CardCategoryItem = ({
  image,
  onPress,
  name,
  city,
  detailCity,
  price,
  rate,
  style,
}) => {
  return (
    <View style={style}>
      <TouchableScale
        style={{
          paddingVertical: 10,
          paddingHorizontal: 8,
          backgroundColor: '#ffffff',
          elevation: 3,
          ...RoundedCornerCardSmall,
        }}
        onPress={onPress}>
        <View
          style={{
            width: 120 * 1.06,
            height: 110 * 1.06,
            backgroundColor: ColorNeutral300,
            marginBottom: 10,
            overflow: 'hidden',
            ...RoundedCornerCardExtraSmall,
          }}>
          <Image
            style={{width: 120 * 1.06, height: 110 * 1.06}}
            source={image}
          />
          <View
            style={{
              position: 'absolute',
              top: 6,
              left: 6,
              zIndex: 1,
              paddingVertical: 3,
              paddingHorizontal: 5,
              backgroundColor: '#ffffff30',
              ...RoundedCornerCardExtraSmall,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <IconStar width={12} height={12} />
              <Text
                style={{
                  ...Heading5SemiBold,
                  color: ColorNeutral100,
                  marginLeft: 4,
                }}>
                {rate}
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            ...Heading6SemiBold,
            color: ColorNeutral900,
            marginBottom: 10,
          }}>
          {name}
        </Text>
        <Text style={{...Body2Light, color: ColorNeutral900}}>{city}</Text>
        <Text style={{...Body2Light, color: ColorNeutral900, marginBottom: 10}}>
          {detailCity}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text style={{...Heading5SemiBold, color: ColorPrimary500}}>
            {price}
          </Text>
          <Text style={{...Body1Regular, color: ColorNeutral900}}>
            {' '}
            / orang
          </Text>
        </View>
      </TouchableScale>
    </View>
  );
};

export default CardCategoryItem;
