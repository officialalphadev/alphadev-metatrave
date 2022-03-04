import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import TouchableScale from 'react-native-touchable-scale';

import IconStar from '../assets/svg/icon-star.svg';

const CardRecomendationItem = ({
  image,
  onPress,
  name,
  city,
  detailCity,
  price,
  rate,
}) => {
  return (
    <TouchableScale
      style={styles.cardRecomendationItemContainer}
      onPress={onPress}>
      <View
        style={{
          width: 120,
          height: 120,
          backgroundColor: '#C4C4C4',
          borderRadius: 10,
          marginBottom: 8,
          overflow: 'hidden',
        }}>
        <Image style={{width: 120, height: 120}} source={image} />
        <View
          style={{
            position: 'absolute',
            top: 6,
            left: 5,
            zIndex: 1,
            paddingVertical: 3,
            paddingHorizontal: 5,
            backgroundColor: '#26262630',
            elevation: 10,
            shadowColor: '#ffffff',
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconStar width={15} height={15} />
            <Text
              style={{
                color: '#ffffff',
                fontSize: 10,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              {rate}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.textName}>{name}</Text>
      <Text style={styles.textCity}>{city}</Text>
      <Text style={styles.textDetailCity}>{detailCity}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.harga}>{price}</Text>
        <Text style={styles.text}> / orang</Text>
      </View>
    </TouchableScale>
  );
};

export default CardRecomendationItem;

const styles = StyleSheet.create({
  cardRecomendationItemContainer: {
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 16,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 9,
    shadowColor: '#262626',
    elevation: 5,
  },
  textName: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 9,
    color: '#262626',
    marginBottom: 5,
  },
  textCity: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 7,
    color: '#262626',
  },
  textDetailCity: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 7,
    color: '#262626',
    marginBottom: 13,
  },
  harga: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    color: '#262626',
    color: '#053DC7',
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    color: '#262626',
  },
});
