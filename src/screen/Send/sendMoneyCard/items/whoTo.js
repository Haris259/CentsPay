import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import React,{useState,useRef,useEffect} from 'react';
import icon from '../../../../assets/icon';
import PrimaryInput from '../../../../components/inputs/primaryInput';
import NextBtn from '../../../../components/button/nextBtn';
import BackBtn from '../../../../components/button/backBtn';
import {Fonts} from '../../../../assets/font/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { SafeAreaView } from 'react-native-safe-area-context';
const WhoTo = ({navigation}) => {

  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const onKeyboardShow = event => setKeyboardOffset(event.endCoordinates.height);
  const onKeyboardHide = () => setKeyboardOffset(0);
  const keyboardDidShowListener = useRef();
  const keyboardDidHideListener = useRef();
  
  useEffect(() => {
    keyboardDidShowListener.current = Keyboard.addListener('keyboardWillShow', onKeyboardShow);
    keyboardDidHideListener.current = Keyboard.addListener('keyboardWillHide', onKeyboardHide);
  
    return () => {
      keyboardDidShowListener.current.remove();
      keyboardDidHideListener.current.remove();
    };
  }, []);


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FAFAff'}}>
        <TouchableOpacity
        style={{marginHorizontal: 20, marginTop: 10}}
        onPress={() => navigation.goBack()}>
        <Ionicons
          name="ios-chevron-back"
          size={30}
          // style={{backgroundColor: 'red'}}
          color="rgba(219, 92, 79, 1)"
        />
      </TouchableOpacity>
      <KeyboardAwareScrollView>
    
      <View style={{flex: 1, marginHorizontal: 30, marginTop: 10}}>
        <Text
          style={{
            fontSize: 25,
            lineHeight: 37,
            marginTop: 0,
            fontFamily: Fonts.semiBold,
            color: '#2d2d2d',
          }}>
          Who To?
        </Text>
        <View style={{flex: 1, justifyContent: 'center',marginVertical:"30%"}}>
          <PrimaryInput
            placeholder="First Name"
            label="First Name"
            activeOutlineColor={'rgba(218, 218, 218, 1)'}
          />

          <PrimaryInput
            placeholder="Last Name"
            label="Last Name"
            activeOutlineColor={'rgba(218, 218, 218, 1)'}
          />
          <PrimaryInput
            placeholder="Email (optional)"
            label="Email"
            keyboardType="email-address"
            activeOutlineColor={'rgba(218, 218, 218, 1)'}
          />
        </View>
   
      </View>
      </KeyboardAwareScrollView>
           <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <BackBtn title="Back" onPress={() => navigation.goBack()} />
          <NextBtn
            title="Continue"
            onPress={() => navigation.navigate('accountInfo')}
          />
        </View>
    </SafeAreaView>
  );
};

export default WhoTo;

const styles = StyleSheet.create({});
