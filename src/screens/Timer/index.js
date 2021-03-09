import React from 'react';
import {View, Text, StatusBar, TouchableOpacity, Vibration} from 'react-native';
import {BottomNav} from '../../components';
import CountDown from 'react-native-countdown-component';
import * as Progress from 'react-native-progress';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import SoundPlayer from 'react-native-sound-player';
import {Gap} from '../../utils';

const Timer = ({navigation}) => {
  let [num, setNum] = React.useState(0.0);
  let [counter, setCounter] = React.useState(0);
  let [start, setStart] = React.useState(false);

  // styled
  const digitStyle = {
    backgroundColor: 'transparent',
    width: 60,
  };
  const digitTxtStyle = {
    fontFamily: 'Rubik-Medium',
    fontSize: 40,
    color: '#070417',
  };

  // Time
  const time = 10 * 1;
  // Calc Progress
  const calcPercent = (counter / time) * 100;

  const onChange = () => {
    setNum(calcPercent / 100);
    setCounter(counter + 1);
  };

  const playSong = () => {
    try {
      SoundPlayer.playSoundFile('test', 'mp3');
    } catch (e) {
      console.log('cannot play the song file', e);
    }
  };
  const DURATION = 1000;
  const PATTERN = [1 * DURATION, 2 * DURATION, 3 * DURATION];

  const startVibration = () => {
    Vibration.vibrate(PATTERN, true);
    playSong();
    setStart(false);
  };

  const renderRemainingTime = () => {
    return (
      <CountDown
        size={30}
        running={start}
        until={time}
        onFinish={() => startVibration()}
        onPress={() => setStart(!start)}
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
        <Text>Timer</Text>
        <Gap height={30} />
        <Progress.Circle
          progress={num}
          size={widthPercentageToDP('46.5')}
          formatText={() => renderRemainingTime()}
          thickness={10}
          showsText
          strokeCap="round"
        />
        <Gap height={30} />
        {num === 1 ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              SoundPlayer.stop();
              Vibration.cancel();
              setNum(0.0);
            }}
            style={{
              backgroundColor: 'salmon',
              width: 100,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>STOP</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setStart(!start)}
            style={{
              backgroundColor: 'salmon',
              width: 100,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{start ? 'PAUSE' : 'START'}</Text>
          </TouchableOpacity>
        )}
      </View>
      <BottomNav active="Timer" navigation={navigation} />
    </>
  );
};

export default Timer;
