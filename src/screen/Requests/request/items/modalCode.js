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
import CountryCode from './CountryCode';
const ModalCode = ({modalVisible, handleClick}) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        hardwareAccelerated={true}>
        <View style={styles.modalView}>
          <CountryCode handleClick={handleClick} />
        </View>
      </Modal>
    </View>
  );
};

export default ModalCode;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
