import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import ImageLogin from '../assets/img/image-login.png';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';

import {windowHeight, windowWidth} from '../utils/Dimentions';
import {ColorPrimary500, ColorSecondary500} from '../utils/Colours';
import Buttons from '../components/Buttons';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login, isLoading} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
      <View style={styles.headerWrapper}>
        <Image style={styles.imgHeader} source={ImageLogin} />
      </View>
      <LinearGradient
        colors={[ColorPrimary500, ColorSecondary500]}
        style={styles.formWrapper}>
        <Text style={styles.signup}>Masuk</Text>
        <View style={styles.inputWrapper}>
          <FormInput
            placeholder="Masukan Email Anda"
            onChangeText={inputEmail => setEmail(inputEmail)}
          />
          <FormInput
            placeholder="Masukan Kata Sandi"
            secureTextEntry={true}
            onChangeText={inputPassword => setPassword(inputPassword)}
          />
        </View>
        <View style={{alignItems: 'center', marginBottom: 50}}>
          <Buttons
            backgroundColor={ColorSecondary500}
            title="Masuk"
            type="large"
            onPress={() =>
              email && password
                ? login(email, password)
                : ToastAndroid.show(
                    'Masukan Email dan Kata Sandi!',
                    ToastAndroid.LONG,
                  )
            }>
            {isLoading ? (
              <ActivityIndicator
                style={{marginLeft: 5}}
                size={15}
                color="#ffffff"
              />
            ) : null}
          </Buttons>
        </View>
        <TouchableOpacity
          style={styles.textWrapper}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.text1}>Belum punya akun?</Text>
          <Text style={styles.text2}>Buat akun baru</Text>
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
  buttonLogin: {
    backgroundColor: '#05B8C7',
    width: (windowWidth * 139) / 360,
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
  textWrapper: {
    justifyContent: 'center',
    marginBottom: 50,
    flexDirection: 'row',
  },
  text1: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#ffffff',
    marginRight: 5,
  },
  text2: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#ffffff',
  },
});
