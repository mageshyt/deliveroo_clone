import { View, Text } from "react-native";
import React from "react";
import Dishes from "./Dishes";

const DishesRow = ({ items }) => {
  return (
    <View className="p-2">
      {items.map((item, index) => {
        return <Dishes key={index} item={item} />;
      })}
    </View>
  );
};

export default DishesRow;
