import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchScreen from '../screens/SearchScreen';
import SearchBar from './SearchBar';
import {windowWidth} from '../utils/Dimentions';

const Tab = createMaterialTopTabNavigator();

const TopTabBar = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({headerRight: () => <SearchBar />});
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Semua"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'Montserrat-SemiBold',
          textTransform: 'none',
        },
        tabBarItemStyle: {width: windowWidth * 0.2, padding: 0},
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: '#053DC7',
        tabBarInactiveTintColor: '#262626',
        tabBarPressColor: '#26262610',
        tabBarIndicatorStyle: {
          backgroundColor: '#053DC7',
          borderWidth: 2,
          borderColor: '#053DC7',
          borderRadius: 50,
        },
      }}>
      <Tab.Screen name="Semua" component={SearchScreen} />
      <Tab.Screen name="Alam" component={SearchScreen} />
      <Tab.Screen name="Edukasi" component={SearchScreen} />
      <Tab.Screen name="Religi" component={SearchScreen} />
      <Tab.Screen name="Konversi" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default TopTabBar;

const styles = StyleSheet.create({});
