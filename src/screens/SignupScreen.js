import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ImageHeaderSignup} from '../assets';
import FormInput from '../components/FormInput';

import {windowHeight} from '../utils/Dimentions';
import {AuthContext} from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {signup} = useContext(AuthContext);

  const CheckPassword = async () => {
    if (confirmPassword === password && name && number) {
      signup(name, number, password);
      navigation.replace('Login');
    } else if (!name || !number || !password) {
      alert('Error!');
    } else if (confirmPassword !== password) {
      alert('Password tidak cocok!');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
      <View style={styles.headerWrapper}>
        <Image style={styles.imgHeader} source={ImageHeaderSignup} />
      </View>
      <LinearGradient
        colors={['#053DC7', '#05B8C7']}
        style={styles.formWrapper}>
        <Text style={styles.signup}>Daftar</Text>
        <View style={styles.inputWrapper}>
          <FormInput
            placeholder="Nama Pengguna"
            onChangeText={inputName => setName(inputName)}
          />
          <FormInput
            placeholder="Nomor Handphone"
            onChangeText={inputNumber => setNumber(inputNumber)}
          />
          <FormInput
            placeholder="Kata Sandi"
            secureTextEntry={true}
            onChangeText={inputPassword => setPassword(inputPassword)}
          />
          <FormInput
            placeholder="Konfirmasi Kata Sandi"
            secureTextEntry={true}
            onChangeText={inputConfirm => setConfirmPassword(inputConfirm)}
          />
        </View>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <TouchableOpacity style={styles.buttonDaftar} onPress={CheckPassword}>
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
