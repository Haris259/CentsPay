import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import icon from '../../assets/icon';
import SecondaryButton from '../../components/button/secondaryButton';
import ModalPopUp from './items/modal';
import {colors} from '../../common/colors';

const CardNo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <Image source={icon.arrowBack} />
      <View style={styles.textContainer}>
        <Text style={styles.blackText}>Add Your card issued in UK</Text>
        <Text style={styles.grayText}>We store card details securely</Text>
      </View>
      <View style={styles.cardInformation}>
        <View style={styles.imageContainer}>
          <Image source={icon.grayBank} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              width: 147,
              borderBottomWidth: 1,
              borderColor: 'rgba(168, 168, 168, 0.2)',
            }}
            placeholderTextColor={colors.gray2}
            placeholder="Card no"
            keyboardType="numeric"
          />
          <TextInput
            style={{
              width: 108,
              borderBottomWidth: 1,
              borderColor: 'rgba(168, 168, 168, 0.2)',
            }}
            placeholderTextColor={colors.gray2}
            placeholder="Exp. date"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <SecondaryButton
          title="Add Card"
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
      <ModalPopUp modalVisible={modalVisible} closeModal={closeModal} />
    </View>
  );
};

export default CardNo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  textContainer: {
    marginTop: 30,
  },
  blackText: {
    fontSize: 17,
    lineHeight: 25,
    color: '#000000',
    marginTop: 5,
  },
  grayText: {
    fontSize: 17,
    lineHeight: 25,
    color: '#a8a8a8',
    marginTop: 5,
  },
  cardInformation: {
    width: 315,
    height: 209,
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 10,
    borderColor: 'rgba(168, 168, 168, 0.24)',
    padding: 20,
  },
  imageContainer: {
    height: 40,
    width: 40,
    backgroundColor: 'rgba(168, 168, 168, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
