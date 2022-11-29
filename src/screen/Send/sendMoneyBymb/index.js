import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  SafeAreaView
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import React, {useState} from 'react';
import {globalStyles} from '../../../common/styles';
import MainHeading from '../../../components/heading/mainHeading';
import TextInputMask from 'react-native-text-input-mask';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import SecondaryButton from '../../../components/button/secondaryButton';
import icon from '../../../assets/icon';
import ModalCode from './items/modalCode';
import {Fonts} from '../../../assets/font/fonts';
const SendMoneyBymb = ({navigation, route}) => {
  const [visble, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [chooseCountry, setChooseCountry] = useState(true);
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  const [text, setText] = useState();
  const closeModal = () => {
    setModalVisible(!modalVisible);
    setChooseCountry(!chooseCountry);
    setCountryPickerVisible(!countryPickerVisible);
  };
  const handleClick = () => {
    setModalVisible(!modalVisible);
  };
  const changeText = text => {
    setText(text);
  };
  const item = route.params;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.heading}>
          <Text style={globalStyles.miniHeading}> Send money to </Text>
        </View>
        <View style={{margin: 30}}>
          {chooseCountry && (
            <TouchableOpacity style={styles.countryPicker} onPress={closeModal}>
              <TouchableOpacity>
                <Image source={icon.rightArrow} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          {countryPickerVisible && (
            <TouchableOpacity style={styles.countryPicker} onPress={closeModal}>
              <TouchableOpacity style={styles.countryPickerVisible}>
                <Image
                  source={item?.flag}
                  style={{height: 36, width: 36, borderRadius: 20}}
                />
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: Fonts.medium,
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

          <Text style={(globalStyles.text, {marginTop: 25})}>Phone Number</Text>
          <TextInputMask
            type={'cel-phone'}
            style={styles.inputMask}
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
          />
        </View>
        <View style={styles.keyboard}>
          <VirtualKeyboard
            color="black"
            pressMode="string"
            onPress={changeText}
            clearOnLongPress={true}
          />
          <View style={{marginVertical: 30}} />
          <SecondaryButton
            title="Continue"
            onPress={() => {
              setVisible(true);
            }}
          />
        </View>
      </SafeAreaView>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={visble}
        avoidKeyboard={true}>
        <View style={styles.modal1}>
        <TouchableOpacity style={styles.iconClose} onPress={()=> setVisible(false)}>
            <Image source={icon.cross} />
          </TouchableOpacity>
          <View style={{marginTop: 30, marginHorizontal: 15}}>
            <Text
              style={{
                fontSize: 17,
                lineHeight: 26,
                color: '#000000',
                fontFamily: Fonts.medium,
              }}>
           
              This number doesn't have {'\n'} a registered centspay account
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 70}}>
            <SecondaryButton
              title={'Invite'}
              onPress={() => {navigation.navigate('inviteSent'), setVisible(false)}}
            />
            <TouchableOpacity style={{marginTop: 60}}>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 20,
                  color: '#a8a8a8',
                  textDecorationLine: 'underline',
                }}>
                Other paymant option
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ModalCode  modalVisible={modalVisible} handleClick={handleClick} />
    </>
  );
};

export default SendMoneyBymb;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FAFAFF',
  },
  heading: {
    marginTop: 80,
    marginHorizontal: 20,
  },
  countryPicker: {
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
  inputMask: {
    fontFamily: Fonts.medium,
    width: 315,
    height: 55,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(218, 218, 218, 1)',
    // marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: '#1A1A1A',
    borderRadius: 6,
  },
  keyboard: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  modal1: {
    top: 328,
    width: 345,
    height: 332,
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  iconClose:{
    flexDirection:'row-reverse',
    padding:5
  }
});
