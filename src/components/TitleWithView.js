import { View, Text } from "react-native";
import React, { useEffect } from "react";
import SvgUri from "react-native-svg-uri";

export default function TitleWithView({ title }) {
  return (
    <View className="p-4 flex flex-row items-center justify-between">
      <Text
        style={{
          fontFamily: "PopinsRegular",
          fontWeight: "700",
          fontSize: 20,
        }}
        className=""
      >
        {title}
      </Text>
      <Text>View All</Text>
    </View>
  );
}
