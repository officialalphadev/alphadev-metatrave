import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';

import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import CardCategory from '../components/CardCategory';
import CardCategoryItem from '../components/CardCategoryItem';

import DataHome from '../data/Home.json';
import {AuthContext} from '../navigation/AuthProvider';

const HomeScreen = ({navigation}) => {
  const {dataLogin} = useContext(AuthContext);
  // const [isLoading, setLoading] = useState(true);

  const data = DataHome.categories;

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            // onRefresh={}
          />
        }
        showsVerticalScrollIndicator={false}
        style={styles.wrapper}>
        {data.map((category, index1) => {
          return (
            <CardCategory key={`category-${index1}`} title={category.name}>
              <View style={{flexDirection: 'row'}}>
                {category.items.map((item, index2) => {
                  return (
                    <CardCategoryItem
                      key={`category-${index1}-item-${index2}`}
                      image={item.imageUrl}
                      name={item.name}
                      city={item.city}
                      price={item.price}
                      onPress={() => navigation.navigate('DetailWisata', item)}
                    />
                  );
                })}
                <View style={{width: 16}} />
              </View>
            </CardCategory>
          );
        })}
        <View style={{height: 120}} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  wrapper: {
    width: '100%',
  },
});
