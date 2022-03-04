import {RefreshControlBase, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SplashScreen, VirtualTourScreen} from '../screens';
import {MainApp} from '../components';
import DetailWisataScreen from '../screens/DetailWisataScreen';
import CartScreen from '../screens/CartScreen';
import WebviewScreen from '../screens/WebviewScreen';
import CategoryScreen from '../screens/CategoryScreen';
import SearchScreen from '../screens/SearchScreen';
import SearchBar from '../components/SearchBar';
import {windowHeight, windowWidth} from '../utils/Dimentions';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerTintColor: '#262626',
        headerTitleStyle: {fontFamily: 'Montserrat-SemiBold'},
      }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VirtualTour"
        component={VirtualTourScreen}
        options={{headerTransparent: true, headerTitle: ''}}
      />
      <Stack.Screen name="DetailWisata" component={DetailWisataScreen} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '',
          headerShadowVisible: false,
          headerRight: () => <SearchBar />,
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
          },
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Keranjang',
          headerTransparent: true,
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
          },
        }}
      />
      <Stack.Screen
        name="Webview"
        component={WebviewScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
