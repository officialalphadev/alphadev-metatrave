import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';

import {IconCart, IconSearch} from '../assets';
import IconTicket from '../assets/svg/icon-ticket.svg';

import {windowWidth} from '../utils/Dimentions';
import {IconExtraSmall, IconMedium} from '../utils/Icons';

import {Heading4} from '../utils/Headings';
import {
  ColorNeutral100,
  ColorNeutral400,
  ColorNotify500,
} from '../utils/Colours';

const CustomHeaderHome = ({onPressSearch, onPressCart, onPressTicket}) => {
  const Notification = true;

  return (
    <LinearGradient
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}
      colors={['#053DC7', '#05B8C7']}
      style={styles.headerContainer}>
      <SafeAreaView style={styles.headerWrapper}>
        <TouchableWithoutFeedback onPress={onPressSearch}>
          <View style={styles.searchWrapper}>
            <IconSearch width={IconMedium} height={IconMedium} />
            <Text
              style={{
                ...Heading4,
                color: ColorNeutral400,
                marginLeft: 20,
              }}>
              Cari Wisata
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={onPressCart}>
          {Notification ? <View style={styles.dot}></View> : null}
          <IconCart width={IconMedium} height={IconMedium} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressTicket}>
          {Notification ? <View style={styles.dot}></View> : null}
          <IconTicket width={IconMedium} height={IconMedium} />
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CustomHeaderHome;

const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
  },
  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  searchWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 8,
    // width: (windowWidth * 260) / 360,
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    paddingVertical: 10,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    width: '100%',
  },
  dot: {
    position: 'absolute',
    width: 6,
    height: 6,
    backgroundColor: ColorNotify500,
    borderRadius: 50,
    zIndex: 1,
    right: 0,
    top: 0,
  },
});
