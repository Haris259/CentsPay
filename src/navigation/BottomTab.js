import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import HomeScreen from '../screen/Send/homeScreen';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#eceef1',
          paddingBottom: 5,
        },
        tabBarInactiveTintColor: '#A8A8A8',
        tabBarActiveTintColor: '#EF5924',
        headerShown: false,
      }}>
      <Tab.Screen
        name="My cents"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size}) => (
            <Image
              source={require('../assets/icon/CentsLogo.png')}
              style={{height: size, width: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Recipients"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size}) => (
            <Image
              source={require('../assets/icon/recept.png')}
              style={{backgroundColor: 'rgba(236, 238, 241, 0.7)'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Invite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size}) => (
            <Image
              source={require('../assets/icon/gift.png')}
              style={{height: size, width: size}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
