import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Image,
  
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screen/Send/homeScreen';
import {Fonts} from '../assets/font/fonts'
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#eceef1',
          paddingBottom: 20,
        },
        tabBarInactiveTintColor: '#A8A8A8',
        tabBarActiveTintColor: '#EF5924',
       
       
        headerShown: false,
      }}>
      <Tab.Screen
        name="My cents"
        component={HomeScreen}
        
        options={{
       

          tabBarIcon: ({size,focused}) => {
            const image = focused 
            ? require('../assets/icon/CentsLogo.png')
            :require('../assets/icon/unactivelogo.jpeg') 
            return (
                <Image 
                    source={image}
                    style={{height:25,width:25,resizeMode:'contain'}}
                />
            )
        }
        }}
      />
      <Tab.Screen
        name="Recipients"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-people-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Invite"
        component={HomeScreen}
        options={{
        
            tabBarLabel: 'Invite',
          
          
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="gift" color={color} size={size} />
            ),
          
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
