import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import React from 'react';

import ImageHeader from '../assets/img/foto.png';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import {SafeAreaView} from 'react-native-safe-area-context';
import Buttons from '../components/Buttons';
import {
  ColorNeutral100,
  ColorNeutral900,
  ColorSecondary500,
} from '../utils/Colours';
import {Heading3SemiBold, Heading5SemiBold} from '../utils/Headings';
import {Body1Regular} from '../utils/Bodys';

import IconClock from '../assets/svg/icon-clock.svg';
import IconCalendar from '../assets/svg/icon-calendar.svg';
import IconVisitors from '../assets/svg/icon-visitors.svg';
import IconMaxVisitors from '../assets/svg/icon-max-visitors.svg';
import {IconMedium} from '../utils/Icons';

const DetailWisataScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView>
        <ScrollView>
          <View style={{marginBottom: 20}}>
            <Image
              source={ImageHeader}
              style={{
                width: (windowWidth * 360) / 360,
                height: (windowHeight * 225) / 730,
              }}
            />
          </View>
          <View
            style={{
              padding: 16,
              backgroundColor: ColorNeutral100,
              marginBottom: 20,
            }}>
            <Text
              style={{
                ...Heading3SemiBold,
                color: ColorNeutral900,
                marginBottom: 20,
              }}>
              Informasi Umum
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 6,
              }}>
              <IconClock width={IconMedium} height={IconMedium} />
              <Text
                style={{
                  marginLeft: 6,
                  ...Body1Regular,
                  color: ColorNeutral900,
                }}>
                Jam Operasional : 09.00 - 17.00 (Waktu Setempat)
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 6,
              }}>
              <IconCalendar width={IconMedium} height={IconMedium} />
              <Text
                style={{
                  marginLeft: 6,
                  ...Body1Regular,
                  color: ColorNeutral900,
                }}>
                Buka Hari : Setiap Hari
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 6,
              }}>
              <IconVisitors width={IconMedium} height={IconMedium} />
              <Text
                style={{
                  marginLeft: 6,
                  ...Body1Regular,
                  color: ColorNeutral900,
                }}>
                Jumlah Rara-rata Pengunjung Perhari : 120 Orang
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 6,
              }}>
              <IconMaxVisitors width={IconMedium} height={IconMedium} />
              <Text
                style={{
                  marginLeft: 6,
                  ...Body1Regular,
                  color: ColorNeutral900,
                }}>
                Maksimal Pengunjung : 200 Orang/Hari
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 16,
              marginBottom: 20,
              backgroundColor: ColorNeutral100,
            }}>
            <Text
              style={{
                ...Heading3SemiBold,
                color: ColorNeutral900,
                marginBottom: 20,
              }}>
              Ringkasan
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: 50,
                  backgroundColor: ColorNeutral900,
                  marginRight: 6,
                  marginTop: 6,
                }}></View>
              <Text>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: 50,
                  backgroundColor: ColorNeutral900,
                  marginRight: 6,
                  marginTop: 6,
                }}></View>
              <Text>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: 50,
                  backgroundColor: ColorNeutral900,
                  marginRight: 6,
                  marginTop: 6,
                }}></View>
              <Text>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: 50,
                  backgroundColor: ColorNeutral900,
                  marginRight: 6,
                  marginTop: 6,
                }}></View>
              <Text>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: 50,
                  backgroundColor: ColorNeutral900,
                  marginRight: 6,
                  marginTop: 6,
                }}></View>
              <Text>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: 50,
                  backgroundColor: ColorNeutral900,
                  marginRight: 6,
                  marginTop: 6,
                }}></View>
              <Text>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </Text>
            </View>
          </View>
          <View style={{height: 60}}></View>
        </ScrollView>
      </SafeAreaView>
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          padding: 16,
          backgroundColor: '#ffffff',
          elevation: 16,
          bottom: 0,
          width: windowWidth,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 16,
            alignItems: 'flex-end',
          }}>
          <Text style={{...Heading5SemiBold, color: ColorNeutral900}}>
            Rp 30.000
          </Text>
          <Text style={{...Body1Regular, color: ColorNeutral900}}>
            {' '}
            / Orang
          </Text>
        </View>
        <Buttons
          title="  Beli TIket  "
          type="small"
          backgroundColor={ColorSecondary500}></Buttons>
      </View>
    </View>
  );
};

export default DetailWisataScreen;
