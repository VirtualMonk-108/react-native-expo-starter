import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header showBackButton={true}/>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </>

  );
}

export default Home;