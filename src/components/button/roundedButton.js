import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyles} from '../../common/styles';

const RoundedButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 187,
        height: 55,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderColor: '#D84E5B',
      }}
      onPress={onPress}>
      <Text style={globalStyles.btnroundedText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({});
