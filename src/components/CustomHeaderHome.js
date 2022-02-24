import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';

import {IconSearch} from '../assets';

import {windowWidth} from '../utils/Dimentions';

const CustomHeaderHome = () => {
  return (
    <LinearGradient
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}
      colors={['#053DC7', '#05B8C7']}
      style={styles.headerContainer}>
      <SafeAreaView style={styles.headerWrapper}>
        <View style={styles.searchWrapper}>
          <IconSearch width={32} height={32} />
          <TextInput style={styles.search} placeholder="Cari wisata" />
        </View>
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
    justifyContent: 'center',
  },
  searchWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    marginLeft: 16,
    paddingHorizontal: 15,
    width: (windowWidth * 260) / 360,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    paddingVertical: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    width: '100%',
  },
});
