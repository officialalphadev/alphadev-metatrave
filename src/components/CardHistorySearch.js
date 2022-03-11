import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconStar from '../assets/svg/icon-star.svg';

const CardHistorySearch = ({source, name, rate, city, detailCity, price}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <Image source={source} style={{width: 90, height: 90}} />
        <View
          style={{
            position: 'absolute',
            top: 1,
            left: 1,
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
      <View style={styles.wrapper}>
        <Text style={styles.textName}>{name}</Text>
        <View style={{marginVertical: 10}}>
          <Text style={styles.textCity}>{city}</Text>
          <Text style={styles.textDetailCity}>{detailCity}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.harga}>{price}</Text>
          <Text style={styles.text}> / orang</Text>
        </View>
        <TouchableOpacity style={{alignItems: 'flex-end', marginRight: 10}}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 10,
              color: '#053DC7',
            }}>
            Lihat detail
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardHistorySearch;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
    elevation: 5,
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
  },
  backgroundImage: {
    width: 90,
    height: 90,
    backgroundColor: '#c4c4c4',
    borderRadius: 5,
    marginRight: 20,
    overflow: 'hidden',
  },
  wrapper: {
    marginVertical: 5,
    width: '65%',
  },
  textName: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    color: '#262626',
  },
  textCity: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 8,
  },
  textDetailCity: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 8,
  },
  harga: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    color: '#053DC7',
  },
  text: {
    fontFamily: 'Monserrat-Regular',
    fontSize: 12,
  },
});
