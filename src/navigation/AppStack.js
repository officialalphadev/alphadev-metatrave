import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, VirtualTourScreen} from '../screens';
import {MainApp} from '../components';
import DetailWisataScreen from '../screens/DetailWisataScreen';
import CartScreen from '../screens/CartScreen';
import WebviewScreen from '../screens/WebviewScreen';
import CategoryScreen from '../screens/CategoryScreen';
import TopTabBar from '../components/TopTabBar';
import {Heading3} from '../utils/Headings';
import HeaderBackButton from '../components/HeaderBackButton';
import {ColorNeutral900} from '../utils/Colours';
import CategoriesScreen from '../screens/CategoriesScreen';
import TicketScreen from '../screens/TicketScreen';
import DetailTicketScreen from '../screens/DetailTicketScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerBackVisible: false,
        headerLeft: () => <HeaderBackButton />,
        headerShadowVisible: false,
        headerTitleStyle: {...Heading3, color: ColorNeutral900},
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
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name="DetailWisata"
        component={DetailWisataScreen}
        options={{title: '', headerTransparent: true}}
      />
      <Stack.Screen
        name="Search"
        component={TopTabBar}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{title: 'Kategori'}}
      />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          title: 'Tiket Saya',
        }}
      />
      <Stack.Screen
        name="DetailTicket"
        component={DetailTicketScreen}
        options={{
          title: 'Rincian Ticket',
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Keranjang',
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
