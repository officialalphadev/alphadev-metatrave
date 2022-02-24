import {StyleSheet} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import TouchableBounce from 'react-native-touchable-bounce';

import {
  IconHome,
  IconHomeActive,
  IconSetting,
  IconSettingActive,
  IconVr,
  IconVrActive,
} from '../assets';
import {HomeScreen, SettingScreen, VirtualTourScreen} from '../screens';
import CustomHeaderHome from './CustomHeaderHome';
import CustomTabBarButton from './CustomTabBarButton';

const Tab = createBottomTabNavigator();

const MainApp = ({navigation}) => {
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
          header: () => <CustomHeaderHome />,
          title: null,
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
          tabBarIcon: ({focused}) =>
            focused ? (
              <IconVrActive width={40} height={40} />
            ) : (
              <IconVr width={40} height={40} />
            ),
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
