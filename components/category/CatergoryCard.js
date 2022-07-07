import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CatergoryCard = (props) => {
  const { imageUrl, title } = props;
  return (
    <TouchableOpacity className="mr-2 relative ">
      <Image
        source={{
          uri: imageUrl,
        }}
        className="h-20 w-20 rounded-xl"
      />
      <Text className="absolute text-left bottom-1 left-1 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CatergoryCard;
