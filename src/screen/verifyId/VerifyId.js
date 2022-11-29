import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import NextBtn from '../../components/button/nextBtn';
import BackBtn from '../../components/button/backBtn';
import {Fonts} from '../../assets/font/fonts';
import {colors} from '../../common/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
const VerifyId = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <View style={{margin: 30}}>
        <View style={{marginTop: 30}}>
          <View style={{marginBottom: 25}}>
            <Text
              style={{
                fontSize: 25,
                color: colors.black,
                fontFamily: Fonts.semiBold,
              }}>
              Verify your Identity
            </Text>
          </View>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 22,
              color: colors.black,
              fontFamily: Fonts.medium,
            }}>
            To ensure that we verify your identity as{'\n'}
            fast as possible, please have a valid {'\n'} photo ID ready to scan.
          </Text>
        </View>
        <View style={{marginTop: 25}}>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 22,
              fontFamily: Fonts.medium,
              color: colors.black,
            }}>
            Valid photo IDs include your passport,{'\n'}
            driving license, national ID card or{'\n'} biometric residence
            permit card.
          </Text>
        </View>

        <View style={{marginTop: 37, flexDirection: 'row'}}>
          <View
            style={{
              width: 18,
              height: 18,
              borderWidth: 1,
              borderRadius: 90,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: colors.red,
            }}>
            <Image
              source={require('../../assets/icon/check.png')}
              style={{width: 10.9, height: 7.8}}
            />
          </View>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 22,
              fontFamily: Fonts.medium,
              color: colors.black,
              marginLeft: 10,
            }}>
            Make sure it hasn’t expired.
          </Text>
        </View>
        <View style={{marginTop: 25, flexDirection: 'row'}}>
          <View
            style={{
              width: 18,
              height: 18,
              borderWidth: 1,
              borderRadius: 90,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: colors.red,
            }}>
            <Image
              source={require('../../assets/icon/check.png')}
              style={{width: 10.9, height: 7.8}}
            />
          </View>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 22,
              fontFamily: Fonts.medium,
              color: colors.black,
              marginLeft: 10,
            }}>
            You are over 18 years old.
          </Text>
        </View>
        <View style={{marginTop: 25, flexDirection: 'row'}}>
          <View
            style={{
              width: 18,
              height: 18,
              borderWidth: 1,
              borderRadius: 90,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: colors.red,
            }}>
            <Image
              source={require('../../assets/icon/check.png')}
              style={{width: 10.9, height: 7.8}}
            />
          </View>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 22,
              fontFamily: Fonts.medium,
              color: colors.black,
              marginLeft: 10,
            }}>
            There is good lighting for your{'\n'} video selfie.
          </Text>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'red',
            marginBottom: 20,
            justifyContent: 'space-around',
          }}>
          <BackBtn title="Back" onPress={() => navigation.goBack()} />
          <NextBtn
            title="Continue"
            onPress={() => navigation.navigate('VerifyPhoto')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyId;

const styles = StyleSheet.create({});
