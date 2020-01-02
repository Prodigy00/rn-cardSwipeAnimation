import React, { useMemo, useState } from "react";
import { View, Animated, PanResponder } from "react-native";

const Deck = ({ data, renderCard }) => {
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
          console.log({ ...gesture });
        },
        onPanResponderRelease: () => {}
      }),
    []
  );

  const renderCards = () => data.map(item => renderCard(item));

  return <View {...panResponder.panHandlers}>{renderCards()}</View>;
};

export default Deck;
