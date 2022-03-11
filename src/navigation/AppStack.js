import {
  Image,
  RefreshControlBase,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
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
import TopTabBar from '../components/TopTabBar';
import {Heading3} from '../utils/Headings';

import IconBack from '../assets/svg/icon-back.svg';
import {IconMedium} from '../utils/Icons';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {RoundedCornerCardLarge} from '../utils/RoundedCorners';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const navigation = useNavigation();

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
        options={{
          title: 'Virtual Tour',
          headerTitleStyle: {...Heading3},
          headerShadowVisible: false,
          animation: 'slide_from_bottom',
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableRipple
              style={{...RoundedCornerCardLarge, padding: 5, marginRight: 20}}
              borderless
              onPress={() => navigation.goBack()}>
              <IconBack width={IconMedium} height={IconMedium} />
            </TouchableRipple>
          ),
        }}
      />
      <Stack.Screen name="DetailWisata" component={DetailWisataScreen} />
      <Stack.Screen
        name="Search"
        component={TopTabBar}
        options={{
          title: '',
          headerShadowVisible: false,
          animation: 'slide_from_left',
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
          headerTitleStyle: {
            ...Heading3,
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
