import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackBtn from '../../components/button/backBtn';
import NextBtn from '../../components/button/nextBtn';
import CounteryPicker from '../../components/countryPicker/CounteryPicker';
import CounteryPicker2 from '../../components/countryPicker2/CountryPicker';
import CountryModal from './CountryModal';
import icon from '../../assets/icon';
import {Fonts} from '../../assets/font/fonts';
import {colors} from '../../common/colors';
const VerifyPhoto = ({navigation, withAlphaFilter, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [chooseCountry, setChooseCountry] = useState(true);
  const [data, setData] = useState([]);
  const item = route.params;
  const closeModal = () => {
    setModalVisible(!modalVisible);
    setCountryPickerVisible(!countryPickerVisible);
    setChooseCountry(!chooseCountry);
  };
  useEffect(() => {
    console.log(item?.dialling_code, item?.name);
  });
  const handleClick = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <View style={{height: '100%', backgroundColor: '#FAFAFA'}}>
        <View style={{margin: 30}}>
          <View style={{marginTop: 40}}>
            <View style={{marginBottom: 25}}>
              <Text
                style={{
                  fontSize: 25,
                  color: colors.black,
                  lineHeight: 38,
                  fontFamily: Fonts.medium,
                }}>
                Verify your Identity
              </Text>
            </View>
            <Text
              style={{
                fontSize: 15,
                lineHeight: 22,
                fontFamily: Fonts.medium,
                color: colors.black,
              }}>
              To help us verfiy your identity please{'\n'}
              ensure you have a valid photo identity {'\n'}to scan.
            </Text>
          </View>
          <View style={{marginTop: 25}}>
            <Text
              style={{
                fontSize: 15,
                lineHeight: 22,
                color: colors.black,
                fontFamily: Fonts.medium,
              }}>
              Where is your photo ID from?
            </Text>
          </View>
          {chooseCountry && (
            <TouchableOpacity
              style={{
                width: 315,
                height: 55,
                borderWidth: 1,
                borderColor: colors.border,
                marginTop: 40,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}
              onPress={closeModal}>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  color: colors.black,
                  fontFamily: Fonts.medium,
                }}>
                Please, choose country
              </Text>
              <Image source={icon.rightArrow} />
            </TouchableOpacity>
          )}
          {countryPickerVisible && (
            <TouchableOpacity
              style={{
                width: 315,
                height: 55,
                borderWidth: 1,
                borderColor: colors.border,
                marginTop: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
              onPress={closeModal}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={item?.flag}
                  style={{height: 36, width: 36, borderRadius: 30}}
                />
                <Text
                  style={{
                    fontSize: 15,
                    lineHeight: 22,
                    color: colors.black,
                    marginLeft: 15,
                    fontFamily: Fonts.medium,
                  }}>
                  {item?.name}
                </Text>
              </View>
              <Image source={icon.rightArrow} />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            // alignItems: 'center',
            // backgroundColor: 'red',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginBottom: 20,
              // backgroundColor: 'red',
            }}>
            <BackBtn title="Back" onPress={() => navigation.goBack()} />
            <TouchableOpacity
              style={{
                height: 54,
                width: 140,
                borderWidth: 1,
                backgroundColor: countryPickerVisible ? colors.red : null,
                borderRadius: 50,
                alignItems: 'center',
                borderColor: colors.red,
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('PhotoId')}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 24,
                  fontFamily: Fonts.medium,
                  color: countryPickerVisible ? colors.white : colors.red,
                }}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <CountryModal modalVisible={modalVisible} handleClick={handleClick} />
    </>
  );
};

export default VerifyPhoto;

const styles = StyleSheet.create({});
