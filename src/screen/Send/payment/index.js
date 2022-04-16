import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
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
const Payment = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activationModal, setActivationModal] = useState(true);
  const [sendMoney, setSendMoney] = useState();
  const [receiveMoney, setReceiveMoney] = useState();
  const [payment, setPayment] = useState();
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
    <>
      <View style={styles.container}>
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
              <Image source={icon.arrowDown} />
              <Image source={icon.arrowUp} />
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
                {sendMoney} GBP = JMD
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardContentContainer}>
              <View>
                <Text style={styles.cardText}>THEY RECEIVE</Text>
                <TextInput
                  placeholder="1.00"
                  keyboardType="numeric"
                  placeholderTextColor={colors.gray2}
                  style={styles.textInputText}
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
        <View style={styles.btnContainer}>
          <PrimaryButton
            title="Continue"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </View>
      <ModalPopUp modalVisible={modalVisible} closeModal={closeModal} />
      <ActivationModal
        activationModal={activationModal}
        activationCloseModal={activationCloseModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FAFAFF',
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
