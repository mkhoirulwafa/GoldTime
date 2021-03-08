import React from 'react';
import {View, Text, StatusBar, Alert} from 'react-native';
import {BottomNav} from '../../components';
import CountDown from 'react-native-countdown-component';
import * as Progress from 'react-native-progress';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const Timer = ({navigation}) => {
  let [num, setNum] = React.useState(0.0);
  const digitStyle = {
    backgroundColor: 'transparent',
    width: 60,
  };
  const digitTxtStyle = {
    fontFamily: 'Rubik-Medium',
    fontSize: 40,
    color: '#070417',
  };
  const onChange = () => {
    return setNum(num + 0.001);
  };
  const renderRemainingTime = () => {
    return (
      <CountDown
        size={30}
        running={false}
        until={60 * 10 + 30}
        onFinish={() => Alert.alert('finished')}
        onPress={() => Alert.alert('hello')}
        digitStyle={digitStyle}
        digitTxtStyle={digitTxtStyle}
        timeToShow={['M', 'S']}
        timeLabels={{m: '', s: ''}}
        showSeparator
        onChange={onChange}
      />
    );
  };
  const wrap = {flex: 1, justifyContent: 'center', alignItems: 'center'};
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={wrap}>
        <Text>Timer{num}</Text>
        <Progress.Circle
          progress={num}
          size={widthPercentageToDP('46.5')}
          formatText={() => renderRemainingTime()}
          thickness={10}
          showsText
          strokeCap="round"
        />
      </View>
      <BottomNav active="Timer" navigation={navigation} />
    </>
  );
};

export default Timer;
