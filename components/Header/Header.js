import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";

const Header = () => {
  return (
    <View>
      <View className="flex-row pb-4 items-center mx-4 space-x-3 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 p-4 rounded-full   w-7"
        />
        <View className=" flex-1">
          <Text className="text-sm font-bold text-gray-400">Delivery Now</Text>
          <Text className="font-bold  text-xl">
            Current Location
            <ChevronDownIcon name="chevron-down" color="#00CCBB" />
          </Text>
        </View>
        {/* User */}
        <UserIcon name="user" color="#00CCBB" size={30} />
      </View>
      {/* Search */}
      <View className="flex-row items-center px-3 pb-3 mx-4 space-x-3">
        <View className="p-3 flex-row flex-1 space-x-2 rounded-md bg-gray-200">
          <SearchIcon color="gray" />
          <TextInput
            keyboardType="default"
            placeholder="Restaurants and cuisines"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
    </View>
  );
};

export default Header;
