import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

import {windowHeight} from '../utils/Dimentions';

const FormInput = ({title, placeholder, value, onChangeText, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#ffffff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: (windowHeight * 10) / 800,
    marginBottom: (windowHeight * 20) / 800,
  },
});
