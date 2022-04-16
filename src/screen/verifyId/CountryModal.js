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
import CounteryPicker2 from '../../components/countryPicker2/CountryPicker';
const CountryModal = ({modalVisible, handleClick}) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        hardwareAccelerated={true}>
        <View style={styles.modalView}>
          <CounteryPicker2 handleClick={handleClick} />
        </View>
      </Modal>
    </View>
  );
};

export default CountryModal;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
