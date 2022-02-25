import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CardCategoryItem = ({onPress, name, city, price, ...rest}) => {
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
        }}>
        <Image style={{width: 100, height: 90}} {...rest} />
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
