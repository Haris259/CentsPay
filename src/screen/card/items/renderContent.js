import {View, Text, Image} from 'react-native';
import icon from '../../../assets/icon';
import React from 'react';
import {globalStyles} from '../../../common/styles';
import PrimaryButton from '../../../components/button/primaryButton';
import {colors} from '../../../common/colors';
const RenderContent = () => {
  return (
    <View
      style={{
        width: 345,
        backgroundColor: colors.white,
        padding: 16,
        height: 291,
        margin: 20,
        borderRadius: 10,
      }}>
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <Image source={icon.line} />
      </View>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={{marginRight: 15}} source={icon.card} />
          <Text style={globalStyles.redText}>Card</Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 30, alignItems: 'center'}}>
          <Image style={{marginRight: 15}} source={icon.bank} />
          <Text style={globalStyles.redText}>Bank account</Text>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <PrimaryButton
          title="Add Funds"
          onPress={() => navigation.navigate('home')}
        />
      </View>
    </View>
  );
};

export default RenderContent;
