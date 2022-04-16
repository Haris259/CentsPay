import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../common/styles';

const MainHeading = ({text1, text2, text3}) => {
  return (
    <View
      style={{
        marginHorizontal: 30,
        marginTop: 70,
        width: '68%',
        height: 80,
        // backgroundColor: 'red',
      }}>
      <Text style={globalStyles.miniHeading}>{text1}</Text>
      <Text style={globalStyles.boldHeading}>{text2}</Text>
      <Text style={globalStyles.miniHeading}>{text3}</Text>
    </View>
  );
};

export default MainHeading;

const styles = StyleSheet.create({});
