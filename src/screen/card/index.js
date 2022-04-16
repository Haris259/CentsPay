import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import icon from '../../assets/icon';
import {globalStyles} from '../../common/styles';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import RenderContent from './items/renderContent';
import ModalPopUp from './items/modal';
import {colors} from '../../common/colors';
const Card = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };
  const sheetRef = useRef(null);
  return (
    <View style={{flex: 1}}>
      <View style={{margin: 30}}>
        <Image source={icon.arrowBack} />
        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 17, lineHeight: 25, color: colors.black}}>
            Card & bank accounts
          </Text>
          <TouchableOpacity
            style={{marginTop: 15}}
            onPress={() => navigation.navigate('cardNo')}>
            <Text style={globalStyles.redText}>Add New</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 315,
              height: 77,
              borderWidth: 1,
              marginTop: 30,
              borderRadius: 10,
              borderColor: 'rgba(168, 168, 168, 0.24)',
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={closeModal}>
            <Image source={icon.capitalOne} />
            <Text
              style={{
                width: 100,
                color: colors.black,
                fontSize: 15,
                lineHeight: 20,
              }}>
              Capital One (Europe) PLC
            </Text>
            <Text
              style={{
                color: '#a8a8a8',
                fontSize: 15,
                lineHeight: 20,
              }}>
              ..3977
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[350, 200, 0]}
        borderRadius={10}
        renderContent={RenderContent}
      />
      <ModalPopUp modalVisible={modalVisible} closeModal={closeModal} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default Card;
