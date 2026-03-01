import * as ImagePicker from "expo-image-picker";
import { JSX, useState, useEffect } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreatePost(): JSX.Element {
  const [caption, setCaption] = useState<string>("");
  const [image, setImage] = useState<ImageSourcePropType>();
  
  useEffect ( () => {
    if(!image){
      pickImage();
    }
  })

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage({ uri: result.assets[0].uri });
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/*   Header */}
      <SafeAreaView className="bg-white justify-center items-center pt-6">
        <Text className="font-bold"> Create Post </Text>
      </SafeAreaView>
      <View className="bg-white items-center flex-1">
        <Image source={image} className="w-96 aspect-[4/3] rounded-lg" />
        <Text onPress={pickImage} className="text-blue-500 font-semibold m-5">
          {" "}
          Change
        </Text>
        <TextInput
          placeholder="What is on your mind ?"
          className=" w-full p-3  "
          value={caption}
          onChangeText={(newValue: string) => setCaption(newValue)}
        />
      </View>
      <SafeAreaView className="w-full px-3 mb-auto">
        <Pressable className="bg-blue-500 w-full items-center rounded-md">
          <Text className="text-white font-semibold p-3">Share</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}
