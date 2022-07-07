import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  ArrowCircleLeftIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { ChevronRightIcon, StarIcon } from "react-native-heroicons/solid";
const InfoCard = ({ rating, genre, address, name, Description }) => {
  return (
    <View className="px-t pt-4">
      {/* Title */}
      <Text className="text-3xl font-bold">{name}</Text>
      {/* Rating Address */}
      <View className="space-x-4 flex-row">
        <StarIcon color="green" opacity={0.4} />
        <Text className="text-sm text-gray-400">
          <Text className="text-green-500"> {rating}</Text> • {genre}
        </Text>
        <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
        <Text className="text-sm text-gray-400">Nearby • {address}</Text>
      </View>
      {/* Description */}
      <Text className="text-sm text-gray-500 mt-2  font-semibold">
        {Description}
      </Text>

      <TouchableOpacity className="flex-row space-x-2 items-center border-t p-2 mt-2 border-gray-300">
        <QuestionMarkCircleIcon color="gray" opacity={0.4} size={25} />
        <Text className="text-md font-bold flex-1">Have a food allergy ?</Text>
        <ChevronRightIcon color="#00CCBB" />
      </TouchableOpacity>
    </View>
  );
};

export default InfoCard;
