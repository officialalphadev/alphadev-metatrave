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

import Header from '../assets/img/header-signup.png';
import FormInput from '../components/FormInput';

import {windowHeight} from '../utils/Dimentions';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
      <View style={styles.headerWrapper}>
        <Image style={styles.imgHeader} source={Header} />
      </View>
      <LinearGradient
        colors={['#053DC7', '#05B8C7']}
        style={styles.formWrapper}>
        <Text style={styles.signup}>Daftar</Text>
        <View style={styles.inputWrapper}>
          <FormInput placeholder="Nama Pengguna" />
          <FormInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormInput placeholder="Kata Sandi" secureTextEntry={true} />
          <FormInput
            placeholder="Konfirmasi Kata Sandi"
            secureTextEntry={true}
          />
        </View>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <TouchableOpacity
            style={styles.buttonDaftar}
            onPress={() => navigation.navigate('MainApp')}>
            <Text style={styles.buttonText}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SignupScreen;

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
    width: 258,
    height: 181,
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
  buttonDaftar: {
    backgroundColor: '#05B8C7',
    width: 139,
    borderRadius: 40,
    alignItems: 'center',
    padding: 12,
  },
  buttonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: '#ffffff',
  },
});
