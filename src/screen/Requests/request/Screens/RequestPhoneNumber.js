import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../../../common/styles';
import ModalCode from '../items/modalCode';
import {Fonts} from '../../../../assets/font/fonts';
import icon from '../../../../assets/icon';
// import TextInputMask from 'react-native-text-input-mask';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import SecondaryButton from '../../../../components/button/secondaryButton';
import {SafeAreaView} from 'react-native-safe-area-context';
const RequestPhoneNumber = ({navigation, route}) => {
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
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={globalStyles.miniHeading}>Request money{'\n'}from</Text>
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
          <TextInput
            // type={'cel-phone'}
            style={styles.inputMask}
            // options={{
            //   maskType: 'BRL',
            //   dddMask: '9999 999 999 ',
            // }}
            // editable={false}
            maxLength={13}
            placeholder="9999 999 999 "
            keyboardType="decimal-pad"
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
            onPress={() => navigation.navigate('Request')}
          />
        </View>
      </View>
      <ModalCode modalVisible={modalVisible} handleClick={handleClick} />
    </SafeAreaView>
  );
};

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
});
export default RequestPhoneNumber;
