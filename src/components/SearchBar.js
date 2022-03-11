import {StyleSheet, TextInput} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {windowWidth} from '../utils/Dimentions';

const SearchBar = () => {
  // const InputFocus = useRef(null);

  useEffect(() => {
    // InputFocus.current.focus();
  }, []);

  return (
    <TextInput
      style={{
        backgroundColor: '#053DC7',
        color: '#ffffff',
        width: windowWidth * 0.78,
        height: 35,
        paddingHorizontal: 20,
        paddingVertical: 9,
        borderRadius: 20,
        position: 'absolute',
        right: 5,
      }}
      placeholderTextColor="#ffffff"
      placeholder="Cari Wisata"
      // ref={InputFocus}
      autoFocus
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
