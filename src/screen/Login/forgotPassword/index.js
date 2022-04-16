import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../../common/styles';
import MainHeading from '../../../components/heading/mainHeading';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import SecondaryButton from '../../../components/button/secondaryButton';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../../assets/font/fonts';
import {TextInputMask} from 'react-native-masked-text';
const ForgotPassword = () => {
  const navigation = useNavigation();
  const [text, setText] = useState();

  const changeText = text => {
    setText(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={globalStyles.miniHeading}>Forgot Passcode</Text>
      </View>
      <View style={{margin: 30}}>
        <Text style={globalStyles.text}>Enter your Phone Number</Text>
        <TextInputMask
          type={'cel-phone'}
          style={{
            fontFamily: Fonts.medium,
            width: 315,
            height: 55,
            borderWidth: 1,
            borderColor: 'rgba(218, 218, 218, 1)',
            // marginTop: 8,
            fontSize: 15,
            lineHeight: 22,
            color: '#1A1A1A',
            borderRadius: 6,
            paddingHorizontal: 15,
          }}
          options={{
            maskType: 'BRL',
            dddMask: '9999 999 999 ',
          }}
          editable={false}
          maxLength={13}
          value={text}
          onChangeText={text => {
            setText(text);
          }}
          // add the ref to a local var
          ref={ref => (this.phoneField = ref)}
        />
      </View>
      <View style={styles.keyboard}>
        <VirtualKeyboard
          color="black"
          pressMode="string"
          onPress={changeText}
          clearOnLongPress={true}
          rowStyle={styles.keypad}
        />
        <View style={styles.btn}>
          <SecondaryButton
            title="Continue"
            onPress={() => navigation.navigate('otp')}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
  },
  heading: {
    marginHorizontal: 30,
    marginTop: 100,
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
  keypad: {
    margin: 10,
  },
});