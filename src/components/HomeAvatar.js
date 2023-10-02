import { View, Text, Image } from "react-native";
import React from "react";

export default function HomeAvatar({ username, imgUrl }) {
  return (
    <View className="p-[30px] pb-[1px]">
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text
            style={{
              fontFamily: "PopinsRegular",
              fontWeight: "700",
              fontSize: 22,
            }}
            className=""
          >
            Lawyarr
          </Text>
          <Text
            style={{
              fontFamily: "PopinsRegular",
              fontWeight: "400",
              fontSize: 15,
              color: "#979797",
            }}
            className=""
          >
            Hi, {username}
          </Text>
        </View>
        <Image
          source={{
            uri: imgUrl,
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            marginTop: 20,
            marginBottom: 20,
          }}
        />
      </View>
    </View>
  );
}
