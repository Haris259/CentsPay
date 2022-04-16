import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {TextInput} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {globalStyles} from '../../../common/styles';
import MainHeading from '../../../components/heading/mainHeading';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import SecondaryButton from '../../../components/button/secondaryButton';
import icon from '../../../assets/icon';
import {TextInputMask} from 'react-native-masked-text';

import ModalCode from './items/modalCode';
import {Fonts} from '../../../assets/font/fonts';
const PhoneNumber = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [chooseCountry, setChooseCountry] = useState(true);
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [phNumber, setPhNumber] = useState();
  const [text, setText] = useState();
  const item = route.params;

  useEffect(() => {
    console.log(text);
  }, []);
  const changeText = text => {
    setText(text);
  };
  const closeModal = () => {
    setModalVisible(!modalVisible);
    setChooseCountry(!chooseCountry);
    setCountryPickerVisible(!countryPickerVisible);
  };
  const handleClick = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={globalStyles.miniHeading}>Get started with</Text>
          <Text style={globalStyles.miniHeading}>Cents</Text>
        </View>
        <View style={{margin: 30}}>
          {chooseCountry && (
            <TouchableOpacity
              style={styles.countryContainer}
              onPress={closeModal}>
              <TouchableOpacity>
                <Image source={icon.rightArrow} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          {countryPickerVisible && (
            <TouchableOpacity
              style={styles.countryContainer}
              onPress={closeModal}>
              <TouchableOpacity style={styles.countryPickerVisible}>
                <Image
                  source={item?.flag}
                  style={{height: 36, width: 36, borderRadius: 20}}
                />
                <Text
                  style={{
                    fontFamily: Fonts.medium,
                    fontSize: 15,
                    lineHeight: 22,
                    marginLeft: 10,
                    color: '#1a1a1a',
                  }}>
                  {item?.dialling_code}
                </Text>
                <Image source={icon.rightArrow} style={{marginLeft: 10}} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          <Text style={[globalStyles.text, {marginTop: 25}]}>Phone Number</Text>
          <TextInputMask
            type={'cel-phone'}
            style={styles.textInputMask}
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
            ref={ref => (this.phoneField = ref)}
          />
        </View>
        <View style={styles.keyboard}>
          <VirtualKeyboard
            color="black"
            pressMode="string"
            onPress={changeText}
            style={{marginBottom: 20}}
          />
          <SecondaryButton
            title="Continue"
            onPress={() => navigation.navigate('signupPassword')}
          />
        </View>
      </View>
      <ModalCode modalVisible={modalVisible} handleClick={handleClick} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FAFAFF',
  },
  heading: {
    marginTop: 100,
    marginHorizontal: 30,
  },
  countryContainer: {
    flexDirection: 'row',
    width: 110,
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(218, 218, 218, 1)',
  },
  countryPickerVisible: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInputMask: {
    fontFamily: Fonts.medium,
    // width: 315,
    height: 55,
    borderWidth: 1,
    borderColor: 'rgba(218, 218, 218, 1)',
    // marginTop: 8,
    paddingHorizontal: 15,
    fontSize: 15,
    lineHeight: 22,
    color: '#1A1A1A',
    borderRadius: 6,
  },
  keyboard: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
});
export default PhoneNumber;
