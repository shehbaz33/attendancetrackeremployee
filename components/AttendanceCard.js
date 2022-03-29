import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import colors from "../assets/colors/colors";
import { Feather, Ionicons } from "@expo/vector-icons";

const AttendanceCard = ({ title, image }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AttendanceCard;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: colors.background,
    borderRadius: 10,
    margin: 12,
  },
  title: {
    fontSize: 12,
    fontFamily: "DMSans-Regular",
    color: "black",
    width: 70,
    marginLeft: 12,
    marginTop: -7,
  },
  image: {
    width: 30,
    height: 30,
  },
});
