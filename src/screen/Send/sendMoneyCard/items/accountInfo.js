import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {createRef, useRef, useState} from 'react';
import icon from '../../../../assets/icon';
import PrimaryInput from '../../../../components/inputs/primaryInput';
import NextBtn from '../../../../components/button/nextBtn';
import BackBtn from '../../../../components/button/backBtn';
import ModalPopUp from './modal';
import {Fonts} from '../../../../assets/font/fonts';
const AccountInfo = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [bottomSheet, setBottomSheet] = useState(false);
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <View style={{height: '100%', backgroundColor: '#fafaffs'}}>
        <View style={{height: '100%', marginHorizontal: 30, marginTop: 20}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.3}>
            <Image source={icon.arrowBackRed} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              lineHeight: 37,
              marginTop: 10,
              fontFamily: Fonts.semiBold,
              color: '#2d2d2d',
            }}>
            Account info
          </Text>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <PrimaryInput
              placeholder="Account number"
              // label="Account number"
              activeOutlineColor={'rgba(218, 218, 218, 1)'}
            />
            <PrimaryInput
              placeholder="SWIFT code"
              // label="Account SWIFT-BIG"
              activeOutlineColor={'rgba(218, 218, 218, 1)'}
            />
            <PrimaryInput
              placeholder="Payment Reference (optional)"
              // label="Payment Reference (optional)"
              // keyboardType="email-address"
              activeOutlineColor={'rgba(218, 218, 218, 1)'}
            />
          </View>
          <View
            style={{
              // flex: 1,
              justifyContent: 'flex-end',
              marginBottom: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <BackBtn title="Back" onPress={() => navigation.goBack()} />
              <NextBtn title="Continue" onPress={closeModal} />
            </View>
          </View>
        </View>
      </View>

      <ModalPopUp modalVisible={modalVisible} closeModal={closeModal} />
    </>
  );
};

export default AccountInfo;

const styles = StyleSheet.create({});
