import {
  Button,
  Image,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import LoadingAnimation from '../components/LoadingAnimation';
import TouchableScale from 'react-native-touchable-scale';

import Vista1 from '../assets/img/3dvista-1.jpg';
import Vista2 from '../assets/img/3dvista-2.jpg';
import Vista3 from '../assets/img/3dvista-3.jpg';
import Vista4 from '../assets/img/3dvista-4.jpg';

const VirtualTourScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});
  // const [refreshing, setRefreshing] = useState(false);

  // const getData = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get('https://newsapi.org/v2/top-headlines', {
  //       params: {
  //         country: 'us',
  //         category: 'business',
  //         apikey: '9caffa5fe80c4fe8bab14049a3e1de8a',
  //       },
  //     });
  //     setData(res.data.articles);
  //   } catch (error) {
  //     console.log('getdata : ', error);
  //     setTimeout(() => {
  //       getData();
  //     }, 2000);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    // getData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {/* {isLoading ? (
        <LoadingAnimation />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl
              titleColor="#053DC7"
              refreshing={false}
              onRefresh={getData}
            />
          }>
          <Text>{JSON.stringify(data)}</Text>
        </ScrollView>
      )} */}
      <SafeAreaView style={{width: '100%'}}>
        <ScrollView style={{width: '100%'}}>
          <View style={{height: 50}}></View>
          <TouchableScale
            style={{alignItems: 'center'}}
            onPress={() =>
              navigation.navigate('Webview', {
                data: 'https://alt.3dvista.com/samples/real_estate_virtual_tour.html',
              })
            }>
            <View
              style={{
                width: 300,
                height: 120,
                backgroundColor: '#c4c4c4',
                borderRadius: 20,
                marginVertical: 15,
                overflow: 'hidden',
                elevation: 10,
                shadowColor: '#262626',
              }}>
              <Image
                source={Vista1}
                style={{width: '100%', height: '100%', resizeMode: 'cover'}}
              />
            </View>
          </TouchableScale>
          <TouchableScale
            style={{alignItems: 'center'}}
            onPress={() =>
              navigation.navigate('Webview', {
                data: 'https://storage.net-fs.com/hosting/2727323/353/index.htm',
              })
            }>
            <View
              style={{
                width: 300,
                height: 120,
                backgroundColor: '#c4c4c4',
                borderRadius: 20,
                marginVertical: 15,
                overflow: 'hidden',
                elevation: 10,
                shadowColor: '#262626',
              }}>
              <Image
                source={Vista2}
                style={{width: '100%', height: '100%', resizeMode: 'cover'}}
              />
            </View>
          </TouchableScale>
          <TouchableScale
            style={{alignItems: 'center'}}
            onPress={() =>
              navigation.navigate('Webview', {
                data: 'https://storage.net-fs.com/hosting/2727323/355/',
              })
            }>
            <View
              style={{
                width: 300,
                height: 120,
                backgroundColor: '#c4c4c4',
                borderRadius: 20,
                marginVertical: 15,
                overflow: 'hidden',
                elevation: 10,
                shadowColor: '#262626',
              }}>
              <Image
                source={Vista3}
                style={{width: '100%', height: '100%', resizeMode: 'cover'}}
              />
            </View>
          </TouchableScale>
          <TouchableScale
            style={{alignItems: 'center'}}
            onPress={() =>
              navigation.navigate('Webview', {
                data: 'https://storage.net-fs.com/hosting/2080/2/index.htm',
              })
            }>
            <View
              style={{
                width: 300,
                height: 120,
                backgroundColor: '#c4c4c4',
                borderRadius: 20,
                marginVertical: 15,
                marginBottom: 20,
                overflow: 'hidden',
                elevation: 10,
                shadowColor: '#262626',
              }}>
              <Image
                source={Vista4}
                style={{width: '100%', height: '100%', resizeMode: 'cover'}}
              />
            </View>
          </TouchableScale>
          <TouchableScale
            style={{alignItems: 'center'}}
            onPress={() =>
              navigation.navigate('Webview', {
                data: 'https://alt.3dvista.com/samples/real_estate_virtual_tour.html',
              })
            }>
            <View
              style={{
                width: 300,
                height: 120,
                backgroundColor: '#c4c4c4',
                borderRadius: 20,
                marginVertical: 15,
                overflow: 'hidden',
                elevation: 10,
                shadowColor: '#262626',
              }}>
              <Image
                source={Vista1}
                style={{width: '100%', height: '100%', resizeMode: 'cover'}}
              />
            </View>
          </TouchableScale>
          <TouchableScale
            style={{alignItems: 'center'}}
            onPress={() =>
              navigation.navigate('Webview', {
                data: 'https://storage.net-fs.com/hosting/2727323/353/index.htm',
              })
            }>
            <View
              style={{
                width: 300,
                height: 120,
                backgroundColor: '#c4c4c4',
                borderRadius: 20,
                marginVertical: 15,
                overflow: 'hidden',
                elevation: 10,
                shadowColor: '#262626',
              }}>
              <Image
                source={Vista2}
                style={{width: '100%', height: '100%', resizeMode: 'cover'}}
              />
            </View>
          </TouchableScale>
          <TouchableScale
            style={{alignItems: 'center'}}
            onPress={() =>
              navigation.navigate('Webview', {
                data: 'https://storage.net-fs.com/hosting/2727323/355/',
              })
            }>
            <View
              style={{
                width: 300,
                height: 120,
                backgroundColor: '#c4c4c4',
                borderRadius: 20,
                marginVertical: 15,
                overflow: 'hidden',
                elevation: 10,
                shadowColor: '#262626',
              }}>
              <Image
                source={Vista3}
                style={{width: '100%', height: '100%', resizeMode: 'cover'}}
              />
            </View>
          </TouchableScale>
          <TouchableScale
            style={{alignItems: 'center'}}
            onPress={() =>
              navigation.navigate('Webview', {
                data: 'https://storage.net-fs.com/hosting/2080/2/index.htm',
              })
            }>
            <View
              style={{
                width: 300,
                height: 120,
                backgroundColor: '#c4c4c4',
                borderRadius: 20,
                marginVertical: 15,
                marginBottom: 20,
                overflow: 'hidden',
                elevation: 10,
                shadowColor: '#262626',
              }}>
              <Image
                source={Vista4}
                style={{width: '100%', height: '100%', resizeMode: 'cover'}}
              />
            </View>
          </TouchableScale>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default VirtualTourScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
