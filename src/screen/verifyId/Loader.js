import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import Animated from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import icon from '../../assets/icon';
import Spinner from 'react-native-spinkit';
const Loader = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ReviewScan');
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Spinner color="#D84E5B" size={150} isVisible={true} type={'Circle'} />
      <Text
        style={{fontSize: 17, lineHeight: 25, marginTop: 20, color: '#D84E5B'}}>
        Processing...
      </Text>
    </View>
  );
};

export default Loader;
