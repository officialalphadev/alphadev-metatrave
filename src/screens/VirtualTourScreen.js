import {RefreshControl, ScrollView, StatusBar, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LoadingAnimation from '../components/LoadingAnimation';
import TouchableScale from 'react-native-touchable-scale';

import Vista1 from '../assets/img/3dvista-1.jpg';
import Vista2 from '../assets/img/3dvista-2.jpg';
import Vista3 from '../assets/img/3dvista-3.jpg';
import Vista4 from '../assets/img/3dvista-4.jpg';
import {ColorNeutral300, ColorNeutral900} from '../utils/Colours';
import {RoundedCornerCardMedium} from '../utils/RoundedCorners';
import CardVirtualTour from '../components/CardVirtualTour';

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
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
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
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            // onRefresh={getData}
          />
        }>
        <View style={{paddingHorizontal: 16, paddingVertical: 5}}>
          <CardVirtualTour
            source={Vista1}
            url="https://alt.3dvista.com/samples/real_estate_virtual_tour.html"
            style={{marginVertical: 10}}
          />
          <CardVirtualTour
            source={Vista2}
            url="https://storage.net-fs.com/hosting/2727323/353/index.htm"
            style={{marginVertical: 10}}
          />
          <CardVirtualTour
            source={Vista3}
            url="https://storage.net-fs.com/hosting/2727323/355/"
            style={{marginVertical: 10}}
          />
          <CardVirtualTour
            source={Vista4}
            url="https://storage.net-fs.com/hosting/2080/2/index.htm"
            style={{marginVertical: 10}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default VirtualTourScreen;
