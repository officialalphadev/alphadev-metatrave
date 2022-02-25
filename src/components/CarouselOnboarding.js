import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

import Carousel from 'react-native-snap-carousel';

import {
  ImageCarouselOnborading1,
  ImageCarouselOnborading2,
  ImageCarouselOnborading3,
  ImageCarouselOnborading4,
  ImageCarouselOnborading5,
} from '../assets';

import {windowWidth} from '../utils/Dimentions';

const SliderWidth = windowWidth;
const ItemWidth = SliderWidth * 0.88;

const CarouselItems = [
  ImageCarouselOnborading1,
  ImageCarouselOnborading2,
  ImageCarouselOnborading3,
  ImageCarouselOnborading4,
  ImageCarouselOnborading5,
];

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.cardCarousel} key={index}>
      <Image style={styles.image} source={item} />
    </View>
  );
};

const CarouselOnboarding = () => {
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={CarouselItems}
        renderItem={CarouselCardItem}
        sliderWidth={SliderWidth}
        itemWidth={ItemWidth}
        useScrollView={true}
        layout={'stack'}
        layoutCardOffset={18}
      />
    </View>
  );
};

export default CarouselOnboarding;

const styles = StyleSheet.create({
  cardCarousel: {
    width: ItemWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3E3E3',
    borderRadius: 10,
    padding: 20,
  },
  image: {
    height: 180,
    width: 220,
  },
});
