import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import icon from '../../assets/icon';
import {Fonts} from '../../assets/font/fonts';

const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          margin: 30,
        }}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('homeScreen')}>
        <Image source={icon.accept} />
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 25, color: '#2d2d2d', lineHeight: 37}}>
            Welcome to CENTS,
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              color: '#2d2d2d',
              lineHeight: 37,
              fontFamily: Fonts.bold,
            }}>
            Aaron!
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
