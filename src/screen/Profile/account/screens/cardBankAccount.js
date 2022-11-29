import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import icon from '../../../../assets/icon';
import {Fonts} from '../../../../assets/font/fonts';
import Svg,{Rect,Mask,Circle,G,Path} from 'react-native-svg';
import {ArrowBack, Edit} from '../../../../assets/SVG/svg';
import {SvgXml} from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
const CardBankAccount = ({navigation}) => {
  const [showCardNumber, setShowCardNumber] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <View style={{margin: 30}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml xml={ArrowBack} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            lineHeight: 38,
            color: '#2d2d2d',
            marginTop: 20,
            fontFamily: Fonts.semiBold,
          }}>
          Cards & bank accounts
        </Text>
        <TouchableOpacity style={{marginTop: 15}}>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 27,
              color: '#D84E5B',
              fontFamily: Fonts.medium,
            }}>
            Add new
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: 196,
            borderWidth: 1,
            borderColor: 'rgba(168, 168, 168, 0.24)',
            marginTop: 50,
            padding: 20,
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image source={icon.vissa} />
            <TouchableOpacity
              onPress={() => setShowCardNumber(!showCardNumber)}>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 18,
                  color: '#D84E5B',
                  fontFamily: Fonts.medium,
                }}>
                {showCardNumber ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                fontSize: 13,

                color: '#a8a8a8',
                fontFamily: Fonts.medium,
              }}>
              Card number
            </Text>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 22,
                fontFamily: Fonts.medium,
                color: '#222222',
                marginTop: 10,
              }}>
              {showCardNumber ? '****' : '12345'}
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 13,

                    color: '#a8a8a8',
                    fontFamily: Fonts.medium,
                  }}>
                  Date
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    fontFamily: Fonts.medium,
                    color: '#222222',
                    marginTop: 10,
                  }}>
                  {showCardNumber ? '****' : '12/24'}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 13,

                    color: '#a8a8a8',
                    fontFamily: Fonts.medium,
                  }}>
                  CVV
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    fontFamily: Fonts.medium,
                    color: '#222222',
                    marginTop: 5,
                  }}>
                  {showCardNumber ? '***' : '754'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardBankAccount;

const styles = StyleSheet.create({});
