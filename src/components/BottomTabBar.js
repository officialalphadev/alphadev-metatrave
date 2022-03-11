import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  IconHome,
  IconHomeActive,
  IconSetting,
  IconSettingActive,
  IconVr,
} from '../assets';
import {HomeScreen, SettingScreen, VirtualTourScreen} from '../screens';
import CustomHeaderHome from './CustomHeaderHome';
import CustomTabBarButton from './CustomTabBarButton';
import TouchableScale from 'react-native-touchable-scale';
import {Body1} from '../utils/Bodys';
import {ColorPrimary500} from '../utils/Colours';
import {IconMedium} from '../utils/Icons';

const Tab = createBottomTabNavigator();

const MainApp = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarButton: props => <TouchableScale {...props} />,
        tabBarStyle: {
          ...styles.tabBar,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <IconHomeActive width={IconMedium} height={IconMedium} />
                <Text style={{...Body1, color: ColorPrimary500}}>Beranda</Text>
              </View>
            ) : (
              <IconHome width={IconMedium} height={IconMedium} />
            ),
          header: () => (
            <CustomHeaderHome
              onPressCart={() => navigation.navigate('Cart')}
              onPressSearch={() => navigation.navigate('Search')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="VirtualTour"
        component={VirtualTourScreen}
        options={{
          tabBarButton: () => (
            <CustomTabBarButton
              onPress={() => navigation.navigate('VirtualTour')}
            />
          ),
          tabBarIcon: <IconVr width={40} height={40} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <IconSettingActive width={IconMedium} height={IconMedium} />
                <Text style={{...Body1, color: ColorPrimary500}}>
                  Pengaturan
                </Text>
              </View>
            ) : (
              <IconSetting width={IconMedium} height={IconMedium} />
            ),
          title: 'Pengaturan',
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
            color: '#262626',
          },
          headerShadowVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  tabBar: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#ffffff',
    height: 60,
    position: 'absolute',
  },
});
