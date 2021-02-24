import React from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {Gap} from '../../utils';
import {IcMore, IcArrowRight, IcMonitor, IcPlay} from '../../assets';
import {showMessage} from 'react-native-flash-message';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {BottomNav} from '../../components';

const Home = ({navigation}) => {
  const Title = styled.Text`
    font-family: ${(props) => props.family || `Rubik-Medium`};
    font-size: ${(props) => props.size || `28px`};
    color: ${(props) => props.color || `#070417`};
    margin-bottom: 5px;
  `;
  const Container = styled.View`
    display: flex;
    flex: 1;
    background-color: #fafaff;
    padding-horizontal: 20px;
  `;
  const TitleWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
  `;
  const TimerCard = styled.TouchableOpacity`
    background-color: #070417;
    width: ${widthPercentageToDP('90')};
    height: ${heightPercentageToDP('15')};
    align-self: center;
    border-radius: 20px;
    padding-horizontal: 20px;
    padding-vertical: 20px;
    justify-content: space-between;
    elevation: 3;
  `;
  const CurrentTaskWrap = styled.View`
    flex-direction: row;
  `;
  const Circle = styled.View`
    width: ${(props) => props.width || `20`};
    height: ${(props) => props.width || `20`};
    border-radius: ${(props) => (props.width || 20) / 2};
    background-color: #9b51e0;
    margin-right: 15px;
    align-items: center;
    justify-content: center;
  `;

  const ListTaskCard = styled.View`
    background-color: #ffffff;
    width: ${widthPercentageToDP('90')};
    height: ${heightPercentageToDP('11')};
    elevation: 3;
    flex-direction: row;
    border-radius: 15px;
    padding-horizontal: 20px;
    padding-vertical: 20px;
    align-items: center;
    margin-bottom: 20px;
  `;
  const TitleTaskWrap = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

  const CategoryChip = styled.View`
    background-color: ${(props) => props.color || `#FFEFF1`};
    width: 40px;
    height: 20px;
    border-radius: 5px;
    align-items: center
    justify-content: center;
    margin-right: 5px
  `;

  const onMore = () => {
    showMessage({
      message: 'This features is not yet available',
      type: 'info',
    });
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fafaff" />
      <Container>
        <Gap height={30} />
        <TitleWrapper>
          <Title>Task</Title>
          <TouchableOpacity activeOpacity={0.8} onPress={onMore}>
            <IcMore />
          </TouchableOpacity>
        </TitleWrapper>
        <Gap height={20} />
        <TimerCard activeOpacity={0.8}>
          <TitleWrapper>
            <Title size={32} color="#fff">
              00:32:40
            </Title>
            <TouchableOpacity activeOpacity={0.7} onPress={onMore}>
              <IcArrowRight color="#fff" />
            </TouchableOpacity>
          </TitleWrapper>
          <CurrentTaskWrap>
            <Circle />
            <Title family="Rubik-Regular" size={15} color="#fff">
              Ui Design
            </Title>
          </CurrentTaskWrap>
        </TimerCard>
        <Gap height={30} />
        {/* List */}
        <TitleWrapper>
          <Title size={25}>Today</Title>
          <TouchableOpacity activeOpacity={0.7} onPress={onMore}>
            <Title size={15}>See All</Title>
          </TouchableOpacity>
        </TitleWrapper>
        <Gap height={10} />
        <ListTaskCard>
          <Circle width={45}>
            <IcMonitor />
          </Circle>
          <TitleTaskWrap>
            <View>
              <Title size={15}>Ui Design</Title>
              <Gap height={10} />
              <TitleTaskWrap>
                <CategoryChip>
                  <Title size={11} color="#FD5B71">
                    Work
                  </Title>
                </CategoryChip>
                <CategoryChip>
                  <Title size={11} color="#FD5B71">
                    Work
                  </Title>
                </CategoryChip>
              </TitleTaskWrap>
            </View>
            <View>
              <Title size={13} color="#828282">
                00:42:00
              </Title>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{alignSelf: 'flex-end'}}>
                <IcPlay />
              </TouchableOpacity>
            </View>
          </TitleTaskWrap>
        </ListTaskCard>
        <ListTaskCard>
          <Circle width={45}>
            <IcMonitor />
          </Circle>
          <TitleTaskWrap>
            <View>
              <Title size={15}>Ui Design</Title>
              <Gap height={10} />
              <TitleTaskWrap>
                <CategoryChip>
                  <Title size={11} color="#FD5B71">
                    Work
                  </Title>
                </CategoryChip>
                <CategoryChip>
                  <Title size={11} color="#FD5B71">
                    Work
                  </Title>
                </CategoryChip>
              </TitleTaskWrap>
            </View>
            <View>
              <Title size={13} color="#828282">
                00:42:00
              </Title>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{alignSelf: 'flex-end'}}>
                <IcPlay />
              </TouchableOpacity>
            </View>
          </TitleTaskWrap>
        </ListTaskCard>
        <ListTaskCard>
          <Circle width={45}>
            <IcMonitor />
          </Circle>
          <TitleTaskWrap>
            <View>
              <Title size={15}>Ui Design</Title>
              <Gap height={10} />
              <TitleTaskWrap>
                <CategoryChip>
                  <Title size={11} color="#FD5B71">
                    Work
                  </Title>
                </CategoryChip>
                <CategoryChip>
                  <Title size={11} color="#FD5B71">
                    Work
                  </Title>
                </CategoryChip>
              </TitleTaskWrap>
            </View>
            <View>
              <Title size={13} color="#828282">
                00:42:00
              </Title>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{alignSelf: 'flex-end'}}>
                <IcPlay />
              </TouchableOpacity>
            </View>
          </TitleTaskWrap>
        </ListTaskCard>
        <ListTaskCard>
          <Circle width={45}>
            <IcMonitor />
          </Circle>
          <TitleTaskWrap>
            <View>
              <Title size={15}>Ui Design</Title>
              <Gap height={10} />
              <TitleTaskWrap>
                <CategoryChip>
                  <Title size={11} color="#FD5B71">
                    Work
                  </Title>
                </CategoryChip>
                <CategoryChip>
                  <Title size={11} color="#FD5B71">
                    Work
                  </Title>
                </CategoryChip>
              </TitleTaskWrap>
            </View>
            <View>
              <Title size={13} color="#828282">
                00:42:00
              </Title>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{alignSelf: 'flex-end'}}>
                <IcPlay />
              </TouchableOpacity>
            </View>
          </TitleTaskWrap>
        </ListTaskCard>
      </Container>
      <BottomNav active="Home" navigation={navigation} />
    </>
  );
};

export default Home;
