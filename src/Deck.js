import React from "react";
import { View, Animated, PanResponder } from "react-native";

const Deck = ({ data, renderCard }) => {
  const renderCards = () => data.map(item => renderCard(item));

  return <View>{renderCards()}</View>;
};

export default Deck;
