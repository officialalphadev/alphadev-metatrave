import {ScrollView, StatusBar, View} from 'react-native';
import React from 'react';
import CardCart from '../components/CardCart';
import Image2 from '../assets/img/img-2.png';
import {useNavigation} from '@react-navigation/native';

const TicketScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={{paddingHorizontal: 26}}>
          <CardCart
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('DetailTicket')}
          />
          <CardCart
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('DetailTicket')}
          />
          <CardCart
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('DetailTicket')}
          />
          <CardCart
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('DetailTicket')}
          />
          <CardCart
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('DetailTicket')}
          />
          <CardCart
            name="Curug Putri Palutungan"
            city="Cisantana Kecamatan Cigugur"
            detailCity="Kabupaten Kuningan"
            price="Rp 21.000"
            rate="4.9"
            image={Image2}
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('DetailTicket')}
          />
          <View style={{height: 20}}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TicketScreen;
