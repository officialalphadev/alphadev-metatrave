import {StyleSheet} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SplashScreen, VirtualTourScreen} from '../screens';
import {MainApp} from '../components';
import DetailWisataScreen from '../screens/DetailWisataScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="VirtualTour" component={VirtualTourScreen} />
      <Stack.Screen name="DetailWisata" component={DetailWisataScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
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
