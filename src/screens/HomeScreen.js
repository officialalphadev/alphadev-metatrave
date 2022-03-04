import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';

import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import CardCategory from '../components/CardCategory';
import CardCategoryItem from '../components/CardCategoryItem';

import Image2 from '../assets/img/img-2.png';

import DataHome from '../data/Home.json';
import {AuthContext} from '../navigation/AuthProvider';
import CardRecomendation from '../components/CardRecomendation';
import CardRecomendationItem from '../components/CardRecomendationItem';
import TouchableScale from 'react-native-touchable-scale';

const HomeScreen = ({navigation}) => {
  // const [isLoading, setLoading] = useState(true);

  const data = DataHome.categories;

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            // onRefresh={}
          />
        }
        showsVerticalScrollIndicator={false}
        style={styles.wrapper}>
        <CardRecomendation
          title="Wisata Disekitar Anda"
          onPress={() =>
            navigation.navigate('Category', {title: 'Wisata Disekitar Anda'})
          }>
          <CardRecomendationItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
          />
          <CardRecomendationItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
          />
          <CardRecomendationItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
          />
          <CardRecomendationItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
          />
          <CardRecomendationItem
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
          />
          <View style={{marginRight: 14}}></View>
        </CardRecomendation>
        <CardCategory title="Kategori Wisata">
          <TouchableScale
            onPress={() =>
              navigation.navigate('Category', {title: 'Wisata Alam'})
            }
            style={{
              width: '100%',
              height: 130,
              backgroundColor: '#C4C4C4',
              borderRadius: 20,
            }}></TouchableScale>
          <TouchableScale
            onPress={() =>
              navigation.navigate('Category', {title: 'Wisata Edukasi'})
            }
            style={{
              width: '100%',
              height: 130,
              backgroundColor: '#C4C4C4',
              borderRadius: 20,
              marginTop: 20,
            }}></TouchableScale>
          <TouchableScale
            onPress={() =>
              navigation.navigate('Category', {title: 'Wisata Religi'})
            }
            style={{
              width: '100%',
              height: 130,
              backgroundColor: '#C4C4C4',
              borderRadius: 20,
              marginTop: 20,
            }}></TouchableScale>
          <TouchableScale
            onPress={() =>
              navigation.navigate('Category', {title: 'Wisata Konversi'})
            }
            style={{
              width: '100%',
              height: 130,
              backgroundColor: '#C4C4C4',
              borderRadius: 20,
              marginTop: 20,
            }}></TouchableScale>
        </CardCategory>
        <View style={{height: 120}} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  wrapper: {
    width: '100%',
  },
});
