import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import CardHistorySearch from '../components/CardHistorySearch';
import Image2 from '../assets/img/img-2.png';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={{alignItems: 'flex-end', marginVertical: 10}}>
        <TouchableOpacity style={{marginRight: 16}}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 12,
              color: '#053DC7',
            }}>
            Hapus
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <CardHistorySearch
          source={Image2}
          name="Curug Putri Palutungan"
          rate="4.9"
          city="Cisantana Kecamatan Cigugur"
          detailCity="Kabupaten Kuningan, Jawa Barat 4552"
          price="Rp 30.000"
        />
        <CardHistorySearch
          source={Image2}
          name="Curug Putri Palutungan"
          rate="4.9"
          city="Cisantana Kecamatan Cigugur"
          detailCity="Kabupaten Kuningan, Jawa Barat 4552"
          price="Rp 30.000"
        />
        <CardHistorySearch
          source={Image2}
          name="Curug Putri Palutungan"
          rate="4.9"
          city="Cisantana Kecamatan Cigugur"
          detailCity="Kabupaten Kuningan, Jawa Barat 4552"
          price="Rp 30.000"
        />
        <CardHistorySearch
          source={Image2}
          name="Curug Putri Palutungan"
          rate="4.9"
          city="Cisantana Kecamatan Cigugur"
          detailCity="Kabupaten Kuningan, Jawa Barat 4552"
          price="Rp 30.000"
        />
        <CardHistorySearch
          source={Image2}
          name="Curug Putri Palutungan"
          rate="4.9"
          city="Cisantana Kecamatan Cigugur"
          detailCity="Kabupaten Kuningan, Jawa Barat 4552"
          price="Rp 30.000"
        />
        <CardHistorySearch
          source={Image2}
          name="Curug Putri Palutungan"
          rate="4.9"
          city="Cisantana Kecamatan Cigugur"
          detailCity="Kabupaten Kuningan, Jawa Barat 4552"
          price="Rp 30.000"
        />
        <CardHistorySearch
          source={Image2}
          name="Curug Putri Palutungan"
          rate="4.9"
          city="Cisantana Kecamatan Cigugur"
          detailCity="Kabupaten Kuningan, Jawa Barat 4552"
          price="Rp 30.000"
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
