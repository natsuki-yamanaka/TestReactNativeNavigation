import { Navigation } from 'react-native-navigation';
import { Screen1 } from './Screen1';
import { Screen2 } from './Screen2';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

export class App {
  constructor() {
    console.log('test ------------- App');
    Navigation.registerComponent(
      'Screen1',
      () => Screen1,
    );
    Navigation.registerComponent(
      'Screen2',
      () => Screen2,
    );
    console.log('test ------------- startSingleScreenApp');
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'Screen1',
        title: 'Screen1',
      },
    });
  }
}

