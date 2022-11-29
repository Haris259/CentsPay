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
import icon from '../../assets/icon';
import {countries} from '../../screen/data/data';
import {useNavigation} from '@react-navigation/native';
import {Cross} from '../../assets/SVG/svg';
import {SvgXml} from 'react-native-svg';
const CountryPicker = ({handleClick}) => {
  const navigation = useNavigation();
  const [data, setData] = useState(countries);
  const [selectCountry, setSelectedCountry] = useState([]);
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'flex-end'}}>
      <TouchableOpacity
        style={{
          height: 50,
          width: 200,
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          alignItems: 'flex-end',
          borderColor: 'rgba(224, 224, 224, 1)',
          // justifyContent: 'center',
          // marginRight: 10,
          paddingVertical:20,
          paddingHorizontal:15,
      
       
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
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() =>
                navigation.navigate('VerifyPhoto', {
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
                {item.name}
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

export default CountryPicker;

const styles = StyleSheet.create({});
