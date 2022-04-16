import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MainHeading from '../../components/heading/mainHeading';
import PrimaryInput from '../../components/inputs/primaryInput';
import NextBtn from '../../components/button/nextBtn';
import BackBtn from '../../components/button/backBtn';
import {isValidEmail, isValidObjField, updateError} from '../../common/method';

const Email = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
  });
  const [error, setError] = useState('');
  const {email} = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };
  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('Required all fields', setError);
    // if (!firstName.trim() || firstName.length < 3)
    //   return updateError('Invalid Name', setError);
    if (!isValidEmail(email)) return updateError('Invalid Email', setError);
    return true;
  };
  const submitForm = () => {
    if (isValidForm()) {
      console.log(userInfo);
      navigation.navigate('phoneNumber');
    }
  };

  return (
    <View style={{flex: 1}}>
      <MainHeading text1="And what’s your email" />
      <View style={{marginHorizontal: 30, width: 300, marginTop: 15}}>
        <Text style={{fontSize: 15, lineHeight: 22, color: '#a8a8a8'}}>
          We’ll use it to notify you about important account changes.
        </Text>
      </View>
      <PrimaryInput
        label="Email"
        value={email}
        onChangeText={value => handleOnChangeText(value, 'email')}
        style={error ? '#CE1A2B' : 'rgba(218, 218, 218, 1)'}
      />
      {error ? (
        <Text
          style={{
            color: '#CE1A2B',
            fontSize: 10,
            lineHeight: 15,
            textAlign: 'center',
            marginTop: 20,
          }}>
          {error}
        </Text>
      ) : null}
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={{flexDirection: 'row', margin: 30}}>
          <BackBtn title="Back" onPress={() => navigation.goBack()} />
          <View style={{marginLeft: 30}} />
          <NextBtn title="Continue" onPress={submitForm} />
        </View>
      </View>
    </View>
  );
};

export default Email;
