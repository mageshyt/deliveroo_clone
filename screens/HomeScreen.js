import { SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header/Header";
import Category from "../components/category/Category";
import FeatureRow from "../components/Feature/FeatureRow";
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
        {/* items - categories */}
        <Category />
        {/* Feature row */}
        <FeatureRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
