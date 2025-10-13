import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

const DAListHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.seeMore}>See more</Text>
    </View>
  );
};

export default DAListHeader;
