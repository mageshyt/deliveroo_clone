import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";

const Dishes = ({ item: { name, price, short_description, image, id } }) => {
  const [pressed, setPressed] = React.useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setPressed(!pressed)}
        className={`bg-white px-4 border border-gray-300 ${
          pressed && "border-b-0"
        } `}
      >
        <View className="flex-row items-center mb-2 space-x-1">
          <View className="  flex-1 pr-2  space-y-1">
            <Text className="text-lg font-semibold">{name}</Text>
            <Text className="text-sm  text-gray-400">{short_description}</Text>
            {/* Price */}
            <Text>
              <Currency quantity={price} currency="INR" />
            </Text>
          </View>

          <View>
            {/* image */}
            <Image
              source={{ uri: image }}
              className="h-[60px] w-[60px] rounded-sm pl"
            />
          </View>
        </View>
      </TouchableOpacity>
      {pressed && (
        <View className="bg-white pt-3 px-2  ">
          <View className="flex-row items-center  space-x-2 pb-4">
            {/* decrement */}
            <TouchableOpacity>
              <MinusCircleIcon color="#00CCBB" size={30} />
            </TouchableOpacity>
            {/* quantity */}
            <Text>{0}</Text>
            {/* increase */}
            <TouchableOpacity>
              <PlusCircleIcon color="#00CCBB" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default Dishes;
