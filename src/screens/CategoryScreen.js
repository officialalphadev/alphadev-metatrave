import {ScrollView, StatusBar, View} from 'react-native';
import React, {useEffect} from 'react';

import CardCategoryItem from '../components/CardCategoryItem';

import Image2 from '../assets/img/img-2.png';
import {useNavigation} from '@react-navigation/native';

const CategoryScreen = ({route}) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: route.params.title});
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
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
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('DetailWisata')}
          />
          <CardCategoryItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('DetailWisata')}
          />
          <CardCategoryItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('DetailWisata')}
          />
          <CardCategoryItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('DetailWisata')}
          />
          <CardCategoryItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('DetailWisata')}
          />
          <CardCategoryItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('DetailWisata')}
          />
        </View>
        <View style={{height: 20}} />
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;
