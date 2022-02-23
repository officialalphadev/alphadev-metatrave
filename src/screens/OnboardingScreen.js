import {
  Image,
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import Header from '../assets/img/header-signup.png';
import Line from '../assets/svg/line.svg';
import Logo from '../assets/svg/logo-white.svg';

import {windowHeight} from '../utils/Dimentions';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.headerWrapper}>
        <Image style={styles.imgHeader} source={Header} />
      </View>
      <View>
        <LinearGradient colors={['#053DC7', '#05B8C7']} style={styles.wrapper}>
          <Logo width={80} height={80} />
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() =>
              navigation.navigate('Login', {transition: 'vertical'})
            }>
            <Text style={styles.textLogin}>Masuk</Text>
          </TouchableOpacity>
          <View style={styles.atau}>
            <Line width={100} />
            <Text style={styles.textAtau}>Atau</Text>
            <Line width={100} />
          </View>
          <TouchableOpacity
            style={styles.buttonSignup}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.textSignup}>Daftar</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            Bepergian dengan METATRAVE kapan pun dan di mana pun Anda mau!
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  headerWrapper: {
    marginTop: (windowHeight * 176) / 800,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: windowHeight * 0.098,
  },
  imgHeader: {
    width: 258,
    height: 181,
  },
  wrapper: {
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: (windowHeight * 120) / 800,
    paddingHorizontal: 16,
  },
  buttonLogin: {
    backgroundColor: '#05B8C7',
    width: '100%',
    borderRadius: 40,
    alignItems: 'center',
    padding: 12,
  },
  textLogin: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: '#ffffff',
  },
  buttonSignup: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 40,
    alignItems: 'center',
    padding: 12,
  },
  textSignup: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: '#262626',
  },
  atau: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textAtau: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: '#ffffff',
    marginHorizontal: 20,
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    textAlign: 'center',
    marginTop: (windowHeight * 30) / 730,
  },
});
