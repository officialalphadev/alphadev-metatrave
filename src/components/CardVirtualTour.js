import {Image, View} from 'react-native';
import React from 'react';
import TouchableScale from 'react-native-touchable-scale';
import {ColorNeutral300, ColorNeutral900} from '../utils/Colours';
import {RoundedCornerCardMedium} from '../utils/RoundedCorners';
import {useNavigation} from '@react-navigation/native';

const CardVirtualTour = ({style, url, source}) => {
  const navigation = useNavigation();

  return (
    <View style={style}>
      <TouchableScale
        style={{height: 150, width: '100%'}}
        onPress={() =>
          navigation.navigate('Webview', {
            data: url,
          })
        }>
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
          <Image
            source={source}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
      </TouchableScale>
    </View>
  );
};

export default CardVirtualTour;
