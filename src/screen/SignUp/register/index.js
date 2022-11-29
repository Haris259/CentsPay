import {StyleSheet, Text, View, ScrollView,Keyboard} from 'react-native';
import React, {useState,useRef,useEffect} from 'react';
import MainHeading from '../../../components/heading/mainHeading';
import PrimaryInput from '../../../components/inputs/primaryInput';
import NextBtn from '../../../components/button/nextBtn';
import BackBtn from '../../../components/button/backBtn';
import {isValidObjField, updateError} from '../../../common/method';
import {globalStyles} from '../../../common/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = ({navigation}) => {


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





  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    // email: '',
  });
  const [error, setError] = useState('');
  const {firstName, lastName, } = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };
  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('The field is required', setError);
    if (!firstName.trim() || firstName.length < 3)
      return updateError('Invalid Name', setError);
    return true;
  };
  const submitForm = () => {
    if (isValidForm()) {
      console.log(userInfo);
      navigation.navigate('phoneNumber');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text style={globalStyles.miniHeading}>Tell us a bit about ggg</Text>
        <Text style={globalStyles.miniHeading}>yourself</Text>
      </View>
      {/* <KeyboardAwareScrollView> */}
      <View style={styles.keyboardScroll}>
        
          <PrimaryInput
            placeholder="First Name"
            // label="First Name"
            value={firstName}
            onChangeText={value => handleOnChangeText(value, 'firstName')}
            activeOutlineColor={error ? '#CE1A2B' : 'rgba(218, 218, 218, 1)'}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <PrimaryInput
            placeholder="Last Name"
            // label="Last Name"
            value={lastName}
            onChangeText={value => handleOnChangeText(value, 'lastName')}
            activeOutlineColor={error ? '#CE1A2B' : 'rgba(218, 218, 218, 1)'}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <PrimaryInput
            placeholder="Email (optional)"
            onSubmitEditing={Keyboard.dismiss}
            label="Email"
            // value={email}
            keyboardType="email-address"
            onChangeText={value => handleOnChangeText(value, 'email')}
            activeOutlineColor={error ? '#CE1A2B' : 'rgba(218, 218, 218, 1)'}
          />
         
          
          {/* {error ? <Text style={styles.errorText}>{error}</Text> : null} */}
      </View>
        {/* </KeyboardAwareScrollView> */}

      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <BackBtn title="Back" onPress={() => navigation.goBack()} />
          <NextBtn title="Continue" onPress={submitForm} />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
  },
  heading: {
    marginTop: 80,
    marginHorizontal: 30,
  },
  keyboardScroll: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 30,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btn: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  errorText: {
    color: '#CE1A2B',
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
  },
});
export default Register;
