/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// TICTACTOE APP 
// import baseApp from './TICTACTOE/BaseApp';
// NAVIGATION APP
import BaseNavigationApp from './NAVIGATION/BaseNavigationApp';
// ECommerce App
import baseEcommerceApp from './ECommerceApp/baseEcommerceApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => baseEcommerceApp);
