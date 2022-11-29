import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import icon from '../../../../assets/icon';
import {globalStyles} from '../../../../common/styles';
import PrimaryButton from '../../../../components/button/primaryButton';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../../../assets/font/fonts';
const ModalPopUp = ({modalVisible, closeModal}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        hardwareAccelerated={true}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.icon} onPress={closeModal}>
            <Image source={icon.cross} />
          </TouchableOpacity>
          <View style={{padding: 20}}>
            <View style={styles.rowText}>
              <Text style={styles.textRed}>You Send</Text>
              <Text style={styles.textBlack}>200.00 GBP</Text>
            </View>
            <View style={[styles.rowText, {marginTop: 10}]}>
              <Text style={styles.textRed}>Today's rate</Text>
              <Text style={styles.textBlack}>1 GBP = 211.71 GBP</Text>
            </View>
            <View style={[styles.rowText, {marginTop: 10}]}>
              <Text style={styles.textRed}>Fee</Text>
              <Text style={styles.textBlack}>+ 1 GBP</Text>
            </View>
            <View style={[styles.rowText, {marginTop: 10}]}>
              <Text style={styles.textRed}>Transfer Time</Text>
              <Text style={styles.textBlack}>withinTime</Text>
            </View>
            <View style={styles.line} />
            <View style={[styles.rowText, {marginTop: 40}]}>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  color: '#1B1419',
                  fontFamily: Fonts.bold,
                }}>
                THEY RECEIVE
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  color: '#1B1419',
                  fontFamily: Fonts.semiBold,
                }}>
                42553.49 JMD
              </Text>
            </View>
          </View>
          <View style={styles.btnView}>
            <PrimaryButton
              title="Continue"
              // closeModal={closeModal()}
              onPress={() => {navigation.navigate('howToSendMoney'),closeModal()}}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalPopUp;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  modalView: {
    top: '25%',
    width: 345,
    height: 430,
    // margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    justifyContent:'center',
    alignSelf:'center'
  },
  icon: {
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  textBlack: {
    fontSize: 12,
    lineHeight: 18,
    color: '#1B1419',
    fontFamily: Fonts.semiBold,
  },
  textRed: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    lineHeight: 18,
    color: '#D84E5B',
  },
  rowText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: 'rgba(168, 168, 168, 0.2)',
    marginTop: 40,
  },
  btnView: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
