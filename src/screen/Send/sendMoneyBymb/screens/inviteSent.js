import {Image, StyleSheet, Text, View, Modal} from 'react-native';
import React, {useState} from 'react';
import icon from '../../../../assets/icon';
import SecondaryButton from '../../../../components/button/secondaryButton';
import {Fonts} from '../../../../assets/font/fonts';
const InviteSent = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);
  const handleClick = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('homeScreen');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fafafa',
      }}>
      <View style={{marginHorizontal: 30, marginTop: 130}}>
        <Image source={icon.accept} />
        <Text
          style={{
            marginTop: 20,
            fontSize: 25,
            lineHeight: 38,
            color: '#2d2d2d',
            fontFamily: Fonts.semiBold,
          }}>
          Great!!!
        </Text>
      </View>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        avoidKeyboard={true}>
        <View style={styles.modal1}>
          <View style={{marginTop: 30, marginHorizontal: 15}}>
            <Text
              style={{
                fontSize: 17,
                lineHeight: 26,
                color: '#000000',
                fontFamily: Fonts.medium,
              }}>
              Invite sent
            </Text>
            <Text
              style={{
                fontSize: 13,
                lineHeight: 20,
                color: '#000000',
                fontFamily: Fonts.medium,
                width: 200,
                marginTop: 20,
              }}>
              Your contact should recieve a link to download the app and
              register
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 100}}>
            <SecondaryButton title={'Done'} onPress={handleClick} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InviteSent;

const styles = StyleSheet.create({
  modal1: {
    top: 328,
    width: 345,
    height: 332,
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
