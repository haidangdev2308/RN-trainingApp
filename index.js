/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainScreen from './screens/MainScreen';

AppRegistry.registerComponent(appName, () => () => 
<MainScreen
    x={1}
    y={4}
/>);
