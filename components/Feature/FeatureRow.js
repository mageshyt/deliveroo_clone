import { View, Text } from "react-native";
import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureRow = () => {
  return (
    <View>
      <FeatureCard
        title="Featured"
        description="Paid placements from our partners"
        id="1"
      />
      <FeatureCard
        title="Tasty Discount"
        description="Everyone's been enjoying these juicy discounts !"
        id="2"
      />
      <FeatureCard
        title="offers near you !"
        description="Why not support your local restaurant tonight"
        id="3"
      />
    </View>
  );
};

export default FeatureRow;
