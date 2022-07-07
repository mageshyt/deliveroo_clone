import { SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header/Header";
import Category from "../components/category/Category";
import FeatureRow from "../components/Feature/FeatureRow";
import { fetchFeatured, fetchRestaurants } from "../lib/restaurant.sanity";
const HomeScreen = () => {
  const navigation = useNavigation();
  // ! for header navigation
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const [featured, setFeatured] = React.useState([]);
  useEffect(() => {
    const fetch = async () => {
      const result = await fetchFeatured();
      setFeatured(result);
    };
    fetch();
  }, []);
  console.log("len", featured.length);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* TODO Header  */}
      <Header />
      {/* Body -> categories */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        className="bg-gray-100"
      >
        {/* items - categories */}
        <Category />
        {/* Feature row */}

        <FeatureRow featured={featured} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
