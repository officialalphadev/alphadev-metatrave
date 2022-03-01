import {
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LoadingAnimation from '../components/LoadingAnimation';

const VirtualTourScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});
  // const [refreshing, setRefreshing] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          category: 'business',
          apikey: '9caffa5fe80c4fe8bab14049a3e1de8a',
        },
      });
      setData(res.data.articles);
    } catch (error) {
      console.log('getdata : ', error);
      setTimeout(() => {
        getData();
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {isLoading ? (
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
      )}
    </View>
  );
};

export default VirtualTourScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
