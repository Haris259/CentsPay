import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CloseBtn from '../../../components/button/closeBtn';
import Heading from '../../../components/heading/mainHeading';
import {globalStyles} from '../../../common/styles';
import {countries} from '../../data/data';
import AlphabetList from 'react-native-flatlist-alphabet';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../../../assets/font/fonts';
import {colors} from '../../../common/colors';
const NORTH_AMERICA = ['US'];
const SelectCountry = ({navigation}) => {
  const [flag, setFlag] = useState(countries);

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity style={{marginHorizontal: 20, marginTop: 50}}>
        <Entypo name="cross" size={20} color="rgba(45, 45, 45, 1)" />
      </TouchableOpacity> */}
      <CloseBtn onPress={() => navigation.goBack()} />
      <View style={styles.countriesContainer}>
        <View style={{marginTop: 10}}>
          <Text style={globalStyles.grayText}>Available countries</Text>
          <View style={styles.availableCountries}>
            <TouchableOpacity
              style={styles.border}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('payment', {
                  paramKey: 'AG',
                })
              }>
              <Image
                source={flag[0].flag}
                style={{height: 20, width: 20, borderRadius: 20}}
              />
              <Text style={[globalStyles.grayText2, {marginLeft: 10}]}>
                {flag[0].name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.border}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('payment', {
                  paramKey: 'AG',
                })
              }>
              <Image
                source={flag[9].flag}
                style={{height: 20, width: 20, borderRadius: 20}}
              />
              <Text style={[globalStyles.grayText2, {marginLeft: 10}]}>
                {flag[9].name}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 50}}>
            <Text style={globalStyles.grayText}>
              OTHER COUNTRIES (coming soon)
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={flag}
                keyExtractor={item => item.name}
                ListEmptyComponent={() => <Text>Hello</Text>}
                renderItem={({item}) => (
                  <View style={styles.flatListView}>
                    <Image source={item.flag} style={styles.flatListImage} />
                    <Text style={[globalStyles.grayText2, {marginLeft: 20}]}>
                      {item.name}
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
  },
  countriesContainer: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  availableCountries: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  border: {
    borderWidth: 1,
    width: 146,
    height: 36,
    borderColor: colors.border,
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatListView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
  },
  flatListImage: {
    height: 36,
    width: 36,
    borderRadius: 20,
    marginBottom: 10,
  },
});
export default SelectCountry;
