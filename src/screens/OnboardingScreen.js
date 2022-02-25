import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {LogoWhite, Line} from '../assets';
import CarouselOnboarding from '../components/CarouselOnboarding';
import {AuthContext} from '../navigation/AuthProvider';

import {windowHeight} from '../utils/Dimentions';

const OnboardingScreen = ({navigation}) => {
  const {setIsFirstLaunch} = useContext(AuthContext);

  const Masuk = async () => {
    await AsyncStorage.setItem('alreadyLaunch', 'alreadylaunch');
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.headerWrapper}>
        <CarouselOnboarding />
      </View>
      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <LinearGradient colors={['#053DC7', '#05B8C7']} style={styles.wrapper}>
          <LogoWhite width={80} height={80} />
          <TouchableOpacity style={styles.buttonLogin} onPress={Masuk}>
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
    marginTop: (windowHeight * 150) / 800,
    marginBottom: windowHeight * 0.098,
  },
  wrapper: {
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: (windowHeight * 40) / 800,
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
