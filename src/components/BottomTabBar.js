import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import TouchableBounce from 'react-native-touchable-bounce';

import IconHome from '../assets/svg/icon-home.svg';
import IconHomeActive from '../assets/svg/icon-home-active.svg';
import IconSetting from '../assets/svg/icon-setting.svg';
import IconSettingActive from '../assets/svg/icon-setting-active.svg';
import IconVr from '../assets/svg/icon-vr.svg';

import HomeScreen from '../screens/HomeScreen';
import VirtualTourScreen from '../screens/VirtualTourScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{top: -30, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 50,
          backgroundColor: '#053DC7',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
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
              <IconHomeActive width={32} height={32} />
            ) : (
              <IconHome width={32} height={32} />
            ),
        }}
      />
      <Tab.Screen
        name="VirtualTour"
        component={VirtualTourScreen}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
          tabBarIcon: () => <IconVr width={40} height={40} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <IconSettingActive width={32} height={32} />
            ) : (
              <IconSetting width={32} height={32} />
            ),
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
  },
});
