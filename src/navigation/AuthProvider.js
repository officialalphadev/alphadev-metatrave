import React, {createContext, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  // const tmpUserId = AsyncStorage.getItem('@db_user');
  // const userId = JSON.stringify(tmpUserId);
  const [user, setUser] = useState('logout');
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (number, password) => {
          try {
            await AsyncStorage.setItem('@db_user', JSON.stringify(number));
            await AsyncStorage.setItem(
              '@db_password',
              JSON.stringify(password),
            );
            setUser(number);
          } catch (error) {
            console.log(error);
            alert('gagal login');
          }
        },
        signup: async (name, number, password) => {
          try {
            await AsyncStorage.setItem('@db_name', JSON.stringify(name));
            await AsyncStorage.setItem('@db_user', JSON.stringify(number));
            await AsyncStorage.setItem(
              '@db_password',
              JSON.stringify(password),
            );
          } catch (error) {
            console.log(error);
            alert('gagal Signup');
          }
        },
        logout: async () => {
          try {
            await AsyncStorage.setItem('@db_user', JSON.stringify('logout'));
            setUser('logout');
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
