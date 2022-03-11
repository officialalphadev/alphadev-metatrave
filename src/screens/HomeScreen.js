import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';

import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import CardCategory from '../components/CardCategory';
import CardCategoryItem from '../components/CardCategoryItem';

import Image1 from '../assets/img/img-1.png';

import DataHome from '../data/Home.json';
import {AuthContext} from '../navigation/AuthProvider';
import CardRecomendation from '../components/CardRecomendation';
import CardRecomendationItem from '../components/CardRecomendationItem';
import TouchableScale from 'react-native-touchable-scale';

import {Heading2, Heading4, Heading5} from '../utils/Headings';
import CardIcon from '../components/CardIcon';
import {IconExtraSmall, IconLarge, IconMedium} from '../utils/Icons';
import IconStar from '../assets/svg/icon-star.svg';
import {
  ColorNeutral100,
  ColorNeutral300,
  ColorNeutral900,
  ColorPrimary500,
  ColorSecondary500,
} from '../utils/Colours';

import IconVr from '../assets/svg/icon-vr.svg';
import IconTicket from '../assets/svg/icon-ticket.svg';
import IconDot from '../assets/svg/icon-dot.svg';
import IconCategory from '../assets/svg/icon-category.svg';
import LinearGradient from 'react-native-linear-gradient';

import BackgroundPromo1 from '../assets/img/background-promo-1.png';
import {
  RoundedCornerCardExtraSmall,
  RoundedCornerCardMedium,
  RoundedCornerCardSmall,
} from '../utils/RoundedCorners';
import {Body1, Body3} from '../utils/Bodys';

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
        {/* <CardRecomendation
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
        </CardCategory>
        <View style={{height: 120}} /> */}
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 20,
          }}>
          <Text style={{...Heading2, color: '#262626', marginBottom: 20}}>
            Fitur
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
            <CardIcon
              backgroundColor={ColorSecondary500}
              width={IconLarge}
              height={IconLarge}
              title="Virtual Tour">
              <IconVr width={IconMedium} height={IconMedium} />
            </CardIcon>
            <CardIcon
              backgroundColor={ColorSecondary500}
              width={IconLarge}
              height={IconLarge}
              title="Beli Tiket">
              <IconTicket width={IconMedium} height={IconMedium} />
            </CardIcon>
            <CardIcon
              backgroundColor={ColorSecondary500}
              width={IconLarge}
              height={IconLarge}
              title="Kategori">
              <IconCategory width={IconMedium} height={IconMedium} />
            </CardIcon>
            <CardIcon
              backgroundColor={ColorSecondary500}
              width={IconLarge}
              height={IconLarge}
              title="Lainnya">
              <IconDot width={IconMedium} height={IconMedium} />
            </CardIcon>
          </View>
        </View>
        <ScrollView horizontal>
          <View
            style={{
              paddingVertical: 10,
              paddingLeft: 16,
              flexDirection: 'row',
            }}>
            <TouchableScale>
              <LinearGradient
                colors={[ColorPrimary500, ColorSecondary500]}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={{
                  width: 276,
                  height: 130,
                  marginRight: 16,
                  paddingVertical: 21,
                  paddingHorizontal: 26,
                  ...RoundedCornerCardMedium,
                }}>
                <Image
                  style={{position: 'absolute', right: 0, top: 5}}
                  source={BackgroundPromo1}
                  width={96}
                  height={87}
                />
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: ColorNeutral100 + '20',
                    right: 14,
                    bottom: 10,
                    padding: 6,
                    ...RoundedCornerCardSmall,
                  }}>
                  <Text style={{...Heading5, color: '#ffffff'}}>
                    Diskon 100%
                  </Text>
                </View>
                <View style={{width: '85%'}}>
                  <Text style={{color: '#ffffff', ...Heading2}}>
                    Nikmati Kunjungan Gratis,
                  </Text>
                  <Text style={{color: '#ffffff', ...Heading2}}>
                    bagi pengguna pertama
                  </Text>
                </View>
              </LinearGradient>
            </TouchableScale>
            <TouchableScale>
              <LinearGradient
                colors={[ColorPrimary500, ColorSecondary500]}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={{
                  width: 276,
                  height: 130,
                  borderRadius: 20,
                  marginRight: 16,
                  paddingVertical: 21,
                  paddingHorizontal: 26,
                }}>
                <Text style={{color: '#ffffff', ...Heading2}}>
                  Nikmati Kunjungan Gratis, bagi pengguna pertama!
                </Text>
              </LinearGradient>
            </TouchableScale>
          </View>
        </ScrollView>
        <View style={{marginTop: 10}}>
          <View
            style={{
              marginHorizontal: 17,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{...Heading2, color: ColorNeutral900, marginBottom: 10}}>
              Rekomendasi Wisata
            </Text>
            <TouchableOpacity
              style={{alignItems: 'flex-end', marginBottom: 5}}
              onPress={() =>
                navigation.navigate('Category', {title: 'Rekomendasi Wisata'})
              }>
              <Text
                style={{
                  color: ColorSecondary500,
                  textDecorationLine: 'underline',
                  ...Body1,
                }}>
                Lihat Semua
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal>
          <View style={{marginVertical: 20, flexDirection: 'row'}}>
            <TouchableScale
              style={{
                padding: 6,
                backgroundColor: '#ffffff',
                elevation: 5,
                marginLeft: 17,
                ...RoundedCornerCardSmall,
              }}>
              <View
                style={{
                  width: 211,
                  height: 120,
                  overflow: 'hidden',
                  backgroundColor: ColorNeutral300,
                  ...RoundedCornerCardExtraSmall,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    left: 6,
                    top: 6,
                    padding: 1.5,
                    backgroundColor: '#ffffff10',
                    flexDirection: 'row',
                    ...RoundedCornerCardExtraSmall,
                  }}>
                  <IconStar width={IconExtraSmall} height={IconExtraSmall} />
                  <Text
                    style={{
                      ...Body3,
                      color: ColorNeutral100,
                      marginHorizontal: 5,
                    }}>
                    4.9
                  </Text>
                </View>
                <Image source={Image1} style={{width: 211, height: 120}} />
              </View>
              <Text
                style={{
                  ...Heading4,
                  color: ColorNeutral900,
                  marginLeft: 4,
                  marginVertical: 12,
                }}>
                Curug Putri Palutungan
              </Text>
            </TouchableScale>
            <TouchableScale
              style={{
                padding: 6,
                backgroundColor: '#ffffff',
                elevation: 5,
                marginLeft: 17,
                ...RoundedCornerCardSmall,
              }}>
              <View
                style={{
                  width: 211,
                  height: 120,
                  overflow: 'hidden',
                  backgroundColor: ColorNeutral300,
                  ...RoundedCornerCardExtraSmall,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    left: 6,
                    top: 6,
                    padding: 1.5,
                    backgroundColor: '#ffffff10',
                    flexDirection: 'row',
                    ...RoundedCornerCardExtraSmall,
                  }}>
                  <IconStar width={IconExtraSmall} height={IconExtraSmall} />
                  <Text
                    style={{
                      ...Body3,
                      color: ColorNeutral100,
                      marginHorizontal: 5,
                    }}>
                    4.9
                  </Text>
                </View>
                <Image source={Image1} style={{width: 211, height: 120}} />
              </View>
              <Text
                style={{
                  ...Heading4,
                  color: ColorNeutral900,
                  marginLeft: 4,
                  marginVertical: 12,
                }}>
                Curug Putri Palutungan
              </Text>
            </TouchableScale>
            <View style={{width: 16}}></View>
          </View>
        </ScrollView>
        <View style={{height: 100}} />
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
