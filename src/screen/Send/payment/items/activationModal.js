import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import SecondaryButton from '../../../../components/button/secondaryButton';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../../../assets/font/fonts';
const ActivationModal = ({activationModal, activationCloseModal}) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        visible={activationModal}
        transparent={true}
        hardwareAccelerated={true}>
        <View style={styles.modalView}>
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
                onPress={() => navigation.navigate('address')}
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
    top: 350,
    width: 345,
    height: 332,
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,

    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
