import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../common/styles';
import {useNavigation} from '@react-navigation/native';
import icon from '../../../assets/icon';
import {colors} from '../../../common/colors';
const ModalPopUp = ({modalVisible, closeModal}) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        hardwareAccelerated={true}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={{
              borderRadius: 20,
              elevation: 5,
              padding: 10,
              height: 35,
              width: 35,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={closeModal}>
            <Image source={icon.arrowDownBank} />
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 17,
                lineHeight: 25,
                color: colors.black,
                textAlign: 'center',
                width: 230,
              }}>
              Enter the CVV onPress={closeModal}
              for your Capital One (Europe) PLC 3971
            </Text>
            <TextInput
              style={{
                marginTop: 20,
                width: 305,
                height: 50,
                borderWidth: 1,
                borderColor: 'rgba(218, 218, 218, 1)',
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                marginTop: 20,
                color: 'rgba(168, 168, 168, 1)',
                fontSize: 13,
                lineHeight: 20,
              }}>
              3 digits on the back of your card
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalPopUp;

const styles = StyleSheet.create({
  modalView: {
    top: 250,
    width: 345,
    height: 332,
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    padding: 20,
  },
});
