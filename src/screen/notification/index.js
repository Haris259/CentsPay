import {View, Text, Image} from 'react-native';
import React from 'react';
import icon from '../../assets/icon';
import NextBtn from '../../components/button/nextBtn';
import BackBtn from '../../components/button/backBtn';
const Notification = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginTop: 50,
          marginHorizontal: 30,
        }}>
        <Image source={icon.bell} />
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 25, color: '#2d2d2d', lineHeight: 37}}>
            Get notified
          </Text>
          <Text style={{fontSize: 25, color: '#2d2d2d', lineHeight: 37}}>
            what your friends send
          </Text>
          <Text style={{fontSize: 25, color: '#2d2d2d', lineHeight: 37}}>
            or request money
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <View style={{flexDirection: 'row', marginHorizontal: 30}}>
          <BackBtn title="Skip" onPress={() => navigation.goBack()} />
          <View style={{marginLeft: 30}} />
          <NextBtn
            title="Notify Me!"
            onPress={() => navigation.navigate('welcome')}
          />
        </View>
      </View>
    </View>
  );
};

export default Notification;
