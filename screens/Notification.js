import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import Attendance from "../screens/Attendance";
import Status from "../screens/Status";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logoutSuccess } from "../redux/userSlice";
import colors from "../assets/colors/colors";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import HomeCard from "../components/HomeCard";
import HomePills from "../components/HomePills";

const Notification = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text
            style={[
              tw`text-right mr-6 mt-6 text-2xl`,
              { fontFamily: "DMSans-Bold" },
            ]}
          >
            John Doe.
          </Text>
          <Text
            style={[
              tw`text-right mr-6 text-sm`,
              { fontFamily: "DMSans-Regular", color: colors.accents },
            ]}
          >
            Great Place to Work
          </Text>
        </View>
        <View style={[tw`ml-6`]}>
          <Text style={styles.border}>Notification</Text>
        </View>
        <View style={[tw`items-end mr-6`]}>
          <Image
            style={{ width: 192, height: 179 }}
            source={require("../assets/Group.png")}
          />
        </View>
        <ScrollView style={{ height: 500, marginTop: -70 }}>
       
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: StatusBar.currentHeight,
  },
  image: {
    width: 100,
    height: 100,
  },
  border: {
    borderBottomColor: colors.accents,
    borderBottomWidth: 4,
    width: 140,
    fontSize: 24,
    fontFamily: "DMSans-Bold",
    marginTop: 30,
  },
  image: {
    width: 100,
    height: 100,
  },
});
