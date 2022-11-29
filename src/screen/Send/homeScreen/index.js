import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import NextBtn from '../../../components/button/nextBtn';
import BackBtn from '../../../components/button/backBtn';
import {useNavigation} from '@react-navigation/native';
import {ProfilePicture, Rocket} from '../../../assets/SVG/svg';
import {SvgXml} from 'react-native-svg';
import {globalStyles} from '../../../common/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({route}) => {
  const navigation = useNavigation();
  const data = route.params;
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.profile}
        onPress={() => navigation.navigate('account')}>
        <SvgXml xml={ProfilePicture} width={30} height={30} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <SvgXml xml={Rocket} />
        <View style={{marginTop: 30}}>
          <Text style={globalStyles.h3Black}>Send & request money</Text>
          <Text style={globalStyles.h3Red}>Across the Caribbean</Text>
          <Text style={globalStyles.grayText2}>Fast and hassle-free</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <BackBtn
            title="Request"
            onPress={() => navigation.navigate('requestMobilePhone')}
          />
          <NextBtn
            title="Send"
            onPress={() => navigation.navigate('selectCountry')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  profile: {
    margin: 30,
    alignItems: 'flex-end',
  },
  imageContainer: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 60,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

export default HomeScreen;
