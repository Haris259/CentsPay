import {StyleSheet, Text, View, Image, TouchableOpacity,SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import icon from '../../assets/icon';
import {globalStyles} from '../../common/styles';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import {useNavigation} from '@react-navigation/native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { Fonts } from '../../assets/font/fonts';
import { colors } from '../../common/colors';

const Pincode = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const changeText = text => {
    setCode(text);
 
  };

  useEffect(()=> {
    console.log(code);
    if(code.length > 3) {
      navigation.navigate('register')
    }
  }, [code])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={icon.logo} />
      </View>
      <View style={{alignItems: 'center'}}>
      
        <Text style={globalStyles.miniHeading}>Welcome back!</Text>
        <Text style={globalStyles.grayHeading2}>Enter Passcode to unlock</Text>
        <View style={{marginTop: 30}}>
          {/* <SmoothPinCodeInput
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
          /> */}
        </View>
      </View>
      <View style={styles.keyboard}>
        <VirtualKeyboard
          color="black"
          pressMode="string"
          onPress={changeText}
          clearOnLongPress={true}
          value={code}
          onTextChange={setCode}
          rowStyle={{margin: 10}}
        />
        <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('forgotPassword')}
          style={styles.forgot}>
          <Text style={{    fontSize: 15,
    lineHeight: 18,
    fontFamily: Fonts.regular,
    color: colors.black,
    letterSpacing: -0.4,
              // numOfLines: 1
            }
            }>Forgot Passcode?</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <Text style={globalStyles.grayText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text style={globalStyles.redText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Pincode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
  },
  logo: {
    margin: 30,
    alignItems: 'center',
  },
  keyboard: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  forgot: {
    flexDirection:'row',
    justifyContent:'flex-end',
    marginHorizontal:74,
    marginVertical:10
  },
  btnContainer: {
   
    marginTop: 50,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    // backgroundColor:'red',
    justifyContent:'center'
  },
});
