import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyles} from '../../common/styles';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../assets/font';
const PrimaryButton = ({title, onPress}) => {
  return (
    <LinearGradient
      style={{borderRadius: 50, elevation: 6}}
      // colors={['#5ED2A0', '#339CB1']}
      colors={[
        '#d84d5b',
        '#dc5d4f',
      ]}
      start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      >
      <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
        <Text style={globalStyles.btnText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    // width: 335,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    
  },
});
export default PrimaryButton;
