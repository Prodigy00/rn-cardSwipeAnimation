// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { Card, Button } from "react-native-elements";
// import Deck from "./src/Deck";

// const DATA = [
//   {
//     id: 1,
//     text: "Card #1",
//     uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
//   },
//   {
//     id: 2,
//     text: "Card #2",
//     uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
//   },
//   {
//     id: 3,
//     text: "Card #3",
//     uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
//   },
//   {
//     id: 4,
//     text: "Card #4",
//     uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
//   },
//   {
//     id: 5,
//     text: "Card #5",
//     uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
//   },
//   {
//     id: 6,
//     text: "Card #6",
//     uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
//   },
//   {
//     id: 7,
//     text: "Card #7",
//     uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
//   },
//   {
//     id: 8,
//     text: "Card #8",
//     uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
//   }
// ];

// export default function App() {
//   const renderCard = item => {
//     return (
//       <Card title={item.text} image={‌{ uri: item.uri }} key={item.id}>
//         <Text style={‌{ marginBottom: 10 }}>
//           I can customize the Card further.
//         </Text>
//         <Button
//           icon={‌{ name: "code" }}
//           backgroundColor="#03A9F4"
//           title="View Now!"
//         />
//       </Card>
//     );
//   };

//   const renderNoMoreCards = () => {
//     return (
//       <Card title="All Done!">
//         <Text style={‌{ marginBottom: 10 }}>There's no more content here!</Text>
//         <Button backgroundColor="#03A9F4" title="Get More!" />
//       </Card>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Deck
//         data={DATA}
//         renderCard={renderCard}
//         renderNoMoreCards={renderNoMoreCards}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff"
//   }
// });
