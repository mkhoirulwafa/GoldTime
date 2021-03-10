import React from 'react';
import {View, Text, StatusBar, TouchableOpacity, Vibration} from 'react-native';
import {BottomNav, Title, Circle, CategoryChip} from '../../components';
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
  const stopAll = () => {
    SoundPlayer.stop();
    Vibration.cancel();
    setNum(0.0);
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
  const butt = (backgroundColor) => ({
    backgroundColor: backgroundColor,
    width: widthPercentageToDP('80'),
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  });
  const head = {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const subtitle = {
    flexDirection: 'row',
    marginRight: 5,
    alignItems: 'center',
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View style={head}>
          <View>
            <Title size={20}>Rasion Project</Title>
            <View style={subtitle}>
              <Circle width={15} />
              <Title family="Rubik-Regular" size={15}>
                Ui Design
              </Title>
            </View>
          </View>
          <View>
            <CategoryChip>
              <Title size={11} color="#FD5B71">
                Work
              </Title>
            </CategoryChip>
          </View>
        </View>
        <Gap height={70} />
        <View style={wrap}>
          <Progress.Circle
            progress={num}
            size={widthPercentageToDP('46.5')}
            formatText={() => renderRemainingTime()}
            thickness={10}
            showsText
            strokeCap="round"
            color="#9B51E0"
          />
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => (num === 1 ? stopAll() : setStart(!start))}
            style={butt('#E9E9FF')}>
            <Title size={15}>
              {num === 1 ? 'STOP' : start ? 'PAUSE' : 'START'}
            </Title>
          </TouchableOpacity>
          <Gap height={20} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => (num === 1 ? stopAll() : setStart(!start))}
            style={butt('transparent')}>
            <Title size={15}>QUIT</Title>
          </TouchableOpacity>
          <Gap height={30} />
        </View>
      </View>
      <BottomNav active="Timer" navigation={navigation} />
    </>
  );
};

export default Timer;
