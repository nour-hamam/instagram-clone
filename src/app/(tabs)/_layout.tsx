import { Home, Inbox, Reels, Search } from "@/src/components/Icon";
import { TabIconProps } from "@/src/types/TabIcon";
import { Tabs } from "expo-router";
import React, { JSX } from "react";
import { Image, View, ImageSourcePropType } from "react-native";

const TabIcon: React.FC<TabIconProps> = ({
  focused,
  FilledIcon,
  OutlineIcon,
  size,
}) => {
  return focused ? <FilledIcon size={size} /> : <OutlineIcon size={size} />;
};

const tabs = [
  { name: "feed", FilledIcon: Home.Filled, OutlineIcon: Home.Outline },
  { name: "reels", FilledIcon: Reels.Filled, OutlineIcon: Reels.Outline },
  { name: "inbox", FilledIcon: Inbox.Filled, OutlineIcon: Inbox.Outline },
  { name: "search", FilledIcon: Search.Filled, OutlineIcon: Search.Outline },
];

const profileImg: ImageSourcePropType = require("../../../assets/images/temporary-profile.jpg");

export default function TabsLayout(): JSX.Element {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            tabBarIcon: ({ focused, size = 24 }) => {
              return (
                <TabIcon
                  focused={focused}
                  FilledIcon={tab.FilledIcon}
                  OutlineIcon={tab.OutlineIcon}
                  size={size}
                />
              );
            },
          }}
        />
      ))}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({focused, size = 24}) => {
            return (
              <Image
                source={profileImg}
                style={{
                  width: size,
                  height: size,
                  borderRadius: size / 2,
                  borderWidth: focused ? 2 : 0,
                  borderColor: "black",
                }}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
