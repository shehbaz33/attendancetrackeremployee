import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import colors from "../assets/colors/colors";

const LeaveCard = ({ title, subtitle, leaves }) => {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: colors.background,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        justifyContent: "center",
        borderLeftWidth: 3,
        borderLeftColor: colors.accents,
      }}
    >
      <View
        style={[
          tw`m-0`,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <View style={{ width: 180, marginLeft: 20 }}>
          <Text style={styles.textDetails}>{title}</Text>
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            {subtitle}
          </Text>
        </View>
        <Pressable>
          <View style={styles.rounded}>
            <Text style={styles.leaves}>{leaves}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default LeaveCard;

const styles = StyleSheet.create({
  textDetails: {
    fontSize: 18,
    fontFamily: "DMSans-Regular",
    color: "black",
  },
  rounded: {
    height: 40,
    marginRight: 20,
    width: 40,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  leaves: {
    fontSize: 20,
    fontFamily: "DMSans-Regular",
      color: colors.accents,
    fontWeight: "bold",
  },
});
