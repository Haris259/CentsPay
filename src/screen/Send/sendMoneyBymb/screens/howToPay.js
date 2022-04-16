import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import icon from '../../../../assets/icon';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../../../assets/font/fonts';
import {SvgXml} from 'react-native-svg';
import {Bank2, Card2} from '../../../../assets/SVG/svg';
const HowToPay = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#FAFAFF'}}>
      <View style={{margin: 30}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icon.arrowBackRed} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            lineHeight: 37,
            color: '#2d2d2d',
            fontFamily: Fonts.semiBold,
            marginTop: 20,
            width: 250,
          }}>
          How do you want to pay?
        </Text>
        <TouchableOpacity
          style={{
            height: 194,
            marginTop: 80,
            backgroundColor: '#ffffff',
            padding: 25,
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('addCardDetails')}>
          <SvgXml xml={Card2} />
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              fontFamily: Fonts.semiBold,
              lineHeight: 24,
              color: '#222222',
            }}>
            Add a payment card
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 21,
              color: '#a8a8a8',
              fontFamily: Fonts.regular,
            }}>
            Send money using your debit or credit card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 194,
            marginTop: 16,
            backgroundColor: '#ffffff',
            padding: 25,
            borderRadius: 5,
          }}>
          <View
            style={{
              height: 56,
              width: 56,
              backgroundColor: '#FAFAFF',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}>
            <SvgXml xml={Bank2} />
          </View>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              lineHeight: 24,
              fontFamily: Fonts.semiBold,
              color: '#222222',
            }}>
            Bank transfer
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 21,
              color: '#a8a8a8',
              fontFamily: Fonts.regular,
            }}>
            Transfer money into Cents account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HowToPay;

const styles = StyleSheet.create({});
