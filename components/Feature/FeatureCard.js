import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeatureCard = ({ title, description, id, restaurants }) => {
  return (
    <View>
      <View className="flex-row px-4  items-center justify-between mt-5">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" className="text-gray-600" />
      </View>

      <Text className="text-sm px-4  text-gray-500">{description}</Text>
      {/* RestaurantCard */}
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4 pb-1 "
      >
        {restaurants?.map((restaurant, index) => {
          return <RestaurantCard key={index} {...restaurant} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeatureCard;
