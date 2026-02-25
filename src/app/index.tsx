import { Redirect } from "expo-router";
import {JSX} from "react";

export default function Home():JSX.Element{
  return <Redirect href="/(tabs)/feed" />;
}
