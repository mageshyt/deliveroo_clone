import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeatureCard = ({ title, description, id }) => {
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
        className="pt-5 "
      >
        <RestaurantCard
          id={id}
          imgUrl="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Tikka-Masala-min-600x600.jpg"
          name="Restaurant 1"
          genre="Italian"
          address="123 Main St"
          short_description="This is a short description"
          dishes="Dishes: 1, 2, 3"
          long={-122.4}
          lat={37.7}
          rating={4}
        />
        <RestaurantCard
          id={id}
          imgUrl="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Tikka-Masala-min-600x600.jpg"
          name="Restaurant 1"
          genre="Italian"
          address="123 Main St"
          short_description="This is a short description"
          dishes="Dishes: 1, 2, 3"
          long={-122.4}
          lat={37.7}
          rating={4}
        />
        <RestaurantCard
          id={id}
          imgUrl="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Tikka-Masala-min-600x600.jpg"
          name="Restaurant 1"
          genre="Italian"
          address="123 Main St"
          short_description="This is a short description"
          dishes="Dishes: 1, 2, 3"
          long={-122.4}
          lat={37.7}
          rating={4}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureCard;
