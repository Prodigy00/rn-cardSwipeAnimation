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
  //helper method to determine how card should be positioned in x-y direction
  getCardStyle() {
    return {
      ...this.state.position.getLayout(),
      transform: [{ rotate: "-45deg" }]
    };
  }
  renderCards() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
            {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return this.props.renderCard(item);
    });
  }
  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;
