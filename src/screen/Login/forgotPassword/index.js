import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../../common/styles';
import MainHeading from '../../../components/heading/mainHeading';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import SecondaryButton from '../../../components/button/secondaryButton';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../../assets/font/fonts';
// import TextInputMask from 'react-native-text-input-mask';
import LinearGradient from 'react-native-linear-gradient';
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
        <Text style={[globalStyles.text,{paddingVertical:10,paddingHorizontal:4}]}>Enter your Phone Number</Text>
        {/* <TextInputMask
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
        /> */}
      </View>
      <View style={styles.keyboard}>
        <VirtualKeyboard
          color="black"
          pressMode="string"
          onPress={changeText}
          clearOnLongPress={true}
          rowStyle={styles.keypad}
        />
        {/* <View style={styles.btn}>
          <SecondaryButton
            title="Continue"
            onPress={() => navigation.navigate('otp')}
          />
        </View> */}

    <LinearGradient
      style={{borderRadius: 50, elevation: 6,height:50,width:200,justifyContent:'center',alignItems:'center',alignSelf:'center'}}
      // colors={['#5ED2A0', '#339CB1']}
      colors={[
        '#d84d5b',
        '#dc5d4f',
      ]}
      start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      
      >
      <TouchableOpacity onPress={() => navigation.navigate('otp')} >
        <Text style={{color:'#fff',fontFamily:Fonts.medium}}>Continue</Text>
      </TouchableOpacity>
    </LinearGradient>




        {/* ///// */}
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
