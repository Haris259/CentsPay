import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import icon from '../../assets/icon';
import SecondaryButton from '../../components/button/secondaryButton';
import {Fonts} from '../../assets/font/fonts';
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
          <View style={{flex: 1, margin: 30}}>
            <Image source={icon.accept} style={{height: 30, width: 30}} />
            <Text
              style={{
                marginTop: 20,
                fontSize: 25,
                lineHeight: 38,
                fontFamily: Fonts.medium,
                color: '#000000',
              }}>
              Uploaded
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                lineHeight: 23,
                color: '#000000',
                fontFamily: Fonts.medium,
              }}>
              We're verifying your identity
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginBottom: 30,
                
              }}>
              <SecondaryButton title="Close" onPress={closeModal} />
            </View>
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
  },
});
