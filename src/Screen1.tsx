import { Button, View, StyleSheet } from 'react-native';
import { ScreenProps } from './ScreenProps';
import * as React from 'react';
import { Screen2Props, TransitionType } from './Screen2';
import { PushedScreen } from '../node_modules/@types/react-native-navigation';
import { ModalScreen } from 'react-native-navigation';
export class Screen1 extends React.Component<ScreenProps, any> {
  constructor(props: ScreenProps) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonView}>
          <Button title={'push'} onPress={this.onPressPush} />
        </View>

        <View style={styles.buttonView}>
          <Button title={'push fade'} onPress={this.onPressPushFade} />
        </View>

        <View style={styles.buttonView}>
          <Button
            title={'push slide-horizontal'}
            onPress={this.onPressPushSlideHolizontal}
          />
        </View>

        <View style={styles.buttonView}>
          <Button title={'showModal'} onPress={this.onPressShowModal} />
        </View>

        <View style={styles.buttonView}>
          <Button
            title={'showModal none'}
            onPress={this.onPressShowModalNone}
          />
        </View>

        <View style={styles.buttonView}>
          <Button
            title={'showModal slide-up'}
            onPress={this.onPressShowModalSlideUp}
          />
        </View>

        <View style={styles.buttonView}>
          <Button
            title={'showModal screen(custom only android)'}
            onPress={this.onPressShowModalCustom}
          />
        </View>
      </View>
    );
  }

  onPressPush = () => {
    this.push();
  };

  onPressPushFade = () => {
    this.push('fade');
  };

  onPressPushSlideHolizontal = () => {
    this.push('slide-horizontal');
  };

  onPressShowModal = () => {
    this.showModal();
  };

  onPressShowModalNone = () => {
    this.showModal('none');
  };

  onPressShowModalSlideUp = () => {
    this.showModal('slide-up');
  };

  onPressShowModalCustom = () => {
    this.showModal('screen');
  };

  push = (animationType?: string) => {
    let param = {
      screen: 'Screen2',
      title: 'Screen2',
      passProps: {
        transitionType: TransitionType.push,
      },
    } as PushedScreen<Screen2Props>;
    if (animationType !== undefined) {
      param = Object.assign(param, { animationType: animationType });
    }
    this.props.navigator.push(param);
  };

  showModal = (animationType?: string) => {
    let param = {
      screen: 'Screen2',
      title: 'Screen2',
      passProps: {
        transitionType: TransitionType.modal,
      },
      navigatorButtons: { leftButtons: [{ id: 'cancel' }] },
    } as ModalScreen;
    if (animationType !== undefined) {
      param = Object.assign(param, { animationType: animationType });
    }
    this.props.navigator.showModal(param);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: 300,
    margin: 24,
  },
});
