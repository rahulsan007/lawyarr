import { View, Text } from "react-native";
import React from "react";
import HomeAvatar from "../components/HomeAvatar";
import SearchBox from "../components/SearchBox";
import TitleWithView from "../components/TitleWithView";

export default function Home() {
  return (
    <View>
      <HomeAvatar
        username={"Rahul"}
        imgUrl={
          "https://lh3.googleusercontent.com/ogw/AKPQZvz00L2Fa0V8SqpMb1pbsfrmk2HOIensQ3CObMn2"
        }
      />
      <SearchBox SearchTxt={"Search Reports, Clients and More..."}></SearchBox>
      <TitleWithView title={"Popular Tools"} />
    </View>
  );
}
