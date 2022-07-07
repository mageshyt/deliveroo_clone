import { View, Text, ScrollView } from "react-native";
import React from "react";
import CatergoryCard from "./CatergoryCard";
import { CardData } from "../../lib/data";

const Category = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {/* Card */}
      {CardData.map((item, idx) => (
        <CatergoryCard key={idx} imageUrl={item.image} title={item.title} />
      ))}
    </ScrollView>
  );
};

export default Category;
