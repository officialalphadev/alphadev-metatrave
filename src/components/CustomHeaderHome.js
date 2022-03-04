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

import {windowWidth} from '../utils/Dimentions';

const CustomHeaderHome = ({onPressSearch, onPress}) => {
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
            <IconSearch width={32} height={32} />
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                fontSize: 14,
                color: '#BABABA',
              }}>
              Cari Wisata
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={onPress}>
          {Notification ? <View style={styles.dot}></View> : null}
          <IconCart width={32} height={32} />
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CustomHeaderHome;

const styles = StyleSheet.create({
  headerContainer: {
    height: 130,
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
    paddingVertical: 5,
    width: (windowWidth * 260) / 360,
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
    width: 8,
    height: 8,
    backgroundColor: '#FF6B6B',
    borderRadius: 50,
    zIndex: 1,
    right: 0,
  },
});
