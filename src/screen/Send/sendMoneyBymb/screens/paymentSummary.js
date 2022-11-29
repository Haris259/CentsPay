import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import icon from '../../../../assets/icon';
import {countries} from '../../data/data';
import PrimaryButton from '../../../../components/button/primaryButton';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {BottomNavigation} from 'react-native-paper';
import {Fonts} from '../../../../assets/font/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons'

const PaymentSummary = ({navigation}) => {
  const [visble, setVisible] = useState(false);
  const [displayMessage, setDisplayMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = mesg => {
    setDisplayMessage(mesg);
    setShowMessage(true);
    sheetRef.current.snapTo(2);
  };
  const Data = [
    {title: 'Donation'},
    {title: 'Education'},
    {title: 'Family support'},
    {title: 'Gift'},
    {title: 'Investment / Saving'},
    {title: 'Medical Expences'},
    {title: 'Payment for Goods/ Services'},
    {title: 'Rent / Mortgage'},
    {title: 'Relocation'},
  ];

  useEffect(() => {
    const a = 'Purpose of transfer';
    if (a === 'Purpose of transfer') {
      console.log('Modal Open');
    }
  }, []);

  const verifyModal = () => {
    const a = 'Purpose of transfer';
    if (a === 'Purpose of transfer') {
      console.log('Modal Open');
    }
  };

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 650,
        borderRadius: 10,
      }}>
      <TouchableOpacity onPress={() => sheetRef.current.snapTo(2)}>
        <View
          style={{
            backgroundColor: 'rgba(224, 224, 224, 1)',
            height: 3,
            width: `40%`,
            alignSelf: 'center',
            borderRadius: 10,
          }}></View>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 17,
          lineHeight: 25,
          marginTop: 10,
          fontFamily: Fonts.medium,
          marginHorizontal: 20,
          color: '#000000',
          marginBottom: 10,
        }}>
        Purpose of transfer
      </Text>
      <FlatList
        data={Data}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.bottomShe}
              onPress={() => handleClick(item.title)}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#222222',
                  lineHeight: 30,
                  fontFamily: Fonts.medium,
                }}>
                {item.title}
              </Text>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../../../assets/icon/rightArrow.png')}
                  style={{width: 9, height: 12}}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );

  const sheetRef = React.useRef(null);
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#FAFAFF',paddingTop:20}}>
        <View style={{flex: 1, margin: 30}}>
        <TouchableOpacity
        style={{ marginTop: 10}}
        onPress={() => navigation.goBack()}>
        <Ionicons
          name="ios-chevron-back"
          size={30}
          // style={{backgroundColor: 'red'}}
          color="rgba(219, 92, 79, 1)"
        />
      </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              lineHeight: 37,
              fontFamily: Fonts.semiBold,
              color: '#2d2d2d',
              marginTop: 20,
            }}>
            Payment summary
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 40,
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                color: '#a8a8a8',
                fontFamily: Fonts.medium,
              }}>
              Payment method
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 21,
                  color: '#EF5924',
                  fontFamily: Fonts.medium,
                }}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 48,
              backgroundColor: '#ffffff',
              marginTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              borderRadius: 5,
            }}>
            <Image source={icon.vissa} />
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                color: '#222222',
                fontFamily: Fonts.medium,
                marginLeft: 20,
              }}>
              Visa*1234
            </Text>
          </View>
          <View style={{marginTop: 50}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 22,
                  color: '#a8a8a8',
                  fontFamily: Fonts.medium,
                }}>
                Recipient
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 22,
                  color: '#1a1a1a',
                  fontFamily: Fonts.medium,
                }}>
                Steve Weights
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 22,
                  color: '#a8a8a8',
                  fontFamily: Fonts.medium,
                }}>
                They get
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 22,
                  color: '#1a1a1a',
                  fontFamily: Fonts.medium,
                }}>
                237.14 JMD
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 22,
                  color: '#a8a8a8',
                  fontFamily: Fonts.medium,
                }}>
                Fee
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 22,
                  color: '#1a1a1a',
                  fontFamily: Fonts.medium,
                }}>
                9.99 GBP
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 25,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 22,
                  color: '#a8a8a8',
                  fontFamily: Fonts.semiBold,
                }}>
                Total to pay
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 22,
                  color: '#1a1a1a',
                  fontFamily: Fonts.semiBold,
                }}>
                209.99 GBP
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => sheetRef.current.snapTo(0)}
            style={{
              height: 50,
              borderWidth: 1,
              marginTop: 60,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              borderColor: 'rgba(218, 218, 218, 1)',
              borderRadius: 5,
            }}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                fontSize: 15,
                lineHeight: 22,
                fontFamily: Fonts.medium,
                color: showMessage ? '#222222' : '#a8a8a8',
              }}>
              {showMessage ? displayMessage : 'Purpose of transfer'}
            </Text>
            <Image style={{}} source={icon.downGray} />
          </TouchableOpacity>

          <View style={{flex: 1}}>
            <Modal
              animationType={'slide'}
              transparent={false}
              visible={visble}
              avoidKeyboard={true}>
              <View style={styles.modal1}>
                <View style={{marginTop: 40, marginHorizontal: 15}}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'normal',
                      color: 'black',
                    }}>
                    {' '}
                    Select purpose of your transfer to {'\n'} continue
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 60,
                    flex: 1,
                    justifyContent: 'flex-end',
                    backgroundColor: 'yellow',
                  }}>
                  <TouchableOpacity
                    style={styles.buton}
                    onPress={() => setVisible(false)}>
                    <Text
                      style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                paddingBottom: 20,
              }}>
              <PrimaryButton
                title="Continue"
                onPress={() => navigation.navigate('loading')}
              />
            </View>
          </View>
        </View>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[650, 300, 0]}
        borderRadius={10}
        initialSnap={2}
        renderContent={renderContent}
      />
    </>
  );
};

export default PaymentSummary;

const styles = StyleSheet.create({
  modal1: {
    top: 328,
    left: 15,
    width: 345,
    height: 230,
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,

    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buton: {
    backgroundColor: 'rgba(216, 78, 91, 1)',
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomShe: {
    padding: 11,
    margin: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(218, 218, 218, 1)',
  },
});
