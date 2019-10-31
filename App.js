/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import PushService from './src/utils/PushService'
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore'; //where you configured your store
import AppNavigator from './src/AppNavigator'; //where your root navigator is

// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

const store = configureStore();
PushService.configure()

export default class App extends React.Component {
    
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <AppNavigator />
                </Root>
            </Provider>
        );
    }
}
