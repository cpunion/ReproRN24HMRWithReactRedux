/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

class TestHMR24 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const reducer = require('./reducer')
const store = createStore(reducer)
if (module.hot) {
  module.hot.accept('./reducer', () => {
    const nextReducer = require('./reducer')
    store.replaceReducer(nextReducer)
  })
}

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <TestHMR24/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('TestHMR24', () => App);
