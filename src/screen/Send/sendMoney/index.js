import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CloseBtn from '../../../components/button/closeBtn';
import icon from '../../../assets/icon';
import {globalStyles} from '../../../common/styles';

import Contacts from 'react-native-contacts';
import Contact from './items/contact/contact';
import {Fonts} from '../../../assets/font/fonts';

const SendMoney = ({navigation, route}) => {
  const [contactShow, setContactShow] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('selectCountry')}
      style={{flex: 1, backgroundColor: '#FAFAFA'}}
      activeOpacity={0.9}>
      <CloseBtn onPress={() => navigation.goBack()} />
      <View style={{marginHorizontal: 30, marginTop: 15}}>
        <Text
          style={{
            fontSize: 25,
            lineHeight: 37,
            color: '#2d2d2d',
            fontFamily: Fonts.semiBold,
          }}>
          Send money to
        </Text>
        <View
          style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
          <Image source={icon.phone} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 15,
              color: '#D84E5B',
              fontFamily: Fonts.medium,
              lineHeight: 22,
            }}>
            Enter mobile number
          </Text>
        </View>
      </View>
      <View style={{marginHorizontal: 30, marginTop: 85}}>
        <Text style={globalStyles.grayText}>PHONE CONTACTS</Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            lineHeight: 27,
            fontFamily: Fonts.medium,
            color: '#000000',
          }}>
          To request money even easier, allow access to your contacts
        </Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => setContactShow(!contactShow)}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 27,
              fontFamily: Fonts.medium,
              color: '#D84E5B',
              textDecorationLine: 'underline',
            }}>
            Allow access
          </Text>
        </TouchableOpacity>
        {contactShow && (
          <View>
            <Contact />
            <Contact />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SendMoney;
