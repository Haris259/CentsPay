import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {globalStyles} from '../../../common/styles';
import MainHeading from '../../../components/heading/mainHeading';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import SecondaryButton from '../../../components/button/secondaryButton';
import {Fonts} from '../../../assets/font/fonts';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import RoundedButton from '../../../components/button/roundedButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUpReapetPassword = ({navigation}) => {
  const [text, setText] = useState();
  const [code, setCode] = useState('');
  const changeText = text => {
    setCode(text);
  };
  //   useEffect(()=>{
  // console.log(code);
  // if(code.length===4){
  //   navigation.navigate('Success')
  // }
  //   },[code])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text style={globalStyles.miniHeadingBlack2}>Repeat Passcode</Text>
        <Text style={globalStyles.grayText2}>
          Please, repeat your secure passcode to
        </Text>
        <Text style={globalStyles.grayText2}>login to the app</Text>
        <View style={styles.pincode}>
          <SmoothPinCodeInput
            placeholder={
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 25,
                  // opacity: 0.3,
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
      </View>
      <View style={styles.keyboard}>
        <VirtualKeyboard
          color="black"
          pressMode="string"
          onPress={changeText}
          clearOnLongPress={true}
        />
        <View style={styles.btn}>
          {code.length >= 4 ? (
            <SecondaryButton
              title={'Continue'}
              onPress={() => navigation.navigate('Success')}
            />
          ) : (
            <RoundedButton
              title={'Continue'}
              onPress={() => navigation.navigate('Success')}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpReapetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
  },
  heading: {
    marginTop: 100,
    marginHorizontal: 30,
  },
  pincode: {
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
