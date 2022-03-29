import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import React, { useEffect } from "react";
import colors from "../assets/colors/colors";
import tw from "twrnc";
import AttendanceCard from "../components/AttendanceCard";
import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import { Ionicons } from "@expo/vector-icons";
import Building from "../assets/Building.png";
import Chart from "../assets/arrow.png";
import Crown from "../assets/Crown.png";
import Baby from "../assets/baby.png";
import Medical from "../assets/medical.png";
import Notepad from "../assets/notepad.png";
import Refresh from "../assets/Refresh.png";
import Boat from "../assets/boat.png";
import Emoticon from "../assets/Emoticon.png";
const Attendance = ({ navigation, route }) => {
  const data = [
    {
      id: 7,
      title: "Work From Home",
      image: Building,
    },
    {
      id: 8,
      title: "Work From Office",
      image: Chart,
    },
    {
      id: 2,
      title: "Optional Holiday",
      image: Refresh,
    },
    {
      id: 6,
      title: "Sick Leave",
      image: Medical,
    },
    {
      id: 3,
      title: "Welness Leave",
      image: Emoticon,
    },
    {
      id: 1,
      title: "Earned Leave",
      image: Crown,
    },
    {
      id: 4,
      title: "Marriage Leave",
      image: Baby,
    },
    {
      id: 5,
      title: "Sabbatial Leave",
      image: Boat,
    },
    {
      id: 9,
      title: "Present",
      image: Notepad,
    },
  ];

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }

    return data;
  };

  const numColumns = 4;

  const renderItem = ({ item }) => (
    <AttendanceCard title={item.title} image={item.image} key={item.id} />
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
        <View style={[tw`border-b-4 border-[#D46200]`, { marginLeft: 20 }]}>
          <Text
            style={[tw`text-3xl text-black`, { fontFamily: "DMSans-Bold" }]}
          >
            Attendance
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
            Select Your
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
            Status
          </Text>
          <ScrollView>
            <View style={{ marginLeft: 20, marginTop: 10 }}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
              />
            </View>
            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 15 }}>
              <TouchableOpacity style={[styles.button]}>
                <Text style={styles.text}>Add</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Attendance;

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
    elevation: 2,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: colors.button,
  },
});
