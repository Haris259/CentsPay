import {View, Text, TouchableOpacity} from 'react-native';
import React,{useEffect} from 'react';
import DockPicker from './DockPicker';
import CamPicker from '../../components/Pickers/CamPicker';

const ScanPassport = ({route, navigation}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: 'rgba(216, 78, 91, 0.4)',
      }}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('loader')}>
      <View style={{alignItems: 'center', marginTop: 100}}>
        <TouchableOpacity
          style={{
            width: 315,
            height: 211,
            backgroundColor: '#ffffff',
            borderRadius: 5,
          }}>
          <CamPicker />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            lineHeight: 37,
            marginTop: 40,
            color: '#ffffff',
          }}>
          Scan Passport
        </Text>
        <Text
          style={{
            fontSize: 15,
            lineHeight: 22,
            color: '#ffffff',
            textAlign: 'center',
            width: 300,
          }}>
          Place your document within the frame until it is captured
          automatically
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ScanPassport;
