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
  View,
  TouchableHighlight
} from 'react-native';
import {createStore, bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux'
import {setFlag} from './reducer'

class TestHMR24_ extends Component {
  onPress = () => {
    this.props.setFlag()
  }
  render() {
    const color = this.props.flag ? 'white' : 'grey'

    return (
      <TouchableHighlight onPress={this.onPress} style={{flex: 1}}>
        <View style={[styles.container, {backgroundColor: color}]}>
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
      </TouchableHighlight>
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

const TestHMR24 = connect(state => state, (dispatch) => bindActionCreators({setFlag}, dispatch))(TestHMR24_)

const reducer = require('./reducer').default
const store = createStore(reducer)
if (module.hot) {
  module.hot.accept('./reducer', () => {
    const nextReducer = require('./reducer').default
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
