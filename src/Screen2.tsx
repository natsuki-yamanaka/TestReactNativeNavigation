import { Button, View, StyleSheet } from 'react-native';
import { ScreenProps } from './ScreenProps';
import * as React from 'react';

export enum TransitionType {
  push,
  modal,
}

export interface Screen2Props {
  transitionType: TransitionType;
}

type Props = ScreenProps & Screen2Props;

export class Screen2 extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonView}>
          <Button title={'戻る'} onPress={this.onPress} />
        </View>
      </View>
    );
  }
  onPress = () => {
    switch (this.props.transitionType) {
      case TransitionType.push:
        this.props.navigator.pop();
        break;
      case TransitionType.modal:
        this.props.navigator.dismissModal();
        break;
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  buttonView: {
    width: 300,
  },
});
