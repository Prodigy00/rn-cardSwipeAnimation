import React from "react";
import { View, Animated, PanResponder } from "react-native";

class Deck extends React.Component {
  constructor(props) {
    super(props);
    //init position of animated value
    const position = new Animated.ValueXY();

    //init panResponder
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        //change position val using animated
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {}
    });
    this.state = { panResponder, position };
  }
  renderCards = () => this.props.data.map(item => this.props.renderCard(item));
  render() {
    return (
      <Animated.View
        style={this.state.position.getLayout()}
        {...this.state.panResponder.panHandlers}
      >
        {this.renderCards()}
      </Animated.View>
    );
  }
}

export default Deck;
