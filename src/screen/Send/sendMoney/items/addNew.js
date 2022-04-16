import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import icon from '../../../../assets/icon';
import {globalStyles} from '../../../../common/styles';
const AddNew = () => {
  return (
    <TouchableOpacity style={{marginTop: 30}} activeOpacity={0.6}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            height: 36,
            width: 36,
            backgroundColor: 'rgba(216, 78, 91, 0.25)',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            marginRight: 10,
          }}>
          <Image source={icon.plus} />
        </View>
        <Text style={globalStyles.redText}>Add New</Text>
      </View>
    </TouchableOpacity>
  );
};
export default AddNew;
