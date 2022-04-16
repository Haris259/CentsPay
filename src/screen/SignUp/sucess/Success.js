import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import SecondaryButton from '../../../components/button/secondaryButton';
import {Fonts} from '../../../assets/font/fonts';

const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 30}}>
        <View style={{marginTop: 100}}>
          <Image source={require('../../../assets/icon/accept.png')} />
        </View>
        <Text
          style={{
            marginTop: 35,
            fontSize: 25,
            lineHeight: 38,
            color: '#2d2d2d',
            fontFamily: Fonts.medium,
          }}>
          Success!!
        </Text>
        <View style={styles.modalContainer}>
          <View style={{marginTop: 40, marginHorizontal: 20}}>
            <Text
              style={{
                fontSize: 17,
                lineHeight: 26,
                fontFamily: Fonts.medium,
                color: '#000000',
              }}>
              Welcome to cents
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 20,
                  color: '#000000',
                  marginTop: 10,
                  fontFamily: Fonts.medium,
                }}>
                Activate your account to start using{'\n'}
                the great features of cents
              </Text>
            </View>
          </View>
          <View style={styles.modalBtn}>
            <SecondaryButton
              title={'Activate Account'}
              onPress={() => navigation.navigate('address')}
            />
            <TouchableOpacity
              style={{marginTop: 15}}
              onPress={() => navigation.navigate('homeScreen')}>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: Fonts.medium,
                  color: 'rgba(168, 168, 168, 1)',
                  textDecorationLine: 'underline',
                }}>
                Activate later
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
  },
  modalContainer: {
    width: 320,
    height: 332,
    backgroundColor: '#ffffff',
    // alignSelf: 'center',
    marginTop: 130,
    borderRadius: 20,
    marginBottom: 30,
  },
  modalBtn: {
    alignItems: 'center',
    marginTop: 70,
  },
});
export default Success;
