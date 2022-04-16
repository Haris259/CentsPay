import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import icon from '../../../assets/icon/index';
import SecondaryButton from '../../../components/button/secondaryButton';
import PrimaryButton from '../../../components/button/primaryButton';

import PrimaryInput from '../../../components/inputs/primaryInput';
import {Fonts} from '../../../assets/font/fonts';
import {Card} from '../../../assets/SVG/svg';
import {SvgXml} from 'react-native-svg';

const SendMoneyToCard = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FAFAFF',
      }}>
      <View style={{flex: 1, marginHorizontal: 30, marginTop: 50}}>
        <Image source={icon.arrowBackRed} />
        <Text
          style={{
            marginTop: 30,
            fontSize: 25,
            lineHeight: 37,
            fontFamily: Fonts.semiBold,
            color: '#2d2d2d',
            width: 250,
          }}>
          Add recipient’s card details
        </Text>
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            // width: '100%',
            height: 55,
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderWidth: 1,
            borderColor: 'rgba(218, 218, 218, 1)',
            paddingHorizontal: 10,
            borderRadius: 5,
            // backgroundColor: 'red',
          }}>
          <SvgXml xml={Card} height={16} width={20} />
          <TextInput
            style={{
              height: 55,
              width: '100%',
              padding: 5,
              fontSize: 15,
              lineHeight: 22,
              fontFamily: Fonts.medium,
              // backgroundColor: 'blue',
            }}
            placeholder="Card number"
          />
        </View>
        <Text style={{fontSize: 14, lineHeight: 22, color: '#a8a8a8'}}>
          Should be MasterCard or Visa
        </Text>
        <PrimaryInput
          placeholder="First Name"
          // label="First Name"
        />
        <PrimaryInput
          placeholder="Last Name"
          // label="Last Name"
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 30,
          }}>
          <PrimaryButton
            title="Continue"
            onPress={() => navigation.navigate('howToSendMoney')}
          />
        </View>
      </View>
    </View>
  );
};

export default SendMoneyToCard;

const styles = StyleSheet.create({});
