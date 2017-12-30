import './config/ReacttotronConfig';

import React, { Component } from 'react';

import { Provider } from 'react-redux';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from './store';
import TodoList from './components/TodoList';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
