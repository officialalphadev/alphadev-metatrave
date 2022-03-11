import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableRipple} from 'react-native-paper';
import {RoundedCornerCardLarge} from '../utils/RoundedCorners';
import IconBack from '../assets/svg/icon-back.svg';
import {IconMedium} from '../utils/Icons';

const HeaderBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableRipple
      style={{
        ...RoundedCornerCardLarge,
        padding: 5,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      borderless
      onPress={() => navigation.goBack()}>
      <IconBack width={IconMedium} height={IconMedium} />
    </TouchableRipple>
  );
};

export default HeaderBackButton;
