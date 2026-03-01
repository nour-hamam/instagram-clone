import posts from "@/assets/data/posts.json";
import "@/global.css";
import PostListItem from "@/src/components/postListItems";
import { Post } from "@/src/types/Post";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { JSX } from "react";
import { FlatList, Image, ImageSourcePropType, View } from "react-native";
import { useRouter } from "expo-router";


const Logo: ImageSourcePropType = require("../../../assets/images/png-logo.png");

export default function Feed(): JSX.Element {
  const router = useRouter(); 
  return (
    <View className="flex-1">
      {/*Header*/}
      <View className="flex-row justify-between items-center px-safe-or-4 pt-12 bg-white">
        <Ionicons name="add-outline" size={24} color="black" onPress= {() => router.push('/createPost')} />
        <Image source={Logo} className="w-24 h-8 resize-contain" />
        <EvilIcons name="heart" size={34} color="black" />
      </View>

      <FlatList<Post>
        className="bg-white"
        data={posts}
        renderItem={({ item }: { item: Post }) => <PostListItem post={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
