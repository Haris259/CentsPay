import {StyleSheet, Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryButton from '../../../components/button/primaryButton';
import icon from '../../../assets/icon';
import {globalStyles} from '../../../common/styles';
import SVGImg from '../../../assets/images/logoSvg.svg';
import {Fonts} from '../../../assets/font/fonts';
import {SvgXml} from 'react-native-svg';
import {logo} from '../../../assets/SVG/svg';

const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          '#edb494',
          '#ed9981', 
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[1, 0.6, 0.9]}
        style={{flex: 1}}>
        <View style={styles.logoContainer}>
          <SvgXml xml={logo} width={210} height={92} />
          <Text style={[globalStyles.onBoardHeading, {marginTop: 10}]}>
            Money Transfers
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton
            title="GET STARTED"
            onPress={() => navigation.navigate('pinCode')}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    marginBottom: 40,
    marginHorizontal: 20,
  },
});
export default OnBoarding;
