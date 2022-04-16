import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import PrimaryButton from '../../components/button/primaryButton';
import ModalPopUp from './ModalPopup';
import {Fonts} from '../../assets/font/fonts';
import {colors} from '../../common/colors';
import {globalStyles} from '../../common/styles';

const ReviewScan = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const img = route?.params;
  const uri = route?.params;
  console.log('----------------Img', img);
  const closeModal = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('homeScreen');
  };
  useEffect(() => {
    console.log('Hello', img);
    console.log('hello2', uri);
  }, []);
  return (
    <>
      <View style={{height: '100%', backgroundColor: '#FAFAFF'}}>
        <ScrollView>
          <View style={{margin: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/icon/arrowBack.png')} />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  lineHeight: 30,
                  fontFamily: Fonts.semiBold,
                  color: colors.black,
                  marginLeft: 30,
                }}>
                Review Scan
              </Text>
            </View>
            <View style={{height: 200, marginTop: 46}}>
              <Image
                source={{uri: uri?.img}}
                resizeMode="cover"
                style={{height: 197, width: 315}}
              />
            </View>
            <View style={{marginTop: 30}}>
              <Text
                style={{
                  fontSize: 20,
                  color: colors.black,
                  lineHeight: 30,
                  fontFamily: Fonts.semiBold,
                }}>
                Take a moment to check...
              </Text>
            </View>
            <View
              style={{
                marginTop: 37,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 18,
                  height: 18,
                  borderWidth: 1,
                  borderRadius: 90,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: colors.red,
                }}>
                <Image
                  source={require('../../assets/icon/check.png')}
                  style={{width: 10.9, height: 7.8}}
                />
              </View>
              <Text style={[globalStyles.blackText, {marginLeft: 10}]}>
                The photo ID is valid.
              </Text>
            </View>
            <View
              style={{
                marginTop: 37,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 18,
                  height: 18,
                  borderWidth: 1,
                  borderRadius: 90,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: colors.red,
                }}>
                <Image
                  source={require('../../assets/icon/check.png')}
                  style={{width: 10.9, height: 7.8}}
                />
              </View>
              <Text style={[globalStyles.blackText, {marginLeft: 10}]}>
                The details printed on it are {'\n'}readable.
              </Text>
            </View>
            <View
              style={{
                marginTop: 37,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 18,
                  height: 18,
                  borderWidth: 1,
                  borderRadius: 90,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: colors.red,
                }}>
                <Image
                  source={require('../../assets/icon/check.png')}
                  style={{width: 10.9, height: 7.8}}
                />
              </View>
              <Text style={[globalStyles.blackText, {marginLeft: 10}]}>
                The photo ID is glare free and not{'\n'} blurred.
              </Text>
            </View>
            <View style={{marginTop: 15}}>
              <PrimaryButton
                title={'Continue'}
                onPress={() => setModalVisible(!modalVisible)}
              />
              <TouchableOpacity
                style={{
                  // width: 315,
                  marginTop: 15,
                  borderWidth: 1,
                  height: 55,
                  borderRadius: 50,
                  borderColor: colors.red,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => navigation.navigate('verifyId2')}>
                <Text style={{color: colors.red, textAlign: 'center'}}>
                  Retake Photo ID
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <ModalPopUp modalVisible={modalVisible} closeModal={closeModal} />
    </>
  );
};
const styles = StyleSheet.create({});
export default ReviewScan;
