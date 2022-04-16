import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import MainHeading from '../../../components/heading/mainHeading';
import PrimaryInput from '../../../components/inputs/primaryInput';
import NextBtn from '../../../components/button/nextBtn';
import BackBtn from '../../../components/button/backBtn';
import {isValidObjField, updateError} from '../../../common/method';
import {globalStyles} from '../../../common/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const Register = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [error, setError] = useState('');
  const {firstName, lastName, email} = userInfo;
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
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={globalStyles.miniHeading}>Tell us a bit about</Text>
        <Text style={globalStyles.miniHeading}>yourself</Text>
      </View>
      <View style={styles.keyboardScroll}>
        <KeyboardAwareScrollView style={{flex: 1}}>
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
            // label="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={value => handleOnChangeText(value, 'email')}
            activeOutlineColor={error ? '#CE1A2B' : 'rgba(218, 218, 218, 1)'}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </KeyboardAwareScrollView>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <BackBtn title="Back" onPress={() => navigation.goBack()} />
          <NextBtn title="Continue" onPress={submitForm} />
        </View>
      </View>
    </View>
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
