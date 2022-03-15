import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import CardQRCode from '../components/CardQRCode';
import ImageQRCode from '../assets/img/image-qrcode.png';
import {ColorNeutral100, ColorNeutral900} from '../utils/Colours';
import {Heading4SemiBold} from '../utils/Headings';
import {Body1Regular} from '../utils/Bodys';

const DetailTicketScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView>
        <View style={{paddingHorizontal: 40, paddingVertical: 30}}>
          <CardQRCode source={ImageQRCode} />
        </View>
        <View
          style={{
            backgroundColor: ColorNeutral100,
            paddingHorizontal: 16,
            paddingVertical: 20,
          }}>
          <Text
            style={{
              ...Heading4SemiBold,
              color: ColorNeutral900,
              marginBottom: 15,
            }}>
            Cara Penggunaan
          </Text>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Text
              style={{...Body1Regular, color: ColorNeutral900, marginRight: 5}}>
              1.
            </Text>
            <Text style={{...Body1Regular, color: ColorNeutral900}}>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Text
              style={{...Body1Regular, color: ColorNeutral900, marginRight: 5}}>
              2.
            </Text>
            <Text style={{...Body1Regular, color: ColorNeutral900}}>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Text
              style={{...Body1Regular, color: ColorNeutral900, marginRight: 5}}>
              3.
            </Text>
            <Text style={{...Body1Regular, color: ColorNeutral900}}>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Text
              style={{...Body1Regular, color: ColorNeutral900, marginRight: 5}}>
              4.
            </Text>
            <Text style={{...Body1Regular, color: ColorNeutral900}}>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Text
              style={{...Body1Regular, color: ColorNeutral900, marginRight: 5}}>
              5.
            </Text>
            <Text style={{...Body1Regular, color: ColorNeutral900}}>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Text
              style={{...Body1Regular, color: ColorNeutral900, marginRight: 5}}>
              6.
            </Text>
            <Text style={{...Body1Regular, color: ColorNeutral900}}>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailTicketScreen;
