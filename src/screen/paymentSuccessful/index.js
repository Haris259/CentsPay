import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import icon from '../../assets/icon';
import PrimaryButton from '../../components/button/primaryButton';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../assets/font/fonts';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg,{G,Path,Defs,ClipPath,Rect} from 'react-native-svg';
const PaymentSuccessful = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{marginHorizontal: 30, marginTop: 200}}>
      <Svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<G clip-path="url(#clip0_2684_673)">
<Path d="M40.0985 0C18.0422 0 0.0991211 17.9431 0.0991211 40.0001C0.0991211 62.0564 18.0422 80.0002 40.0985 80.0002C62.1541 80.0002 80.0972 62.0564 80.0972 40.0001C80.0972 17.9431 62.1541 0 40.0985 0ZM40.0985 76.739C19.841 76.739 3.3603 60.2569 3.3603 40.0001C3.3603 19.7426 19.841 3.26118 40.0985 3.26118C60.3553 3.26118 76.836 19.7426 76.836 40.0001C76.836 60.2569 60.3553 76.739 40.0985 76.739Z" fill="#D84E5B"/>
<Path d="M60.7562 24.0502L32.3148 52.4909L19.4394 39.6162C18.8026 38.9795 17.7708 38.9795 17.1333 39.6162C16.4966 40.253 16.4966 41.2848 17.1333 41.9222L31.1618 55.95C31.4801 56.2684 31.8975 56.4272 32.3148 56.4272C32.7321 56.4272 33.1494 56.2684 33.4678 55.95L63.0622 26.3562C63.699 25.7195 63.699 24.687 63.0622 24.0502C62.4254 23.4135 61.393 23.4135 60.7562 24.0502Z" fill="#D84E5B"/>
</G>
<Defs>
<ClipPath id="clip0_2684_673">
<Rect width="80" height="80" fill="white"/>
</ClipPath>
</Defs>
</Svg>
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
    </SafeAreaView>
  );
};

export default PaymentSuccessful;

const styles = StyleSheet.create({});
