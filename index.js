/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import navigator from './navigator';

AppRegistry.registerComponent(appName, () => navigator);
