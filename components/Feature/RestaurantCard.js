import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = (props) => {
  const {
    _id,
    image,
    name,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
    rating,
  } = props;

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurant", props)}
      className="bg-white shadow-xl   rounded-sm mx-2"
    >
      <Image
        source={{ uri: image }}
        className="h-36 w-64  object-cover rounded-sm"
      />
      {/* Details */}
      <View className="p-3">
        {/* Title */}
        <Text className="text-md pt-2 font-bold">{name}</Text>
        {/* Ratings */}
        <RatingDetails rating={rating} genre={genre} />
        {/* Address */}
        <View>
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-sm text-gray-400">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const RatingDetails = ({ rating, genre }) => {
  return (
    <View className="flex-row items-center ">
      <StarIcon color="green" opacity={0.4} />
      <Text className="text-sm text-gray-400">
        <Text className="text-green-500"> {rating}</Text> • {genre}
      </Text>
    </View>
  );
};
