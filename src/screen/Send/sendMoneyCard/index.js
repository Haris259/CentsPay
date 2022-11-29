import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import icon from '../../../assets/icon';
import {globalStyles} from '../../../common/styles';
import {Fonts} from '../../../assets/font/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Bank, Card} from '../../../assets/SVG/svg';
import {SvgXml} from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';

const SendMoneyCard = ({navigation}) => {
  const [touchableBank, setTouchableBank] = useState(false);
  const [touchableCard, setTouchableCard] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-chevron-back"
            size={25}
            color="rgba(219, 92, 79, 1)"
          />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            fontSize: 25,
            lineHeight: 38,
            color: '#2d2d2d',
            fontFamily: Fonts.semiBold,
            width: 290,
          }}>
          Select how to send your money 
        </Text> 
        <TouchableOpacity
          style={{
            height: 200,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            marginTop: 20,
            borderWidth: touchableBank ? 1 : 0,
            borderRadius: 20,
            borderColor: 'rgba(168, 168, 168, 1)',
          }}
          onPress={() => navigation.navigate('whoTo')}
          activeOpacity={0.4}>
          <View
            style={{padding: 20, flexDirection: 'row', alignItems: 'center'}}>
            <SvgXml xml={Bank} />
            <Text
              style={{
                fontSize: 18,
                lineHeight: 27,
                color: '#d84e5b',
                marginLeft: 10,
                fontFamily: Fonts.medium,
              }}>
              To bank account
            </Text>
          </View>
          <View
            style={{
              borderColor: 'gray',
              paddingHorizontal: 30,
              paddingTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  fontFamily: Fonts.medium,
                  color: '#a8a8a8',
                }}>
                Limit
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  color: '#1a1a1a',
                  width: 160,
                  fontFamily: Fonts.medium,
                  alignItems: 'flex-end',
                }}>
                8,5000.00GBP
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  fontFamily: Fonts.medium,
                  color: '#a8a8a8',
                }}>
                Fee
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  color: '#1a1a1a',
                  width: 160,
                  alignItems: 'flex-end',
                  marginLeft: 10,
                  fontFamily: Fonts.medium,
                }}>
                0 GBP
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  fontFamily: Fonts.medium,
                  color: '#a8a8a8',
                }}>
                Should arrive
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  width: 160,
                  alignItems: 'flex-end',
                  lineHeight: 22,
                  color: '#1a1a1a',
                  fontFamily: Fonts.medium,
                  marginLeft: 15,
                }}>
                A few minutes
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 200,
            marginTop: 20,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderWidth: touchableCard ? 1 : 0,
            borderRadius: 20,
            borderColor: 'rgba(168, 168, 168, 1)',
          }}
          onPress={() => navigation.navigate('sendMoneyToCard')}
          activeOpacity={0.4}>
          <View
            style={{padding: 20, flexDirection: 'row', alignItems: 'center'}}>
            <SvgXml xml={Card} />

            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                lineHeight: 27,
                fontFamily: Fonts.medium,
                color: '#D84E5B',
              }}>
              To card
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 12,
                lineHeight: 18,
                fontFamily: Fonts.medium,
                color: '#a8a8a8',
              }}>
              (MasterCard or Visa)
            </Text>
          </View>
          <View
            style={{
              borderColor: 'gray',
              paddingHorizontal: 30,
              paddingTop: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  color: '#a8a8a8',
                  fontFamily: Fonts.medium,
                }}>
                Limit
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  color: '#1a1a1a',
                  width: 160,
                  alignItems: 'flex-end',
                  fontFamily: Fonts.medium,
                }}>
                8,5000.00GBP
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  color: '#a8a8a8',
                  fontFamily: Fonts.medium,
                }}>
                Fee
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  color: '#1a1a1a',
                  fontFamily: Fonts.medium,
                  width: 160,
                  alignItems: 'flex-end',
                }}>
                0 GBP
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  color: '#a8a8a8',
                  fontFamily: Fonts.medium,
                }}>
                Should arrive
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  lineHeight: 22,
                  fontFamily: Fonts.medium,
                  width: 160,
                  alignItems: 'flex-end',
                  color: '#1a1a1a',
                }}>
                A few minutes
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
  },
  heading: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 40,
  },
});
export default SendMoneyCard;
