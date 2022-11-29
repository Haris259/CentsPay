import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import SecondaryButton from '../../../components/button/secondaryButton';
import {Fonts} from '../../../assets/font/fonts';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 30}}>
        <View style={{marginTop: 100}}>
          {/*  */}

          <Svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_1381_2874)">
              <Path
                d="M40.098 0C18.0417 0 0.0986328 17.9431 0.0986328 40.0001C0.0986328 62.0564 18.0417 80.0002 40.098 80.0002C62.1536 80.0002 80.0967 62.0564 80.0967 40.0001C80.0967 17.9431 62.1536 0 40.098 0ZM40.098 76.739C19.8406 76.739 3.35981 60.2569 3.35981 40.0001C3.35981 19.7426 19.8406 3.26118 40.098 3.26118C60.3548 3.26118 76.8355 19.7426 76.8355 40.0001C76.8355 60.2569 60.3548 76.739 40.098 76.739Z"
                fill="#D84E5B"
              />
              <Path
                d="M60.7567 24.0498L32.3153 52.4906L19.4399 39.6158C18.8031 38.9791 17.7713 38.9791 17.1338 39.6158C16.4971 40.2526 16.4971 41.2844 17.1338 41.9219L31.1623 55.9496C31.4806 56.268 31.898 56.4268 32.3153 56.4268C32.7326 56.4268 33.1499 56.268 33.4683 55.9496L63.0627 26.3559C63.6995 25.7191 63.6995 24.6866 63.0627 24.0498C62.4259 23.4131 61.3935 23.4131 60.7567 24.0498Z"
                fill="#D84E5B"
              />
            </G>
            <Defs>
              <ClipPath id="clip0_1381_2874">
                <Rect width="80" height="80" fill="white" />
              </ClipPath>
            </Defs>
          </Svg>

          {/* <Image source={require('../../../assets/icon/accept.png')} /> */}
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
