// import React, { useState, useEffect, useMemo } from "react";
// import { Animated, PanResponder, Dimensions } from "react-native";

// const SCREEN_WIDTH = Dimensions.get("window").width;
// const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
// const SWIPE_OUT_DURATION = 250;

// const Deck = ({
//   data,
//   renderCard,
//   onSwipeRight,
//   onSwipeLeft,
//   renderNoMoreCards
// }) => {
//   // const pos = new Animated.ValueXY();
//   const [pos, setPos] = useState(new Animated.ValueXY());
//   // used to animate smooth transition of the rest of the deck
//   const [pos2, setPos2] = useState(new Animated.ValueXY());
//   const [deckIndex, setDeckIndex] = useState(0);
//   const panResponder = useMemo(
//     () =>
//       PanResponder.create({
//         onStartShouldSetPanResponder: () => true,
//         onPanResponderMove: (event, gesture) => {
//           pos.setValue({ x: gesture.dx, y: gesture.dy });
//         },
//         onPanResponderRelease: (event, gesture) => {
//           if (gesture.dx > SWIPE_THRESHOLD) {
//             forceSwipe("right");
//           } else if (gesture.dx < -SWIPE_THRESHOLD) {
//             forceSwipe("left");
//           } else {
//             resetPosition();
//           }
//         }
//       }),
//     []
//   );

//   useEffect(() => {
//     setDeckIndex(0);
//   }, [data, renderCard, onSwipeRight, onSwipeLeft, renderNoMoreCards]);

//   const forceSwipe = direction => {
//     const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
//     Animated.timing(pos, {
//       toValue: { x, y: 0 },
//       duration: SWIPE_OUT_DURATION
//     }).start(() => onSwipeComplete(direction));
//   };

//   const onSwipeComplete = direction => {
//     const item = data[deckIndex];
//     direction === "right" ? onSwipeRight(item) : onSwipeLeft(item);

//     Animated.timing(pos2, {
//       toValue: { x: 0, y: -10 },
//       duration: 300
//     }).start(() => {
//       pos.setValue({ x: 0, y: 0 });
//       pos2.setValue({ x: 0, y: 0 });
//       setDeckIndex(prevDeckIndex => prevDeckIndex + 1);
//     });
//   };

//   const resetPosition = () => {
//     Animated.spring(pos, {
//       toValue: { x: 0, y: 0 }
//     }).start();
//   };

//   const getCardStyle = () => {
//     const rotate = pos.x.interpolate({
//       inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
//       outputRange: ["-120deg", "0deg", "120deg"]
//     });
//     return {
//       ...pos.getLayout(),
//       transform: [{ rotate }]
//     };
//   };

//   const renderCards = () => {
//     if (deckIndex >= data.length) {
//       return renderNoMoreCards();
//     }

//     return data.map((item, cardIndex) => {
//       if (cardIndex < deckIndex) {
//         return null;
//       }

//       if (cardIndex === deckIndex) {
//         return (
//           <Animated.View
//             key={item.id}
//             style={[getCardStyle(), styles.card(cardIndex)]}
//             {...panResponder.panHandlers}
//           >
//             {renderCard(item)}
//           </Animated.View>
//         );
//       }
//       return (
//         <Animated.View
//           key={item.id}
//           style={[
//             styles.card(cardIndex),
//             { top: 10 * (cardIndex - deckIndex) }
//           ]}
//         >
//           {renderCard(item)}
//         </Animated.View>
//       );
//     });
//   };

//   return (
//     <Animated.View style={pos2.getLayout()}>{renderCards()}</Animated.View>
//   );
// };

// Deck.defaultProps = {
//   onSwipeRight: () => {},
//   onSwipeLeft: () => {}
// };

// const styles = {
//   card: cardIndex => ({
//     position: "absolute",
//     width: SCREEN_WIDTH,
//     zIndex: cardIndex * -1
//   })
// };

// export default Deck;
