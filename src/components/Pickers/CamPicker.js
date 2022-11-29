import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState,useEffect} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
const CamPicker = () => {
  useEffect(()=>{
    takePhoto()
  },[])




  const navigation = useNavigation();
  const [snap, setSnap] = useState('');
  const takePhoto = () => {
    ImagePicker.openCamera({
      useFrontCamera: false,
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setSnap(image.path);
      navigation.navigate('ReviewScan', {
        img: image.path,
      });
    });
  };
  console.log('Harris', snap);
  return (
    <View style={{marginTop: 30}}>
      {/* <TouchableOpacity
        style={{height: 40, backgroundColor: 'yellow'}}
        onPress={() => takePhoto()}>
        <Text>camera</Text>
      </TouchableOpacity> */}
    
    </View>
  );
};

export default CamPicker;

const styles = StyleSheet.create({});
