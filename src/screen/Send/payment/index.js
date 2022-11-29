import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CloseBtn from '../../../components/button/closeBtn';
import icon from '../../../assets/icon';
import PrimaryButton from '../../../components/button/primaryButton';
import ModalPopUp from './items/modal';
import {countries} from '../../data/data';
import ActivationModal from './items/activationModal';
import {Fonts} from '../../../assets/font/fonts';
import {globalStyles} from '../../../common/styles';
import {colors} from '../../../common/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Path} from 'react-native-svg';
const HideKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const Payment = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activationModal, setActivationModal] = useState(true);
  const [sendMoney, setSendMoney] = useState();
  const [receiveMoney, setReceiveMoney] = useState();
  const [payment, setPayment] = useState();
  // console.log(receiveMoney,"Haris")
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };
  const activationCloseModal = () => {
    setActivationModal(!activationModal);
    navigation.navigate('homeScreen');
  };
  const convertCurrency = (amount, sourceCurrency, targetCurrency) => {
    convertCurrencyAPI(amount, sourceCurrency, targetCurrency).then(data => {
      const {rates} = data;
      setTargetAmount(String(rates[targetCurrency]));
    });
  };
 
  return (
    <HideKeyboard>
      <SafeAreaView style={styles.container}>
        <CloseBtn onPress={() => navigation.goBack()} />
        <View style={styles.heading}>
          <Text style={globalStyles.h3Black}>JAMAICA</Text>
          <View style={styles.card}>
            <View style={styles.cardContentContainer}>
              <View>
                <Text style={styles.cardText}>YOU SEND</Text>
                <TextInput
                  placeholder="1.00"
                  keyboardType="numeric"
                  placeholderTextColor={colors.gray2}
                  style={styles.textInputText}
                  value={sendMoney}
                  onChangeText={setSendMoney}
                />
              </View>
              <View style={styles.cardContentImage}>
                <Text style={[styles.cardText, {marginRight: 10}]}>POUND</Text>
                <Image source={countries[0].flag} style={styles.cardImage} />
              </View>
            </View>
          </View>

          <View
            style={{marginTop: 30, marginHorizontal: 10, flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M3.64645 16.3536C3.84171 16.5488 4.15829 16.5488 4.35355 16.3536L7.53553 13.1716C7.7308 12.9763 7.7308 12.6597 7.53553 12.4645C7.34027 12.2692 7.02369 12.2692 6.82843 12.4645L4 15.2929L1.17157 12.4645C0.976311 12.2692 0.659728 12.2692 0.464466 12.4645C0.269204 12.6597 0.269204 12.9763 0.464466 13.1716L3.64645 16.3536ZM3.5 1L3.5 16H4.5L4.5 1H3.5Z"
                  fill="#D84E5B"
                />
                <Path
                  d="M14.3536 0.646445C14.1583 0.451183 13.8417 0.451183 13.6464 0.646445L10.4645 3.82843C10.2692 4.02369 10.2692 4.34027 10.4645 4.53553C10.6597 4.73079 10.9763 4.73079 11.1716 4.53553L14 1.70711L16.8284 4.53553C17.0237 4.73079 17.3403 4.73079 17.5355 4.53553C17.7308 4.34027 17.7308 4.02369 17.5355 3.82843L14.3536 0.646445ZM14.5 16V0.999999H13.5L13.5 16H14.5Z"
                  fill="#D84E5B"
                />
              </Svg>
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 12,
                  lineHeight: 18,
                  color: colors.black,
                  fontFamily: Fonts.semiBold,
                }}>
                {sendMoney}
                GBP = JMD
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardContentContainer}>
              <View>
                <ModalPopUp
                  onBackdropPress={() => setModalVisible(false)}
                  modalVisible={modalVisible}
                  closeModal={closeModal}
                />
                <ActivationModal
                  activationModal={activationModal}
                  activationCloseModal={activationCloseModal}
                  modal_close={() => setActivationModal(!activationModal)}
                  onBackdropPress={() =>
                    setActivationModal(!activationCloseModal)
                  }
                />
                <Text style={styles.cardText}>THEY RECEIVE</Text>
                <TextInput
                  placeholder="1.00"
                  keyboardType="numeric"
                  placeholderTextColor={colors.gray2}
                  style={styles.textInputText}
                  value={receiveMoney}
                  onChangeText={setReceiveMoney}
                />
              </View>
              <View style={styles.cardContentImage}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={[styles.cardText, {marginRight: 5}]}>
                    DOLLAR
                  </Text>
                  <Image
                    resizeMode="contain"
                    source={icon.arrowDownGray}
                    style={{width: 5, height: 7, marginRight: 10}}
                  />
                </View>
                <Image
                  resizeMode="cover"
                  source={countries[1].flag}
                  style={styles.cardImage}
                />
              </View>
            </View>
          </View>
        </View>
        {/*  */}
        {/* <ModalPopUp
        onBackdropPress={() => setModalVisible(false)}
        modalVisible={modalVisible}
        closeModal={closeModal} />
        <ActivationModal
          activationModal={activationModal}
          activationCloseModal={activationCloseModal}
          modal_close={() => setActivationModal(!activationModal)}
          onBackdropPress={() => setActivationModal(!activationCloseModal)} /> */}
        {/*  */}
        <View style={styles.btnContainer}>
          <PrimaryButton
            title="Continue"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </SafeAreaView>
    </HideKeyboard>

    //    <ModalPopUp
    //    onBackdropPress={() => setModalVisible(false)}
    //    modalVisible={modalVisible}
    //    closeModal={closeModal}
    //  />
    //  <ActivationModal
    //    activationModal={activationModal}
    //    activationCloseModal={activationCloseModal}
    //    modal_close={() => setActivationModal(!activationModal)}
    //    onBackdropPress={() => setActivationModal(!activationCloseModal)}
    //  />
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FAFAFF',
    // paddingVertical: 30,
  },
  heading: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 10,
  },
  card: {
    marginTop: 20,
    width: 315,
    height: 76,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    // padding: 20,
    paddingHorizontal: 30,
    paddingTop: 15,
  },
  cardContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputText: {
    fontSize: 20,
    lineHeight: 30,
    color: colors.black,
    fontFamily: Fonts.medium,
  },
  cardContentImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 30,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 10,
    lineHeight: 15,
    color: '#a8a8a8',
    fontFamily: Fonts.medium,
  },
  cardImage: {
    height: 36,
    width: 36,
    borderRadius: 20,
  },
});

export default Payment;
