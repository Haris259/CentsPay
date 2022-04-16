import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../common/styles';

import icon from '../../../assets/icon';
import {Fonts} from '../../../assets/font/fonts';
import {useNavigation} from '@react-navigation/native';

import {
  Profile,
  Bank,
  Bank2,
  ArrowBack,
  ProfileBank,
  ContactSupport,
} from '../../../assets/SVG/svg';
import {SvgXml} from 'react-native-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <View style={{marginHorizontal: 30, marginTop: 35}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml xml={ArrowBack} />
        </TouchableOpacity>
        <View style={{marginTop: 50, width: 75}}>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 50,
              backgroundColor: '#eceef1',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 30,
                color: '#222222',
                fontFamily: Fonts.medium,
              }}>
              A
            </Text>
          </View>
          <Image
            style={{position: 'absolute', bottom: 0, right: 20}}
            source={icon.usa}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 26,
            marginTop: 10,
            fontFamily: Fonts.medium,
            color: '#222222',
          }}>
          Aaron Blake
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 25,
            color: '#222222',
            fontFamily: Fonts.medium,
          }}>
          01 January 1982
        </Text>
        <View
          style={{
            marginTop: 50,
            borderTopWidth: 1,
            borderColor: 'rgba(168, 168, 168, 0.2)',
          }}>
          <View style={{marginTop: 50}}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => navigation.navigate('personalInfo')}>
              <SvgXml xml={Profile} />
              <Text style={[globalStyles.lightBlack, {marginLeft: 10}]}>
                Personal Info
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                marginTop: 25,
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('cardBankAccount')}>
              <SvgXml xml={ProfileBank} />
              <Text style={[globalStyles.lightBlack, {marginLeft: 10}]}>
                Cards & bank acounts
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 50,
            borderTopWidth: 1,
            borderColor: 'rgba(168, 168, 168, 0.2)',
          }}>
          <View style={{marginTop: 50}}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign
                name="filetext1"
                size={20}
                color="#D84E5B"
                style={{marginRight: 10}}
              />
              <Text style={globalStyles.lightBlack}>Legal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', marginTop: 25}}
              onPress={() => navigation.navigate('support')}>
              <SvgXml xml={ContactSupport} height={20} width={20} />
              <Text style={[globalStyles.lightBlack, {marginLeft: 10}]}>
                Support
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Account;
