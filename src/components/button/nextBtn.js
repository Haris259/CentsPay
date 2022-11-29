import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../common/styles';
import LinearGradient from 'react-native-linear-gradient';
const NextBtn = ({title, onPress}) => {
  return (
    <LinearGradient
      style={{
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 143,
        height: 55,
      }}
      colors={['rgba(216, 78, 91, 1 )','rgba(216, 78, 91, 1 )', 'rgba(216, 78, 91, 0.7)']}
      start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      >
      <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
        <Text style={globalStyles.btnTextSemiBold}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default NextBtn;

const styles = StyleSheet.create({
  btnContainer: {
    width: 143,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
