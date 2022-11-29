import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import icon from '../../../../assets/icon';
import PrimaryButton from '../../../../components/button/primaryButton';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../../../assets/font/fonts';
import Modal from 'react-native-modal'
const ModalPopUp = ({modalVisible, closeModal}) => {  
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onBackdropPress={closeModal}
        transparent={true}
        hardwareAccelerated={true}>
        <View style={styles.modalView}>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Image source={icon.bottomSheetHeader} />
            <Text
              style={{
                fontSize: 18,
                lineHeight: 27,
                color: '#000000',
                width: 270,
                fontFamily: Fonts.semiBold,
                marginTop: 30,
              }}>
              The account details you entered don’t exist
            </Text>
            <Text
              style={{
                marginTop: 20,
                fontSize: 16,
                lineHeight: 24,
                fontFamily: Fonts.regular,
                width: 270,
                color: '#000000',
              }}>
              Please double check the details with the payee
            </Text>
            <Text
              style={{
                marginTop: 20,
                fontSize: 16,
                fontFamily: Fonts.regular,
                lineHeight: 24,
                color: '#000000',
              }}>
              You entered
            </Text>
            <Text
              style={{
                fontFamily: Fonts.medium,
                marginTop: 10,
                fontSize: 16,
                lineHeight: 24,
                color: '#000000',
              }}>
              James Blake
            </Text>
            <Text
              style={{
                fontFamily: Fonts.medium,
                marginTop: 10,
                fontSize: 16,
                lineHeight: 24,
                color: '#000000',
              }}>
              20-00-00
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
                lineHeight: 24,
                color: '#000000',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.medium,
                  marginTop: 10,
                  fontSize: 16,
                  lineHeight: 24,
                  color: '#000000',
                }}>
                42569856
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 30,
            marginBottom: 30,
          }}>
          <PrimaryButton
            title="Go back and edit"
            onPress={() => {closeModal(),navigation.navigate('howToPay')}}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalPopUp;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    top: 300,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
