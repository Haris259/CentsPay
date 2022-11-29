import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../common/styles';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import SecondaryButton from '../../components/button/secondaryButton';
import {useNavigation} from '@react-navigation/native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {Fonts} from '../../assets/font/fonts';
import { SafeAreaView } from 'react-native-safe-area-context';

const RepeatedPassword = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState();

  const changeText = text => {
    setCode(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text style={globalStyles.miniHeadingBlack2}>Repeat Passcode</Text>
        <Text
          style={{
            fontSize: 15,
            lineHeight: 22,
            color: '#a8a8a8',
            width: 300,
            fontFamily: Fonts.medium,
          }}>
          Please, repeat your secure passcode to login to the app
        </Text>
      </View>
      <View style={styles.pinCode}>
        <SmoothPinCodeInput
          placeholder={
            <View
              style={{
                width: 16,
                height: 16,
                borderRadius: 25,
                backgroundColor: 'rgba(218, 218, 218, 1)',
              }}></View>
          }
          mask={
            <View
              style={{
                width: 16,
                height: 16,
                borderWidth: 1,
                borderRadius: 25,
                borderColor: '#EF5924',
                // backgroundColor: '#EF5924',
              }}></View>
          }
          maskDelay={1000}
          password={true}
          cellStyle={null}
          cellStyleFocused={null}
          value={code}
          onTextChange={setCode}
          editable={false}
        />
      </View>
      <View style={styles.keyboard}>
        <VirtualKeyboard
          color="black"
          pressMode="string"
          onPress={changeText}
        />
        <View style={styles.btn}>
          <SecondaryButton
            title="Continue"
            onPress={() => navigation.navigate('homeScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RepeatedPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  heading: {
    marginTop: 100,
    marginHorizontal: 30,
  },
  pinCode: {
    marginTop: 30,
    alignItems: 'center',
  },
  keyboard: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  btn: {
    alignItems: 'center',
    marginTop: 30,
  },
});
