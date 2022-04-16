import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import icon from '../../../assets/icon';
import {globalStyles} from '../../../common/styles';
import PrimaryButton from '../../../components/button/primaryButton';
import {useNavigation} from '@react-navigation/native';
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
            style={{alignItems: 'flex-end', padding: 10}}
            onPress={closeModal}>
            <Image source={icon.cross} />
          </TouchableOpacity>
          <View style={{marginTop: 20, padding: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 12, lineHeight: 18, color: colors.red}}>
                You Send
              </Text>
              <Text style={{fontSize: 12, lineHeight: 18, color: colors.black}}>
                200.00 GBP
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 12, lineHeight: 18, color: colors.red}}>
                Today's rate
              </Text>
              <Text style={{fontSize: 12, lineHeight: 18, color: colors.black}}>
                1 GBP = 211.71 GBP
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 12, lineHeight: 18, color: colors.red}}>
                Fee
              </Text>
              <Text style={{fontSize: 12, lineHeight: 18, color: colors.black}}>
                + 1 GBP
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 12, lineHeight: 18, color: colors.red}}>
                Transfer Time
              </Text>
              <Text style={{fontSize: 12, lineHeight: 18, color: colors.black}}>
                within minutes
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 80,
              }}>
              <Text style={globalStyles.blackText}>TOTAL TO PAY</Text>
              <Text style={globalStyles.blackText}>42553.49 Peso</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginHorizontal: 30,
            marginBottom: 60,
          }}>
          <PrimaryButton
            title="Send"
            onPress={() => navigation.navigate('loading')}
          />
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
    height: 430,
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
