import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { ArrowCircleLeftIcon } from "react-native-heroicons/outline";

const RestaurantScreen = () => {
  const { params: props } = useRoute();
  const navigation = useNavigation();
  // ! for header navigation
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  console.log("props", props);
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
      <View className="bg-white">
        <View className="px-t pt-4">
          <Text className="text-3xl font-bold">{props?.name}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
