import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import {BottomNav} from '../../components';

const Report = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Hello</Text>
      </View>
      <BottomNav active="Report" navigation={navigation} />
    </>
  );
};

export default Report;
