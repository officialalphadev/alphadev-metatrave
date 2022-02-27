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

import {ImageHeaderSignup} from '../assets';
import FormInput from '../components/FormInput';

import {windowHeight} from '../utils/Dimentions';
import {AuthContext} from '../navigation/AuthProvider';
import LoadingAnimation from '../components/LoadingAnimation';

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {signup, isLoading} = useContext(AuthContext);

  const CheckPassword = async () => {
    try {
      if (confirmPassword === password && name && number) {
        signup(name, number, password);
      } else if (!name || !number || !password) {
        alert('Error!');
      } else if (confirmPassword !== password) {
        alert('Password tidak cocok!');
      }
    } catch (error) {
      console.log('check password error : ', error.message);
    } finally {
      navigation.replace('Login');
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
      {isLoading ? <LoadingAnimation /> : null}
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
