import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../../../../common/styles';
const Contact = ({contact, onPress}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', marginTop: 10, marginBottom: 30}}
      activeOpacity={0.7}
      onPress={onPress}>
      <View
        style={{
          height: 36,
          width: 36,
          backgroundColor: 'rgba(218, 218, 218, 0.5)',
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={globalStyles.blackText}>D</Text>
      </View>
      <View style={{marginLeft: 15, marginTop: 2}}>
        <Text style={globalStyles.blackText}>A Barbera</Text>
        <Text style={globalStyles.grayText}>123123232</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({});
export default Contact;
