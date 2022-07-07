import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

import InfoCard from "../components/Restaurant components/InfoCard";
import DishesRow from "../components/Restaurant components/DishesRow/DishesRow";

const RestaurantScreen = () => {
  const { params: props } = useRoute();
  const navigation = useNavigation();
  // ! for header navigation
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View className="relative">
        <Image source={{ uri: props?.image }} className="w-full h-56  " />
        {/* BackButton */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="absolute top-14 bg-gray-100 rounded-full p-2 left-5"
        >
          <ArrowLeftIcon color="red" size={25} />
        </TouchableOpacity>
      </View>
      {/* Details */}
      <View className="bg-white p-2">
        <InfoCard
          name={props?.name}
          rating={props?.rating}
          genre={props?.genre}
          address={props?.address}
          Description={props?.short_description}
        />
      </View>

      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {/* Dish Row */}
        <DishesRow items={props?.dishes} />
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
