import {StyleSheet} from 'react-native';
import {Fonts} from '../assets/font/fonts';
import {colors} from './colors';

export const globalStyles = StyleSheet.create({
  heading: {
    fontSize: 40,
    lineHeight: 74,
    fontFamily: Fonts.bold,
    color: colors.white,
  },
  onBoardHeading: {
    fontSize: 26,
    lineHeight: 30,
    color: colors.white,
    fontFamily: Fonts.semiBold,
  },
  miniHeading: {
    fontSize: 30,
    // fontWeight: 'bold',
    lineHeight: 45,
    fontFamily: Fonts.semiBold,
    color: colors.black,
  },
  miniHeadingBlack2: {
    fontSize: 30,
    lineHeight: 45,
    color: colors.black,
    fontFamily: Fonts.semiBold,
  },
  h3Black: {
    fontSize: 25,
    lineHeight: 37,
    color: colors.black,
    fontFamily: Fonts.semiBold,
  },
  h3Red: {
    fontSize: 25,
    lineHeight: 37,
    color: colors.red,
    fontFamily: Fonts.medium,
  },
  btnroundedText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.red,
    fontFamily: Fonts.medium,
  },
  boldHeading: {
    fontSize: 30,
    lineHeight: 45,
    fontFamily: Fonts.medium,
    color: '#000000',
    fontWeight: 'bold',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.semiBold,
    color: colors.white,
  },
  btnTextSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.medium,
    color: colors.white,
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: Fonts.medium,
    // fontWeight: '500',
    color: 'rgba(95, 95, 95, 1)',
  },
  btnBack: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.medium,
    color: colors.red,
  },
  grayText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.gray2,
    fontFamily: Fonts.regular,
  },
  grayText2: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.gray2,
    fontFamily: Fonts.medium,
  },

  redText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.red,
    fontWeight: '500',
    fontFamily: Fonts.medium,
  },
  blackText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.black,
    fontFamily: Fonts.medium,
  },
  lightBlack: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.gray3,
    fontFamily: Fonts.medium,
  },
  forgotBtnText: {
    fontSize: 15,
    lineHeight: 18,
    fontFamily: Fonts.regular,
    color: colors.black,
    letterSpacing: -0.4,
    numOfLines: 1
    
  },
  grayHeading2: {
    fontSize: 18,
    lineHeight: 27,
    color: colors.gray2,
    fontFamily: Fonts.semiBold,
  },
  grayText: {
    fontSize: 15,
    lineHeight: 16,
    color: '#979797',
    fontFamily: Fonts.regular,
  },
  redText: {
    fontSize: 15,
    lineHeight: 16,
    color: colors.red,
    fontFamily: Fonts.semiBold,
  },
});
