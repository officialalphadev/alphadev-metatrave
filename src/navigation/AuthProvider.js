import React, {createContext, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

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
            const res = await axios
              .post('https://alphadev-server.herokuapp.com/user/api/signin', {
                noHp: number,
                password: password,
              })
              .then(response => {
                console.log('response', response.data.User);
                SaveSessionLogin(response.data.User.id);
                setUser(true);
              });
          } catch (error) {
            // console.log(error);
            console.log(error.message);
            console.log('gagal login');
            alert('gagal login');
          } finally {
            setIsLoading(false);
          }
        },
        signup: async (name, number, password) => {
          try {
            setIsLoading(true);
            const res = await axios
              .post('https://alphadev-server.herokuapp.com/user/api/signup', {
                username: name,
                email: 'test@gmail.com',
                noHp: number,
                password: password,
              })
              .then(function (response) {
                // console.log('signup response : ', response);
                // console.log('signup success : ', response.data.user);
              });
            alert('Signup Succes');
          } catch (error) {
            console.log('signup erorr :', error.message);
            alert('gagal Signup');
          } finally {
            setIsLoading(false);
          }
        },
        logout: async () => {
          try {
            await AsyncStorage.removeItem('userId');
            setUser(false);
          } catch (error) {
            console.log(error);
            alert('gagal logout');
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
