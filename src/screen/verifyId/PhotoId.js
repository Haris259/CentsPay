import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import NextBtn from '../../components/button/nextBtn';
import BackBtn from '../../components/button/backBtn';
import icon from '../../../src/assets/icon';
import {Fonts} from '../../assets/font/fonts';
import {colors} from '../../common/colors';
import {globalStyles} from '../../common/styles';
const PhotoId = ({navigation}) => {
  const [checkboxPassport, setCheckboxPassport] = useState(false);
  const [checkboxLicense, setCheckboxLicense] = useState(false);
  const [checkboxIdentity, setCheckboxIdentity] = useState(false);
  const [checkboxPermit, setCheckboxPermit] = useState(false);

  const passport = () => {
    setCheckboxPassport(!checkboxPassport);
    setTimeout(() => {
      navigation.navigate('verifyId2');
    }, 200);
  };
  const driverLicense = () => {
    setCheckboxLicense(!checkboxLicense);
    setTimeout(() => {
      navigation.navigate('verifyId2');
    }, 200);
  };
  const identityCard = () => {
    setCheckboxIdentity(!checkboxIdentity);
    setTimeout(() => {
      navigation.navigate('verifyId2');
    }, 200);
  };
  const scanResidence = () => {
    setCheckboxPermit(!checkboxPermit);
    setTimeout(() => {
      navigation.navigate('verifyId2');
    }, 200);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <View style={{marginHorizontal: 30, marginTop: 80}}>
        <View style={{marginBottom: 25}}>
          <Text style={globalStyles.h3Black}>
            Select Type of {'\n'}photo ID
          </Text>
        </View>

        <View>
          <Text style={globalStyles.blackText}>
            Select one form of photo ID to scan or upload
          </Text>
        </View>

        <TouchableOpacity
          style={{
            marginTop: 55,
            color: 'black',
            borderWidth: 1,
            borderColor: checkboxPassport
              ? 'rgba(168, 168, 168, 1)'
              : colors.border,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 5,
          }}
          onPress={passport}>
          <Text
            style={{
              fontSize: 15,
              color: checkboxPassport ? colors.black : colors.gray2,
              marginLeft: 16,
              lineHeight: 22,
              fontFamily: Fonts.medium,
            }}>
            Passport
          </Text>
          <View
            style={{
              height: 23,
              width: 23,
              backgroundColor: checkboxPassport ? colors.red : colors.white,
              borderRadius: 20,
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {checkboxPassport && <Image source={icon.whiteMark} />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 15,
            borderWidth: 1,
            borderColor: checkboxLicense
              ? 'rgba(168, 168, 168, 1)'
              : colors.border,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 5,
          }}
          onPress={driverLicense}>
          <Text
            style={{
              fontSize: 15,
              color: checkboxLicense ? colors.black : colors.gray2,
              marginLeft: 16,
              lineHeight: 22,
              fontFamily: Fonts.medium,
            }}>
            Driving License
          </Text>
          <View
            style={{
              height: 23,
              width: 23,
              backgroundColor: checkboxLicense ? colors.red : colors.white,
              borderRadius: 20,
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {checkboxLicense && <Image source={icon.whiteMark} />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 15,
            borderColor: checkboxIdentity
              ? 'rgba(168, 168, 168, 1)'
              : colors.border,
            borderWidth: 1,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 5,
          }}
          onPress={identityCard}>
          <Text
            style={{
              fontSize: 15,
              color: checkboxIdentity ? colors.black : colors.gray2,
              marginLeft: 16,
              lineHeight: 22,
              fontFamily: Fonts.medium,
            }}>
            National Identity card
          </Text>
          <View
            style={{
              height: 23,
              width: 23,
              backgroundColor: checkboxIdentity ? colors.red : colors.white,
              borderRadius: 20,
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {checkboxIdentity && <Image source={icon.whiteMark} />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 15,
            borderColor: checkboxPermit
              ? 'rgba(168, 168, 168, 1)'
              : colors.border,
            borderWidth: 1,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 5,
          }}
          onPress={scanResidence}>
          <Text
            style={{
              fontSize: 15,
              color: checkboxPermit ? colors.black : colors.gray2,
              marginLeft: 16,
              lineHeight: 22,
              fontFamily: Fonts.medium,
            }}>
            Residence Permit{' '}
          </Text>
          <View
            style={{
              height: 23,
              width: 23,
              backgroundColor: checkboxPermit ? colors.red : colors.white,
              borderRadius: 20,
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {checkboxPermit && <Image source={icon.whiteMark} />}
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
          }}>
          <BackBtn title="Back" onPress={() => navigation.goBack()} />
          {checkboxPassport ? (
            <NextBtn title={'Continue'} />
          ) : (
            <BackBtn title="Continue" />
          )}
        </View>
      </View>
    </View>
  );
};

export default PhotoId;
