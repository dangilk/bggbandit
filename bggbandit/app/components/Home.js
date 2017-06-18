import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Your Suggestions',
  };
  render() {
        return (
            <View>
              <Text>Wow this is the home page</Text>
            </View>
        );
    }
}
