import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyles} from '../../common/styles';
import LinearGradient from 'react-native-linear-gradient';
const PrimaryButton = ({title, onPress}) => {
  return (
    <LinearGradient
      style={{borderRadius: 50, elevation: 6}}
      colors={[
        'rgba(216, 78, 91, 0.2)',
        'rgba(216, 78, 91, 0)',
        'rgba(216, 78, 91, 1)',
      ]}
      start={{x: 1, y: 1}}
      end={{x: 1, y: 1}}>
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
