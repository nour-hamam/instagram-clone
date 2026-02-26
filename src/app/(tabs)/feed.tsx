import "@/global.css";
import { JSX } from "react";
import posts from "@/assets/data/posts.json";
import PostListItem from "@/src/components/postListItems";
import { FlatList } from "react-native";
import {Post} from "@/src/types/Post";

export default function Feed(): JSX.Element {
  return (
    <FlatList<Post>
      data = {posts}
      renderItem = { ({item}) => <PostListItem post={item} /> } 
      contentContainerStyle = {{gap:10}}
      showsVerticalScrollIndicator = {false}
      
    /> 
  );
}
