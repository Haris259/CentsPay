import {StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import React,{useEffect} from 'react';
import SecondaryButton from '../../../../components/button/secondaryButton';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../../../assets/font/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from "react-native-modal";
import CloseBTn from '../../../../components/button/closeBtn';
const ActivationModal = ({
  activationModal,
  activationCloseModal,
  modal_close,
  onBackdropPress
}) => {
  const navigation = useNavigation();
  useEffect(()=> {
    console.log(onBackdropPress,'Haris');
   
  }, [])
  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        onBackdropPress={onBackdropPress}
        visible={activationModal}
        transparent={true}
        hardwareAccelerated={true}>
        <View style={styles.modalView}>
          <View style={{flexDirection:'row-reverse',}}>
          <CloseBTn onPress={()=> {modal_close(),onBackdropPress()}}/>
          </View>
          {/* <TouchableOpacity onPress={()=> {modal_close(),onBackdropPress()}} style={{flexDirection:'row-reverse',paddingHorizontal:10,paddingVertical:5}}>
            <Entypo name="cross" style={{color: '#000000',fontSize:30}} />
          </TouchableOpacity> */}
          <View style={{flex: 1, margin: 30}}>
            <Text
              style={{
                fontSize: 17,
                lineHeight: 25,
                color: '#000000',
                fontFamily: Fonts.semiBold,
              }}>
              Activate Account
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 13,
                lineHeight: 20,
                color: '#000000',
                fontFamily: Fonts.medium,
              }}>
              Identity Verification, Upload ID for review
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <SecondaryButton
                title="Continue"
                onPress={() => {
                  modal_close(), navigation.navigate('address');
                }}
              />
              <TouchableOpacity
                style={{
                  marginTop: 10,
                }}
                onPress={activationCloseModal}>
                <Text
                  style={{
                    fontSize: 13,
                    lineHeight: 20,
                    fontFamily: Fonts.medium,
                    color: 'rgba(168, 168, 168, 1)',
                    textDecorationLine: 'underline',
                  }}>
                  Activate Later
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ActivationModal;

const styles = StyleSheet.create({
  modalView: {
    // top: '30%',
    width: 345,
    height: 332,
    // margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    justifyContent: 'center',
    // alignContent:'center',
    alignSelf: 'center',
    flexDirection: 'column',
  },
});
