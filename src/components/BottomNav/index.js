import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BottomNav({navigation, active}) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        elevation: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 14,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}
        onPress={() => navigation.navigate('Timer')}>
        <Icon
          name={active === 'Timer' ? 'time' : 'time-outline'}
          color="#000"
          size={30}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}
        onPress={() => navigation.navigate('Home')}>
        <Icon
          name={active === 'Home' ? 'add-circle' : 'home-outline'}
          color="#000"
          size={active === 'Home' ? 40 : 30}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}
        onPress={() => navigation.navigate('Report')}>
        <Icon
          name={active === 'Report' ? 'pie-chart' : 'pie-chart-outline'}
          color="#000"
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
}
