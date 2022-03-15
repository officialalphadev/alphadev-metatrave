import {View, Text, Image} from 'react-native';
import React from 'react';
import {RoundedCornerCardSmall} from '../utils/RoundedCorners';
import {ColorNeutral300, ColorNeutral900} from '../utils/Colours';
import {Heading3SemiBold} from '../utils/Headings';

const CardQRCode = ({style, source}) => {
  return (
    <View style={style}>
      <View
        style={{
          paddingHorizontal: 40,
          paddingVertical: 30,
          backgroundColor: '#ffffff',
          elevation: 5,
          alignItems: 'center',
          ...RoundedCornerCardSmall,
        }}>
        <View
          style={{
            height: 200,
            width: 200,
            backgroundColor: source ? null : ColorNeutral300,
            marginBottom: 20,
          }}>
          <Image source={source} width={200} height={200} />
        </View>
        <Text style={{...Heading3SemiBold, color: ColorNeutral900}}>
          Scan QR code Di atas
        </Text>
      </View>
    </View>
  );
};

export default CardQRCode;
