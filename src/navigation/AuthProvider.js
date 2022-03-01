import React, {createContext, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import {ToastAndroid} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(false);
  const [userId, setUserId] = useState(false);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const SaveSessionLogin = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('userId', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userId,
        setUserId,
        isLoading,
        setIsLoading,
        isFirstLaunch,
        setIsFirstLaunch,
        login: async (number, password) => {
          try {
            setIsLoading(true);
            await axios
              .post('https://alphadev-server.herokuapp.com/user/api/signin', {
                noHp: number,
                password: password,
              })
              .then(response => {
                console.log('response', response.data.User);
                SaveSessionLogin(response.data.User.id);
                setUser(true);
                ToastAndroid.show('Berhasil masuk!', ToastAndroid.LONG);
              });
          } catch (error) {
            console.log(error.message);
            console.log('gagal login');
            ToastAndroid.show('Gagal masuk!', ToastAndroid.LONG);
          } finally {
            setIsLoading(false);
          }
        },
        signup: async (name, number, password) => {
          try {
            setIsLoading(true);
            await axios
              .post('https://alphadev-server.herokuapp.com/user/api/signup', {
                username: name,
                email: 'test@gmail.com',
                noHp: number,
                password: password,
              })
              .then(function (response) {
                console.log('response', response.data);
              });
            ToastAndroid.show('Berhasil daftar!', ToastAndroid.LONG);
          } catch (error) {
            console.log('signup erorr :', error.message);
            ToastAndroid.show('Gagal daftar!', ToastAndroid.LONG);
          } finally {
            setIsLoading(false);
          }
        },
        logout: async () => {
          try {
            await AsyncStorage.removeItem('userId');
            setUser(false);
            ToastAndroid.show('Berhasil keluar!', ToastAndroid.LONG);
          } catch (error) {
            console.log(error);
            ToastAndroid.show('Gagal keluar!', ToastAndroid.LONG);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
