import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MainHeading from '../../../../components/heading/mainHeading';
import icon from '../../../../assets/icon';
import {countries} from '../../../data/data';
import SecondaryButton from '../../../../components/button/secondaryButton';
import {useNavigation} from '@react-navigation/native';
const SendMoneyTo = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, margin: 30}}>
      <Image source={icon.arrowBackRed} />
      <Text
        style={{
          fontSize: 30,
          lineHeight: 45,
          color: '#000000',
          fontWeight: 'bold',
          marginTop: 30,
        }}>
        Send money to
      </Text>
      <View style={{marginTop: 90}}>
        <Text style={{fontSize: 18, lineHeight: 27, color: '#a8a8a8'}}>
          RECIPIENT:
        </Text>
        <Text
          style={{
            fontSize: 30,
            lineHeight: 45,
            color: '#000000',
            marginTop: 20,
          }}>
          Steve Weights
        </Text>
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Image
            style={{height: 36, width: 36, borderRadius: 20}}
            source={countries[0].flag}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 14, lineHeight: 21, color: '#a8a8a8'}}>
              **2416
            </Text>
            <Text style={{fontSize: 15, lineHeight: 22, color: '#000000'}}>
              +1-876 75777 453 678
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <SecondaryButton
          title="Continue"
          onPress={() => navigation.navigate('howToPay')}
        />
      </View>
    </View>
  );
};

export default SendMoneyTo;

const styles = StyleSheet.create({});
