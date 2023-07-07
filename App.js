//React Native WebView
//https://aboutreact.com/react-native-webview/

//import React in our code
import React from 'react';

//import all the components we are going to use
import { Text, View, SafeAreaView } from 'react-native';

import { WebView } from 'react-native-webview';

import { usePreventScreenCapture } from 'expo-screen-capture';

const App = () => {

  usePreventScreenCapture();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://online.udvash-unmesh.com/Account/Login' }}
        style={{ flex: 1, marginTop: 20 }}
      />
    </SafeAreaView>
  );
};

export default App;
