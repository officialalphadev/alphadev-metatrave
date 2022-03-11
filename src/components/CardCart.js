import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  RoundedCornerCardExtraSmall,
  RoundedCornerCardSmall,
} from '../utils/RoundedCorners';
import {
  ColorNeutral100,
  ColorNeutral300,
  ColorNeutral900,
  ColorPrimary400,
  ColorPrimary500,
} from '../utils/Colours';
import {Heading5SemiBold, Heading6SemiBold} from '../utils/Headings';
import {
  Body1Regular,
  Body1SemiBold,
  Body2Light,
  Body2Regular,
  Body2SemiBold,
} from '../utils/Bodys';
import TouchableScale from 'react-native-touchable-scale';
import IconStar from '../assets/svg/icon-star.svg';

const CardCart = ({
  style,
  image,
  onPress,
  name,
  city,
  detailCity,
  price,
  rate,
}) => {
  return (
    <View style={style}>
      <TouchableScale
        style={{
          padding: 6,
          backgroundColor: '#ffffff',
          elevation: 3,
          flexDirection: 'row',
          ...RoundedCornerCardSmall,
        }}
        onPress={onPress}>
        <View
          style={{
            width: 80,
            height: 90,
            backgroundColor: ColorNeutral300,
            overflow: 'hidden',
            ...RoundedCornerCardExtraSmall,
          }}>
          <Image style={{width: 80, height: 90}} source={image} />
          <View
            style={{
              position: 'absolute',
              top: 5,
              left: 3.5,
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
              <IconStar width={10} height={10} />
              <Text
                style={{
                  ...Body2Regular,
                  color: ColorNeutral100,
                  marginLeft: 4,
                }}>
                {rate}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginLeft: 20,
            paddingVertical: 6,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...Body1SemiBold,
              color: ColorNeutral900,
            }}>
            {name}
          </Text>
          <View style={{marginBottom: 10}}>
            <Text style={{...Body2Light, color: ColorNeutral900}}>{city}</Text>
            <Text style={{...Body2Light, color: ColorNeutral900}}>
              {detailCity}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={{...Body1SemiBold, color: ColorPrimary500}}>
              {price}
            </Text>
            <Text style={{...Body1Regular, color: ColorNeutral900}}>
              {' '}
              / orang
            </Text>
          </View>
        </View>
        <View style={{position: 'absolute', right: 6, bottom: 11}}>
          <Text
            style={{
              ...Body2SemiBold,
              textDecorationLine: 'underline',
              color: ColorPrimary400,
            }}>
            Lihat Detail
          </Text>
        </View>
      </TouchableScale>
    </View>
  );
};

export default CardCart;
