import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import Header from '../assets/img/header-login.png';
import FormInput from '../components/FormInput';

import {windowHeight, windowWidth} from '../utils/Dimentions';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
      <View style={styles.headerWrapper}>
        <Image style={styles.imgHeader} source={Header} />
      </View>
      <LinearGradient
        colors={['#053DC7', '#05B8C7']}
        style={styles.formWrapper}>
        <Text style={styles.signup}>Masuk</Text>
        <View style={styles.inputWrapper}>
          <FormInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormInput placeholder="Kata Sandi" secureTextEntry={true} />
        </View>
        <View style={{alignItems: 'center', marginBottom: 50}}>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate('MainApp')}>
            <Text style={styles.buttonText}>Masuk</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.textWrapper}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.text}>Tidak punya akun? Buat akun baru</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  headerWrapper: {
    marginTop: windowHeight * 0.092,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: windowHeight * 0.098,
  },
  imgHeader: {
    width: 253,
    height: 198,
  },
  formWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  signup: {
    color: '#ffffff',
    marginTop: (windowHeight * 40) / 800,
    marginLeft: 16,
    fontSize: 19,
    fontFamily: 'Montserrat-SemiBold',
  },
  inputWrapper: {
    marginHorizontal: 16,
    marginTop: (windowHeight * 30) / 800,
  },
  input: {
    color: '#ffffff',
  },
  buttonLogin: {
    backgroundColor: '#05B8C7',
    width: (windowWidth * 139) / 360,
    borderRadius: 40,
    alignItems: 'center',
    padding: 12,
  },
  buttonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: '#ffffff',
  },
  textWrapper: {
    alignItems: 'center',
    marginBottom: 50,
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#ffffff',
  },
});
