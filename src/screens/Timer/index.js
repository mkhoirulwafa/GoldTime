import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {BottomNav} from '../../components';

const Timer = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Timer</Text>
      </View>
      <BottomNav active="Timer" navigation={navigation} />
    </>
  );
};

export default Timer;
