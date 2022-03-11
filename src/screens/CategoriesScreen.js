import {View, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import CardCategories from '../components/CardCategories';
import ImageCategories1 from '../assets/img/image-categories-1.png';
import ImageCategories2 from '../assets/img/image-categories-2.png';
import ImageCategories3 from '../assets/img/image-categories-3.png';
import ImageCategories4 from '../assets/img/image-categories-4.png';
import {useNavigation} from '@react-navigation/native';

const CategoriesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={{paddingHorizontal: 16}}>
          <CardCategories
            style={{marginVertical: 10}}
            onPress={() =>
              navigation.navigate('Category', {title: 'Wisata Alam'})
            }
            title="Wisata Alam"
            source={ImageCategories1}
          />
          <CardCategories
            style={{marginVertical: 10}}
            onPress={() =>
              navigation.navigate('Category', {title: 'Wisata Edukasi'})
            }
            title="Wisata Edukasi"
            source={ImageCategories2}
          />
          <CardCategories
            style={{marginVertical: 10}}
            onPress={() =>
              navigation.navigate('Category', {title: 'Wisata Rekreasi'})
            }
            title="Wisata Rekreasi"
            source={ImageCategories3}
          />
          <CardCategories
            style={{marginVertical: 10}}
            onPress={() =>
              navigation.navigate('Category', {title: 'Wisata Religi'})
            }
            title="Wisata Religi"
            source={ImageCategories4}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoriesScreen;
