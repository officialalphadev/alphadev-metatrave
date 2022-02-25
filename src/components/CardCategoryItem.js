import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CardCategoryItem = ({image, onPress, name, city, price}) => {
  return (
    <TouchableOpacity
      style={styles.cardCategoryItemContainer}
      onPress={onPress}>
      <View
        style={{
          width: 100,
          height: 90,
          backgroundColor: '#C4C4C4',
          borderRadius: 5,
          marginBottom: 10,
          overflow: 'hidden',
        }}>
        <Image style={{width: 100, height: 90}} source={{uri: image}} />
      </View>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{city}</Text>
      <Text style={styles.harga}>{price}</Text>
    </TouchableOpacity>
  );
};

export default CardCategoryItem;

const styles = StyleSheet.create({
  cardCategoryItemContainer: {
    marginLeft: 16,
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 8,
    color: '#262626',
  },
  harga: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 8,
    color: '#262626',
  },
});
