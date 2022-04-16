import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import SecondaryButton from '../../../components/button/secondaryButton';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import icon from '../../../assets/icon';
import ModalPopUp from './items/modalPopUp';
import {Fonts} from '../../../assets/font/fonts';
const Request = ({navigation}) => {
  const [num, setNum] = useState('0');
  const [text, setText] = useState('');
  const [bottomSheet, setBottomSheet] = useState(false);
  const [displayMessage, setDisplayMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const sheetRef = useRef(null);
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

  const handleClick = mesg => {
    setDisplayMessage(mesg);
    setShowMessage(true);
    sheetRef.current.snapTo(2);
  };
  const closeModal = () => {
    setModalVisible(!modalVisible);
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
          marginHorizontal: 20,
          fontSize: 17,
          lineHeight: 26,
          color: '#222222',
          marginTop: 20,
          marginBottom: 20,
          fontFamily: Fonts.medium,
        }}>
        What’s it for?
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
                  lineHeight: 30,
                  color: '#222222',
                  fontFamily: Fonts.medium,
                }}>
                {item.title}
              </Text>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../../assets/icon/rightArrow.png')}
                  style={{width: 9, height: 12}}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
  const renderRequest = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
        borderRadius: 10,
      }}>
      <TouchableOpacity
        style={{height: 40}}
        onPress={() => sheetRef.current.snapTo(0)}>
        <View
          style={{
            height: 4,
            width: 60,
            backgroundColor: ' rgba(168, 168, 168, 0.5)',
            alignSelf: 'center',
            borderRadius: 10,
          }}></View>
      </TouchableOpacity>

      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: ' rgba(168, 168, 168, 0.5)',
          alignSelf: 'center',
          borderRadius: 100,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center', fontSize: 15}}>A</Text>
        <View style={{position: 'absolute', right: 0, top: 30}}>
          <Image source={icon.usa} />
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text
          style={{
            fontFamily: Fonts.medium,
            fontSize: 15,
            lineHeight: 22,
            color: '#222222',
          }}>
          Request to +1 (876) 562 2346
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 30,
            color: '#222222',
            fontFamily: Fonts.semiBold,
          }}>
          {num} JMD
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: 110,
          borderWidth: 1,
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 15,
          padding: 2,
          borderRadius: 10,
          borderColor: ' rgba(168, 168, 168, 0.5)',
        }}>
        <Text
          style={{
            color: 'rgba(168, 168, 168, 1)',
            padding: 2,
            fontSize: 12,
            lineHeight: 18,
            fontFamily: Fonts.regular,
            color: '#a8a8a8',
          }}>
          to card JMD
        </Text>
        <Image
          style={{marginTop: 6, marginLeft: 5}}
          source={require('../../../assets/icon/arrowD.png')}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 22,
              fontFamily: Fonts.medium,
              color: ' rgba(216, 78, 91, 1)',
            }}>
            {displayMessage}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', marginTop: 45}}>
        <SecondaryButton
          title="Request money"
          onPress={() => navigation.navigate('RequestDone')}
        />
      </View>
    </View>
  );

  return (
    <>
      <View style={{height: '100%', marginHorizontal: 30, marginTop: 20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/icon/backArrow.png')} />
        </TouchableOpacity>
        <View style={styles.textRequestView}>
          <Text style={styles.textRequest}> Your request</Text>
        </View>
        <View style={styles.inputNumber}>
          <Text style={styles.textInput}>{num}</Text>

          <TouchableOpacity
            style={styles.description}
            onPress={() => setModalVisible(true)}>
            <Text
              style={{
                color: 'rgba(168, 168, 168, 1)',
                padding: 2,
                fontSize: 12,
                lineHeight: 18,
              }}>
              USD
            </Text>
            <Image
              style={{marginLeft: 2}}
              source={require('../../../assets/icon/arrowD.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => sheetRef.current.snapTo(0)}
          style={{
            height: 56,
            borderWidth: 1,
            marginTop: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderColor: 'rgba(218, 218, 218, 1)',
          }}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontSize: 15,
              lineHeight: 22,
              color: '#a8a8a8',
              fontFamily: Fonts.medium,
            }}>
            {showMessage ? displayMessage : 'What’s it for?'}
          </Text>
          <Image style={{}} source={icon.arrowDownBank} />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            // backgroundColor: 'red',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <VirtualKeyboard
            color={'black'}
            pressMode={'string'}
            cellStyle={{padding: 5, marginBottom: 10}}
            onPress={val => setNum(val)}
            clearOnLongPress={true}
          />
          <SecondaryButton
            title="Continue"
            onPress={() => setBottomSheet(!bottomSheet)}
          />
        </View>
      </View>
      <ModalPopUp modalVisible={modalVisible} closeModal={closeModal} />
      {bottomSheet && (
        <BottomSheet
          ref={sheetRef}
          snapPoints={[450, -30, 0]}
          borderRadius={10}
          renderContent={renderRequest}
        />
      )}
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
const styles = StyleSheet.create({
  textRequestView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textRequest: {
    fontFamily: Fonts.semiBold,
    fontSize: 25,
    color: '#2d2d2d',
    lineHeight: 37,
  },
  inputNumber: {
    justifyContent: 'center',
    marginTop: 30,

    alignItems: 'center',
  },
  textInput: {
    // width:40,
    // height:40,
    padding: 10,
    // backgroundColor:"yellow",
    fontWeight: '500',
    fontSize: 45,
    color: '#a8a8a8',
  },
  description: {
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderColor: 'rgba(168, 168, 168, 1)',
  },
  text2Input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 65,
    justifyContent: 'center',
    marginTop: 70,
    borderColor: 'rgba(168, 168, 168, 1)',
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
export default Request;
