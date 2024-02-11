import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

import Header from "../../components/Header";

const Activity = () => {
  return (
    <>
      <Header showBackButton={true}/>
      <View style={styles.container}>
        <Text>Activity</Text>
      </View>
    </>
  );
}

export default Activity;