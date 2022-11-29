import {View, Text, TouchableOpacity, TextInput,Keyboard,TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import MainHeading from '../../../components/heading/mainHeading';
import PrimaryInput from '../../../components/inputs/primaryInput';
import NextBtn from '../../../components/button/nextBtn';
import BackBtn from '../../../components/button/backBtn';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Fonts} from '../../../assets/font/fonts';
import {colors} from '../../../common/colors';
import { SafeAreaView } from 'react-native-safe-area-context';


const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);


const CodeError = () => {
  const navigation = useNavigation();
  const [error, setError] = useState('');



  return (
    <HideKeyboard>
    <SafeAreaView style={{flex: 1, backgroundColor: '#FAFAFF'}}>

      <View style={{marginLeft: 30, marginTop: 80}}>
        <Text
          style={{
            fontSize: 25,
            color: colors.black,
            lineHeight: 38,
            fontFamily: Fonts.semiBold,
          }}>
          Enter the security {'\n'}code
        </Text>
      </View>
      <View style={{marginHorizontal: 30, marginTop: 15}}>
        <Text
          style={{
            fontSize: 15,
            lineHeight: 22,
            color: colors.gray2,
            fontFamily: Fonts.medium,
          }}>
          We sent an SMS to +380 (95) 018-89-16.
        </Text>
      </View>
      <View style={{marginHorizontal: 30, marginTop: 20}}>

  

        <View style={{height: 55}}>
       
          <TextInput
            keyboardType="number-pad"
            style={{
              borderWidth: 1,
              borderColor: colors.border,
              borderRadius: 5,
              fontSize: 15,
              padding: 10,
              lineHeight: 22,
              color: colors.black,
              fontFamily: Fonts.medium,
            }}
            placeholder="Code"
          />
         </View>
     
        
      </View>
      <View style={{marginHorizontal: 30}}>
        <Text
          style={{
            fontSize: 15,
            marginTop: 10,
            lineHeight: 22,
            color: colors.gray2,
            fontFamily: Fonts.medium,
          }}>
          Didn’t receive the code?
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                lineHeight: 22,
                color: colors.red,
                fontFamily: Fonts.medium,
              }}>
              Send again
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 22,
              color: colors.gray2,
              fontFamily: Fonts.medium,
              marginLeft: 5,
            }}>
            or
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                lineHeight: 22,
                color: colors.red,
                marginLeft: 5,
                fontFamily: Fonts.medium,
              }}>
              Change mobile number
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={{flexDirection: 'row', margin: 30}}>
          <BackBtn title="Back" onPress={() => navigation.goBack()} />
          <View style={{marginLeft: 30}} />
          <NextBtn
            title="Send"
            // onPress={() => navigation.navigate('VerifyId')}
            onPress={() => navigation.navigate('VerifyId')}
          />
        </View>
      </View>
    </SafeAreaView>
    </HideKeyboard> 

  );
};

export default CodeError;
