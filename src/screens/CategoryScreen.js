import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

import CardCategoryItem from '../components/CardCategoryItem';

import Image2 from '../assets/img/img-2.png';

const CategoryScreen = ({route, navigation}) => {
  useEffect(() => {
    navigation.setOptions({title: route.params.title});
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView>
        <View
          style={{
            height: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          <CardCategoryItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
          />
          <CardCategoryItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
          />
          <CardCategoryItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
          />
          <CardCategoryItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
          />
          <CardCategoryItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
          />
          <CardCategoryItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
          />
          <CardCategoryItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
          />
          <CardCategoryItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
          />
        </View>
        <View style={{height: 40}} />
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
