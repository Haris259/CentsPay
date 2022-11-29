import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import icon from '../../../../assets/icon';
import {globalStyles} from '../../../../common/styles';
import {Fonts} from '../../../../assets/font/fonts';
import {ArrowBack, Edit} from '../../../../assets/SVG/svg';
import {SvgXml} from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
const PersonalInfo = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <View style={{margin: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgXml xml={ArrowBack} />
          </TouchableOpacity>
          <TouchableOpacity>
          <SvgXml xml={Edit} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 25,
            lineHeight: 37,
            fontFamily: Fonts.semiBold,
            color: '#2d2d2d',
            marginTop: 20,
          }}>
          Personal info
        </Text>
        <View style={{marginTop: 50}}>
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
          <View style={{marginTop: -6, width: 50, alignItems: 'flex-end'}}>
            <Image source={icon.usa} />
          </View>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 26,
              marginTop: 10,
              color: '#222222',
              fontFamily: Fonts.medium,
            }}>
            Aaron Blake
          </Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              color: '#222222',
              fontFamily: Fonts.medium,
            }}>
            01 January 1982
          </Text>
        </View>
        <View style={{marginTop: 50}}>
          <Text style={globalStyles.grayText}>Mobile Number</Text>
          <Text style={[globalStyles.blackText, {marginTop: 6}]}>
            +44 7577 768-826
          </Text>
        </View>
        <View style={{marginTop: 50}}>
          <Text style={globalStyles.grayText}>Email</Text>
          <Text style={[globalStyles.blackText, {marginTop: 6}]}>
            Albionstp@Gmail.com
          </Text>
        </View>
        <View style={{marginTop: 50}}>
          <Text style={globalStyles.grayText}>Residenceaddress</Text>
          <Text style={[globalStyles.blackText, {marginTop: 6}]}>
            Flat 1 · 33 Grove Park Roads
          </Text>
          <Text style={[globalStyles.blackText, {marginTop: 6}]}>
            London · Se9 4np
          </Text>
          <Text style={[globalStyles.blackText, {marginTop: 6}]}>
            United Kingdom
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({});
