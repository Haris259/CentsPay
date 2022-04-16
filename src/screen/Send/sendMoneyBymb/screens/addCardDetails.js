import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import icon from '../../../../assets/icon';
import PrimaryButton from '../../../../components/button/primaryButton';
import {SvgXml} from 'react-native-svg';
import {Card} from '../../../../assets/SVG/svg';
import {Fonts} from '../../../../assets/font/fonts';

const AddCardDetails = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FAFAFF'}}>
      <View style={{flex: 1, marginHorizontal: 30, marginTop: 15}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icon.arrowBackRed} />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            fontSize: 25,
            lineHeight: 37,
            color: '#2d2d2d',
          }}>
          Add card details
        </Text>
        <View style={{flex: 1, marginTop: 30, justifyContent: 'center'}}>
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              // width: '100%',
              height: 55,
              alignItems: 'center',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderColor: 'rgba(218, 218, 218, 1)',
              paddingHorizontal: 10,
              borderRadius: 5,
              // backgroundColor: 'red',
            }}>
            <SvgXml xml={Card} height={16} width={20} />
            <TextInput
              style={{
                height: 55,
                width: '100%',
                padding: 5,
                fontSize: 15,
                lineHeight: 22,
                fontFamily: Fonts.medium,
                // backgroundColor: 'blue',
              }}
              placeholder="Card number"
            />
          </View>

          <TextInput
            style={{
              borderWidth: 1,
              height: 50,
              width: 315,
              marginTop: 20,
              borderColor: 'rgba(218, 218, 218, 1)',
              paddingHorizontal: 20,
            }}
            placeholder="Name on Card"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TextInput
              placeholder="MM/YY"
              style={{
                height: 50,
                width: 160,
                borderWidth: 1,
                paddingHorizontal: 20,
                borderColor: 'rgba(218, 218, 218, 1)',
              }}
            />
            <TextInput
              placeholder="0000"
              style={{
                height: 50,
                paddingHorizontal: 20,
                width: 160,
                borderWidth: 1,
                borderColor: 'rgba(218, 218, 218, 1)',
              }}
            />
          </View>
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          <PrimaryButton
            title="Continue"
            onPress={() => navigation.navigate('paymentSummary')}
          />
        </View>
      </View>
    </View>
  );
};

export default AddCardDetails;

const styles = StyleSheet.create({});
