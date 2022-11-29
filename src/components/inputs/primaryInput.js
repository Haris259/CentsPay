import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Fonts} from '../../assets/font/fonts';
const PrimaryInput = ({
  placeholder,
  label,
  value,
  style,
  onChangeText,
  keyboardType,
  activeOutlineColor,
  maxLength,
  onSubmitEditing
}) => {
  const [error, setError] = useState(false);
  const [cont, setCont] = useState('');
  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShow(!show);
  //   }, 5000);
  //   return () => clearTimeout(timeout);
  // }, [show]);
  return (
    <View
      style={{
        // marginHorizontal: 30,
        marginTop: 20,
        borderRadius: 5,
        // marginHorizontal:30
      }}>
      <TextInput
        placeholder={placeholder}
        style={{
          height: 56,
          // backgroundColor: '#fafafa',
          color: '#1A1A1A',
          borderWidth: 1,
          borderColor: 'rgba(218, 218, 218, 1)',
          borderRadius: 5,
          padding: 16,
          fontSize: 15,
          fontFamily: Fonts.medium,
          lineHeight: 22,
        }}
        onSubmitEditing={onSubmitEditing}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        selectionColor="#1A1A1A"
        placeholderTextColor="#A8A8A8"
        maxLength={maxLength}
        onFocus={() => setError(true)}
        onBlur={() => setError(false)}
      />
    </View>
  );
};

export default PrimaryInput;

const styles = StyleSheet.create({
  inputStyle: {
    ...Platform.select({
      ios: {
        fontFamily: 'Nunito',
        fontWeight: '600',
        fontStyle: 'normal',
      },
      android: {
        fontFamily: Fonts.medium,
      },
    }),
  },
});
