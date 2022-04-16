import React, {Component} from 'react';
import {View, Text, LogBox} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RootNavigator from './src/navigation/root';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs(['EventEmitter.removeListener']);
const App = () => {
  return (
    <View style={{flex: 1}}>
      <RootNavigator />
    </View>
  );
};
export default App;
