import {Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Heading3SemiBold} from '../utils/Headings';
import {ColorNeutral100} from '../utils/Colours';
import {SafeAreaView} from 'react-native-safe-area-context';

const CustomHeaderSetting = () => {
  return (
    <LinearGradient
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}
      colors={['#053DC7', '#05B8C7']}>
      <SafeAreaView>
        <Text
          style={{
            ...Heading3SemiBold,
            color: ColorNeutral100,
            padding: 16,
          }}>
          Pengaturan
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CustomHeaderSetting;
