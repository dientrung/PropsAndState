/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import List from './components/List';
import Filter from './components/Filter';
import Form from './components/Form';

export default class App extends Component {
  render() {
    return (
      <View style={{flex : 1 }}>
        <List/>
      </View>
    );
  }
}

