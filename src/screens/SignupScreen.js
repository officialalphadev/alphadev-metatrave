import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';

import ImageSignup from '../assets/img/image-login.png';
import FormInput from '../components/FormInput';

import {windowHeight} from '../utils/Dimentions';
import {AuthContext} from '../navigation/AuthProvider';
import Buttons from '../components/Buttons';
import {ColorSecondary500} from '../utils/Colours';

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {signup, isLoading} = useContext(AuthContext);

  const CheckPassword = async () => {
    try {
      if (confirmPassword === password && name && email) {
        signup(name, email, password);
      } else if (!name || !email || !password) {
        ToastAndroid.show('Masukan input dengan benar!', ToastAndroid.LONG);
      } else if (confirmPassword !== password) {
        ToastAndroid.show('Kata sandi tidak cocok!', ToastAndroid.LONG);
      }
    } catch (error) {
      console.log('check password error : ', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
      <View style={styles.headerWrapper}>
        <Image style={styles.imgHeader} source={ImageSignup} />
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
            placeholder="Ketikan Email Anda"
            onChangeText={inputEmail => setEmail(inputEmail)}
          />
          <FormInput
            placeholder="Ketikan Kata Sandi Anda"
            secureTextEntry={true}
            onChangeText={inputPassword => setPassword(inputPassword)}
          />
          <FormInput
            placeholder="Konfirmasi Kata Sandi Anda"
            secureTextEntry={true}
            onChangeText={inputConfirm => setConfirmPassword(inputConfirm)}
          />
        </View>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Buttons
            backgroundColor={ColorSecondary500}
            title="Daftar"
            type="large"
            onPress={CheckPassword}>
            {isLoading ? (
              <ActivityIndicator
                style={{marginLeft: 5}}
                size={15}
                color="#ffffff"
              />
            ) : null}
          </Buttons>
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
  },
  imgHeader: {
    width: 220,
    height: 150,
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: '#ffffff',
  },
});
