import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux';
import GameCarousel from './GameCarousel';
import {fetchGameSuggestions} from '../actions/actions'

class Home extends Component {
  componentDidMount() {
    this.props.fetchGames('ntgarthunk');
  }
  render() {
        return (
            <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
              <GameCarousel/>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGames: (username) => dispatch(fetchGameSuggestions(username))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
