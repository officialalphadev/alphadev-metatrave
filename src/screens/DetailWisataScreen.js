import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailWisataScreen = ({route}) => {
  const data = route.params;
  console.log(data);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Text>DetailWisataScreen</Text>
    </View>
  );
};

export default DetailWisataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
