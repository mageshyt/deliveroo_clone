import { SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header/Header";
import Category from "../components/category/Category";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* TODO Header  */}
      <Header />
      {/* Body -> categories */}
      <ScrollView className="bg-gray-100">
        <Category />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
