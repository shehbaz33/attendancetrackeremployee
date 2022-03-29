import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import LeaveCard from "../components/LeaveCard";
import Constants from "expo-constants";
import React, { useEffect } from "react";
import colors from "../assets/colors/colors";
import tw from "twrnc";
import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import { Ionicons } from "@expo/vector-icons";

const Leave = ({ navigation, route }) => {
  const data = [
    { id: 1, title: "Annual Leave", subtitle: "Annual Leave", leaves: "42" },
    {
      id: 2,
      title: "Sick Leave",
      subtitle: "Sick Leave",
      leaves: "18",
    },
    {
      id: 3,
      title: "Casual Leave",
      subtitle: "Casual Leave",
      leaves: "22",
    },
    {
      id: 4,
      title: "Maternity Leave",
      subtitle: "Maternity Leave",
      leaves: "UL",
    },
  ];

  const renderItem = ({ item }) => (
    <LeaveCard
      title={item.title}
      subtitle={item.subtitle}
      leaves={item.leaves}
      key={item.id}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable>
          <View style={styles.square}>
            <Ionicons name="chevron-back" size={22} />
          </View>
        </Pressable>
        <View style={styles.headerRight}>
          <Text
            style={[tw`text-3xl text-black`, { fontFamily: "DMSans-Bold" }]}
          >
            John Doe
          </Text>
          <Text style={styles.textStyle}>Great Place to Work.</Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          marginRight: 30,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={[
            tw`border-b-4 border-[#D46200]`,
            { marginLeft: 20, marginTop: -100 },
          ]}
        >
          <Text
            style={[tw`text-3xl text-black`, { fontFamily: "DMSans-Bold" }]}
          >
            Leave Balance
          </Text>
        </View>
        <Image
          style={{ width: 130, height: 180 }}
          source={require("../assets/attendance.png")}
        />
      </View>
      <View style={styles.bodyHeight}>
        <View style={tw`mt-4`}>
          <Text
            style={{
              color: colors.textSecondary,
              marginLeft: 30,
              fontSize: 14,
              fontFamily: "DMSans-Regular",
            }}
          >
            Check Your Available
          </Text>
          <Text
            style={{
              color: colors.textPrimary,
              marginLeft: 30,
              fontSize: 24,
              fontFamily: "DMSans-Bold",
              marginTop: -5,
            }}
          >
            Leaves
          </Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Leave;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: Constants.statusBarHeight,
  },
  textStyle: {
    color: colors.accents,
    fontSize: 14,
    marginRight: 20,
    fontFamily: "DMSans-Regular",
    marginTop: -5,
    marginBottom: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 20,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "DMSans-Regular",
  },
  square: {
    height: 40,
    marginRight: 15,
    width: 40,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 2,
  },
  bodyHeight: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "white",
    borderRadius: 25,
    elevation: 0.5,
  },

  textBackground: {
    marginLeft: 30,
    backgroundColor: colors.background,
    marginTop: 20,
    marginRight: 30,
    padding: 10,
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: colors.accents,
  },
  header: {
    color: colors.accents,
    fontSize: 14,
    fontFamily: "DMSans-Regular",
  },
  details: {
    fontSize: 18,
    fontFamily: "DMSans-Regular",
  },
  totalContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
