import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DockPicker from './DockPicker';
import {colors} from '../../common/colors';

const DriverLicense = () => {
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
            backgroundColor: colors.white,
            borderRadius: 5,
          }}>
          <DockPicker />
        </View>
        <Text
          style={{
            fontSize: 25,
            lineHeight: 37,
            marginTop: 40,
            color: colors.white,
          }}>
          Scan Driving License
        </Text>
        <Text
          style={{
            fontSize: 15,
            lineHeight: 22,
            color: colors.white,
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

export default DriverLicense;

const styles = StyleSheet.create({});
