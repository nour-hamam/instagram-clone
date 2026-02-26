import { Post } from "@/src/types/Post";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

interface PostListItemProps {
  post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <View className="bg-white">
      {/* Header */}
      <View className="p-3 flex-row items-center gap-2">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-10 aspect-square rounded-full "
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      <Image
        source={{ uri: post.image_url }}
        className="w-full aspect-square "
      />
      {/* Icons */}
      <View className="flex-row gap-3 p-3">
        <AntDesign name="heart" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />
        <Feather name="bookmark" size={20} className="ml-auto" />
      </View>
      <Text className="px-3 pb-0">{post.caption}</Text>
    </View>
  );
}
