import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import SvgUri from "react-native-svg-uri";

export default function SearchBox({ SearchTxt }) {
  useEffect(() => {}, []);
  return (
    <View className="p-5">
      <View className=" bg-[#d0d0d06d] p-[15px] rounded-[12px] flex flex-row items-center">
        <SvgUri
          width="18"
          height="18"
          source={require("../../assets/icons/Search.svg")}
          style={{ marginRight: 10 }}
        />
        <Text
          style={{
            fontFamily: "PopinsRegular",
            color: "#979797",
            fontSize: 13,
          }}
        >
          {SearchTxt}
        </Text>
      </View>
    </View>
  );
}
