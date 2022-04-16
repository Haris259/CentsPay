import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DockPicker from './DockPicker';

const IdentityCard = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(216, 78, 91, 0.4)',
      }}>
      <View style={{alignItems: 'center', marginTop: 100}}>
        <View
          style={{
            width: 315,
            height: 211,
            backgroundColor: '#ffffff',
            borderRadius: 5,
          }}>
          <DockPicker />
        </View>
        <Text
          style={{
            fontSize: 25,
            lineHeight: 37,
            marginTop: 40,
            color: '#ffffff',
          }}>
          Scan National Identity Card
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
    </View>
  );
};

export default IdentityCard;

const styles = StyleSheet.create({});
