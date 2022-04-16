import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import icon from '../../assets/icon';
import PrimaryButton from '../../components/button/primaryButton';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../assets/font/fonts';

const PaymentSuccessful = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{marginHorizontal: 30, marginTop: 200}}>
        <Image source={icon.accept} />
        <Text
          style={{
            fontSize: 25,
            lineHeight: 27,
            fontFamily: Fonts.semiBold,
            color: '#2d2d2d',
            marginTop: 20,
          }}>
          Payment Successfully!
        </Text>
        <Text
          style={{
            marginTop: 15,
            fontSize: 17,
            lineHeight: 25,
            color: '#a8a8a8',
            fontFamily: Fonts.medium,
          }}>
          Sent to: Aaron
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 17,
            lineHeight: 25,
            color: '#a8a8a8',
            fontFamily: Fonts.medium,
          }}>
          Ammount: 1002.49
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 30,
          justifyContent: 'flex-end',
          marginBottom: 20,
        }}>
        <PrimaryButton
          title="Done"
          onPress={() => navigation.navigate('homeScreen')}
        />
      </View>
    </View>
  );
};

export default PaymentSuccessful;

const styles = StyleSheet.create({});
