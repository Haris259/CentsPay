import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import MainHeading from '../../components/heading/mainHeading';
import {globalStyles} from '../../common/styles';
import PrimaryInput from '../../components/inputs/primaryInput';
import NextBtn from '../../components/button/nextBtn';
import BackBtn from '../../components/button/backBtn';
import {isValidObjField, updateError} from '../../common/method';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {Fonts} from '../../assets/font/fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {colors} from '../../common/colors';
const Address = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    house: '',
    apartment: '',
    city: '',
    postCode: '',
  });
  const [error, setError] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [dateShow, setDateShow] = useState('');
  const [placeholder, setPlaceHolder] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisible(true);
    setPlaceHolder(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const handleConfirm = date => {
    console.log(
      'A Date has been Picked',
      setDateShow(moment(date).format('MM/DD/YYYY')),
    );
    hideDatePicker();
  };
  const {country, house, apartment, city, postCode} = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };
  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('The field is required', setError);
    // if (!firstName.trim() || firstName.length < 3)
    //   return updateError('Invalid Name', setError);
    return true;
  };
  const submitForm = () => {
    if (isValidForm()) {
      console.log(userInfo);
      // navigation.navigate('VerifyId');
      navigation.navigate('codeError');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <KeyboardAwareScrollView>
        <View style={{flex: 1, marginHorizontal: 30, marginTop: 80}}>
          <Text
            style={{
              fontSize: 25,
              lineHeight: 38,
              color: colors.black,
              fontFamily: Fonts.medium,
            }}>
            Personal details
          </Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              color: colors.gray2,
              fontFamily: Fonts.medium,
            }}>
            To keep your money safe, we ask you to provide personal details and
            address
          </Text>
        </View>
        <View style={{marginHorizontal: 30, marginTop: 40}}>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <TouchableOpacity
            style={{
              height: 55,
              borderWidth: 1,
              borderColor: colors.border,
              borderRadius: 5,
              paddingTop: 15,
              paddingHorizontal: 10,
            }}
            onPress={showDatePicker}>
            <Text
              style={{
                fontSize: 15,
                lineHeight: 22,
                fontFamily: Fonts.medium,
                color: placeholder ? colors.black : colors.gray2,
              }}>
              {placeholder ? dateShow : 'Date of birth'}
            </Text>
          </TouchableOpacity>
          <PrimaryInput
            // label={'Country of residence'}
            placeholder="Country of residence"
            value={house}
            onChangeText={value => handleOnChangeText(value, 'house')}
          />
          {error ? (
            <Text
              style={{
                color: '#CE1A2B',
                fontSize: 10,
                lineHeight: 15,
                fontFamily: Fonts.medium,
                textAlign: 'center',
                marginTop: 10,
              }}>
              {error}
            </Text>
          ) : null}
          <PrimaryInput
            // label={'City'}
            placeholder={'City'}
            value={apartment}
            onChangeText={value => handleOnChangeText(value, 'apartment')}
          />
          {error ? (
            <Text
              style={{
                color: '#CE1A2B',
                fontSize: 10,
                lineHeight: 15,
                fontFamily: Fonts.medium,
                textAlign: 'center',
                marginTop: 10,
              }}>
              {error}
            </Text>
          ) : null}
          <PrimaryInput
            // label={'Street,house number'}
            placeholder={'Street,house number'}
            value={city}
            onChangeText={value => handleOnChangeText(value, 'city')}
          />
          {error ? (
            <Text
              style={{
                color: '#CE1A2B',
                fontSize: 10,
                lineHeight: 15,
                fontFamily: Fonts.medium,
                textAlign: 'center',
                marginTop: 10,
              }}>
              {error}
            </Text>
          ) : null}
          <PrimaryInput
            // label={'Post Code'}
            placeholder={'Zip/Postcode'}
            value={postCode}
            onChangeText={value => handleOnChangeText(value, 'postCode')}
          />
          {error ? (
            <Text
              style={{
                color: '#CE1A2B',
                fontSize: 10,
                lineHeight: 15,
                fontFamily: Fonts.medium,
                textAlign: 'center',
                marginTop: 10,
              }}>
              {error}
            </Text>
          ) : null}
        </View>
        <View
          style={{
            height: 150,
            justifyContent: 'flex-end',
            // backgroundColor: 'red',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              // margin: 30,
              justifyContent: 'space-around',
            }}>
            <BackBtn title="Back" onPress={() => navigation.goBack()} />
            <NextBtn title="Continue" onPress={submitForm} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
export default Address;
