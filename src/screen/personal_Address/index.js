import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MainHeading from '../../components/heading/mainHeading';
import {globalStyles} from '../../common/styles';
import PrimaryInput from '../../components/inputs/primaryInput';
import NextBtn from '../../components/button/nextBtn';
import BackBtn from '../../components/button/backBtn';
import {isValidObjField, updateError} from '../../common/method';
const Index = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    country: '',
    house: '',
    apartment: '',
    city: '',
    postCode: '',
  });
  const [error, setError] = useState('');
  const {country, house, apartment, city, postCode} = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };
  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('Please fill out the required fields', setError);
    // if (!firstName.trim() || firstName.length < 3)
    //   return updateError('Invalid Name', setError);
    return true;
  };
  const submitForm = () => {
    if (isValidForm()) {
      console.log(userInfo);
      navigation.navigate('VerifyId');
    }
  };
  return (
    <View style={{flex: 1}}>
      <MainHeading text2="Personal details" />
      <View style={{marginHorizontal: 30, marginTop: 15}}>
        <Text style={{fontSize: 15, lineHeight: 22, color: '#a8a8a8'}}>
          To keep your money safe, we ask you to{'\n'}
          provide personal details and address
        </Text>
      </View>
      <View style={{marginHorizontal: 20}}>
        <PrimaryInput
          label={'Date of birth'}
          value={country}
          onChangeText={value => handleOnChangeText(value, 'country')}
          activeOutlineColor={error ? '#CE1A2B' : 'rgba(218, 218, 218, 1)'}
        />
        <PrimaryInput
          label={'Country of residence'}
          value={house}
          onChangeText={value => handleOnChangeText(value, 'house')}
          activeOutlineColor={error ? '#CE1A2B' : 'rgba(218, 218, 218, 1)'}
        />
        <PrimaryInput
          label={'City'}
          value={apartment}
          onChangeText={value => handleOnChangeText(value, 'apartment')}
          activeOutlineColor={error ? '#CE1A2B' : 'rgba(218, 218, 218, 1)'}
        />
        <PrimaryInput
          label={'Street,house number'}
          value={city}
          onChangeText={value => handleOnChangeText(value, 'city')}
          activeOutlineColor={error ? '#CE1A2B' : 'rgba(218, 218, 218, 1)'}
        />
        <PrimaryInput
          label={'Zip/Post Code'}
          value={postCode}
          onChangeText={value => handleOnChangeText(value, 'postCode')}
          activeOutlineColor={error ? '#CE1A2B' : 'rgba(218, 218, 218, 1)'}
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
      </View>
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

export default Index;
