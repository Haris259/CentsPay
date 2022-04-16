import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../common/styles';

const BackBtn = ({title, onPress, backgroundColor, style}) => {
  return (
    <TouchableOpacity
      style={{
        width: 143,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'rgba(216, 78, 91, 1)',
        backgroundColor: backgroundColor,
      }}
      onPress={onPress}>
      <Text style={[globalStyles.btnBack, style]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
export default BackBtn;
