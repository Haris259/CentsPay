import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import icon from '../../assets/icon';
const CloseBTn = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{marginHorizontal: 30, marginTop: 30}}
      onPress={onPress}>
      <Image source={icon.cross} />
    </TouchableOpacity>
  );
};

export default CloseBTn;
