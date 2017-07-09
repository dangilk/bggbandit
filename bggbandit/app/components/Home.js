import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux';
import GameCarousel from './GameCarousel';
import {setGameSuggestions} from '../actions/actions'
import {GAME_SAMPLES} from '../static/games';

class Home extends Component {
  componentDidMount() {
    this.props.setGames(GAME_SAMPLES);
  }
  render() {
        return (
            <View>
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
        setGames: (games) => dispatch(setGameSuggestions(games))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
