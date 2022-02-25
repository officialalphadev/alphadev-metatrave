import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardCategory = ({children, title}) => {
  return (
    <View style={styles.cardCategoryContainer}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal={true}>{children}</ScrollView>
    </View>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  cardCategoryContainer: {
    marginTop: 30,
  },
  title: {
    marginLeft: 16,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: '#262626',
    marginBottom: 20,
  },
});
