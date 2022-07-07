import { View, Text } from "react-native";
import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureRow = ({ featured }) => {
  return (
    <View>
      {featured.map((feature, index) => {
        return (
          <FeatureCard
            key={index}
            title={feature.name}
            id={feature._id}
            description={feature.short_description}
            restaurants={feature.restaurants}
          />
        );
      })}
    </View>
  );
};

export default FeatureRow;
