import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {View, Text} from 'react-native';
const Drawer = createDrawerNavigator();

const Feed = () => {
  return (
    <View>
      <Text>Feed</Text>
    </View>
  );
};
const Article = () => {
  return (
    <View>
      <Text>Article</Text>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="feed" component={Feed} />
      <Drawer.Screen name="article" component={Article} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
