import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import React,{useState,useEffect,useRef} from 'react';
import icon from '../../../../assets/icon';
import PrimaryButton from '../../../../components/button/primaryButton';
import {SvgXml} from 'react-native-svg';
import {Card} from '../../../../assets/SVG/svg';
import {Fonts} from '../../../../assets/font/fonts';
import { SafeAreaView } from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Ionicons from 'react-native-vector-icons/Ionicons'
const AddCardDetails = ({navigation}) => {


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
    <SafeAreaView style={{flex: 1, backgroundColor: '#FAFAFF'}}>
      <View style={{flex: 1, marginHorizontal: 30, marginTop: 15}}>
      <TouchableOpacity
        style={{ marginTop: 10}}
        onPress={() => navigation.goBack()}>
        <Ionicons
          name="ios-chevron-back"
          size={30}
          // style={{backgroundColor: 'red'}}
          color="rgba(219, 92, 79, 1)"
        />
      </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            fontSize: 25,
            lineHeight: 37,
            color: '#2d2d2d',
          }}>
          Add card details 
        </Text> 

<KeyboardAwareScrollView>

        <View style={{flex: 1, marginTop: '30%', justifyContent: 'center'}}>
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              // width: '100%',
              height: 55,
              alignItems: 'center',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderColor: 'rgba(218, 218, 218, 1)',
              paddingHorizontal: 10,
              borderRadius: 5,
              // backgroundColor: 'red',
            }}>
            <SvgXml xml={Card} height={16} width={20} />
            <TextInput
              style={{
                height: 55,
                width: '100%',
                padding: 5,
                fontSize: 15,
                lineHeight: 22,
                fontFamily: Fonts.medium,
                // backgroundColor: 'blue',
              }}
              placeholder="Card number"
            />
          </View>

          <TextInput
            style={{
              borderWidth: 1,
              height: 50,
              width: 330,
              marginTop: 20,
              borderColor: 'rgba(218, 218, 218, 1)',
              paddingHorizontal: 20,
              borderRadius:5,
              overflow:'hidden'
            }}
            placeholder="Name on Card"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,

            }}>
            <TextInput
              placeholder="MM/YY"
              style={{
                height: 50,
                width: 160,
                borderWidth: 1,
                paddingHorizontal: 20,
                borderColor: 'rgba(218, 218, 218, 1)',
                borderRadius:5,
                overflow:'hidden'
              }}
            />
            <TextInput
              placeholder="0000"
              style={{
                height: 50,
                paddingHorizontal: 20,
                width: 160,
                borderWidth: 1,
                borderColor: 'rgba(218, 218, 218, 1)',
                borderRadius:5,
                overflow:'hidden'
              }}
            />
          </View>
        </View>
        </KeyboardAwareScrollView>
        <View style={{justifyContent: 'flex-end'}}>
          <PrimaryButton
            title="Continue"
            onPress={() => navigation.navigate('paymentSummary')}
          />
        </View>
      </View>
      
    </SafeAreaView>
  );
};

export default AddCardDetails;

const styles = StyleSheet.create({});
