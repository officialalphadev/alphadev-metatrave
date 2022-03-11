import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import LoadingAnimation from '../components/LoadingAnimation';
import Buttons from '../components/Buttons';
import {ColorPrimary500} from '../utils/Colours';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {/* <LoadingAnimation /> */}

      <Buttons
        style={{margin: 5}}
        title="Small Button"
        type="small"
        backgroundColor={ColorPrimary500}
        onPress={() => alert('Clicked!')}>
        <ActivityIndicator style={{marginLeft: 5}} size={15} color="#ffffff" />
      </Buttons>
      <Buttons
        style={{margin: 5}}
        title="Medium Button"
        type="medium"
        backgroundColor={ColorPrimary500}
        onPress={() => alert('Clicked!')}
      />
      <Buttons
        style={{margin: 5}}
        title="Large Button"
        type="large"
        backgroundColor={ColorPrimary500}
        onPress={() => alert('Clicked!')}
        disabled
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
