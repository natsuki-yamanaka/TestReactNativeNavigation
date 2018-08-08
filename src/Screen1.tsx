import { Button, View, StyleSheet } from 'react-native';
import { ScreenProps } from './ScreenProps';
import * as React from 'react';
import { Screen2Props, TransitionType } from './Screen2';
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
          <Button title={'showModal'} onPress={this.onPressShowModal} />
        </View>
      </View>
    );
  }
  onPressPush = () => {
    this.props.navigator.push({
      screen: 'Screen2',
      title: 'Screen2',
      passProps: {
        transitionType: TransitionType.push,
      } as Screen2Props,
    });
  };

  onPressShowModal = () => {
    this.props.navigator.showModal({
      screen: 'Screen2',
      title: 'Screen2',
      passProps: {
        transitionType: TransitionType.modal,
      } as Screen2Props,
      navigatorButtons: { leftButtons: [{ id: 'cancel' }] },
    });
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
