/** @format */
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import { name as appName } from './app.json';

const App = () => (
        <Text> Some  123 </Text>
    );

AppRegistry.registerComponent(appName, () => App);
