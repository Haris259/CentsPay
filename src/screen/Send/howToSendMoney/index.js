import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import icon from '../../../assets/icon';
import PrimaryButton from '../../../components/button/primaryButton';
import {Fonts} from '../../../assets/font/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {User, Mobile} from '../../../assets/SVG/svg';
import {SvgXml} from 'react-native-svg';
import {globalStyles} from '../../../common/styles';

const HowToSendMoney = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
        <Ionicons
          name="ios-chevron-back"
          size={30}
          color="rgba(219, 92, 79, 1)"
        />
      </TouchableOpacity>
      <Text
        style={[
          globalStyles.h3Black,
          {marginHorizontal: 20, width: 300, marginTop: 20},
        ]}>
        Select how to send your money
      </Text>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.insideView}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('sendMoneyCard')}>
          <View style={styles.insideIcon}>
            <SvgXml xml={User} height={30} width={24} />
          </View>
          <Text style={styles.cardText}>Someone new</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.insideView}
          onPress={() => navigation.navigate('sendMoneyBymb')}>
          <SvgXml xml={Mobile} height={56} width={56} />
          <Text
            style={[
              globalStyles.blackText,
              {marginTop: 10, width: 110, textAlign: 'center'},
            ]}>
            By mobile number
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={[globalStyles.grayText2, {marginTop: 30, marginHorizontal: 30}]}>
        NO RECENT
      </Text>
    </View>
  );
};

export default HowToSendMoney;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
  },
  icon: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  card: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  insideView: {
    width: 149,
    height: 160,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideIcon: {
    height: 56,
    width: 56,
    backgroundColor: '#fafafa',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#222222',
    fontFamily: Fonts.medium,
    marginTop: 20,
  },
});
