import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';

import {WebView} from 'react-native-webview';

const WebviewScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent hidden />
      <View style={{width: '100%', height: '100%'}}>
        <WebView
          source={{
            uri: route.params.data,
          }}
          onLoad={console.log('Webview Loaded!')}
        />
      </View>
    </View>
  );
};

export default WebviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
