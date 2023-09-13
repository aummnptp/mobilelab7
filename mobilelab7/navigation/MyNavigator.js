import React from "react";
import { View ,Text} from "react-native";
// import library ที่จำเป็น
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Ionicons } from "@expo/vector-icons";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// import screen ที่เกี่ยวข้อง
// import CategoriesScreen from "../screens/CategoriesScreen";
import Spring from "../components/Spring"
import Parallel from "../components/Parallel"
import Sequence from "../components/Sequence"
// สร้าง navigator ตามโจทย์กำหนด

const MainNavigator = createBottomTabNavigator();
// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น


// อาจกำหนด Navigator เพิ่มได้

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "gray",
        }}
      >
        <MainNavigator.Screen name="Spring" component={Spring} />
        <MainNavigator.Screen name="Sequence" component={Sequence} />
        <MainNavigator.Screen name="Parallel" component={Parallel} />
         
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
