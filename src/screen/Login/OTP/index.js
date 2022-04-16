import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import MainHeading from '../../../components/heading/mainHeading';
import PrimaryInput from '../../../components/inputs/primaryInput';
import NextBtn from '../../../components/button/nextBtn';
import BackBtn from '../../../components/button/backBtn';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {globalStyles} from '../../../common/styles';
import {Fonts} from '../../../assets/font/fonts';
const OTP = () => {
  const navigation = useNavigation();
  const [error, setError] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={globalStyles.miniHeading}>Enter the security</Text>
        <Text style={globalStyles.miniHeading}>code</Text>
      </View>
      <View style={{marginHorizontal: 30, width: 300, marginTop: 15}}>
        <Text
          style={{
            fontSize: 15,
            lineHeight: 22,
            color: '#a8a8a8',
            fontFamily: Fonts.medium,
          }}>
          We sent an SMS to +380 (95) 018-89-16.
        </Text>
      </View>
      <View style={{marginHorizontal: 30}}>
        <PrimaryInput
          label="Code"
          activeOutlineColor={error ? '#CE1A2B' : 'rgba(218, 218, 218, 1)'}
          keyboardType="numeric"
          maxLength={11}
        />
      </View>
      <View style={styles.btn}>
        <View style={{flexDirection: 'row', margin: 30}}>
          <BackBtn title="Back" onPress={() => navigation.goBack()} />
          <View style={{marginLeft: 30}} />
          <NextBtn
            title="Send"
            onPress={() => navigation.navigate('newPassword')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
  },
  heading: {
    marginHorizontal: 30,
    marginTop: 100,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default OTP;
