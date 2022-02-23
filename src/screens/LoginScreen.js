import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';

import Header from '../assets/img/header-login.png';
import FormInput from '../components/FormInput';

import {windowHeight} from '../utils/Dimentions';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerWrapper}>
          <Image style={styles.imgHeader} source={Header} />
        </View>
        <KeyboardAvoidingView behavior="position">
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
                style={styles.buttonDaftar}
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
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerWrapper: {
    marginTop: windowHeight * 0.092,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: windowHeight * 0.098,
  },
  imgHeader: {
    width: 253,
    height: 198,
  },
  formWrapper: {
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
    backgroundColor: '#ffffff',
    width: 139,
    borderRadius: 40,
    alignItems: 'center',
    padding: 12,
  },
  buttonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
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
