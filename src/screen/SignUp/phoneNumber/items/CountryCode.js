import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import icon from '../../../../assets/icon';
import {countries} from '../../../data/data';
import {useNavigation} from '@react-navigation/native';
import {Cross} from '../../../../assets/SVG/svg';
import {SvgXml} from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo';
const CountryCode = ({handleClick}) => {
  const navigation = useNavigation();
  const [data, setData] = useState(countries);
  const [selectCountry, setSelectedCountry] = useState([]);
  const [items, setItems] = useState();

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'flex-end'}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          width: 200,
          flexDirection: 'row-reverse',
          paddingHorizontal: 10,
          height: 40,
          paddingVertical: 10,
        }}
        onPress={handleClick}>
        <SvgXml xml={Cross} />
      </TouchableOpacity>

      <FlatList
        style={{
          flex: 1,
          backgroundColor: '#a8a8a8',
          width: 200,
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }}
        data={data}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: 'rgba(224, 224, 224, 1)',
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // backgroundColor: 'red',
              }}
              onPress={() =>
                navigation.navigate('phoneNumber', {
                  ...item,
                })
              }>
              <Image
                resizeMode="cover"
                source={item.flag}
                style={{
                  marginLeft: 20,
                  height: 36,
                  width: 36,
                  borderRadius: 50,
                  marginBottom: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 22,
                  color: '#1a1a1a',
                  marginLeft: 20,
                }}>
                {item.dialling_code}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {/* {data.map(item => (
        <Text>{item.code}</Text>
      ))} */}
    </SafeAreaView>
  );
};

export default CountryCode;

const styles = StyleSheet.create({});
