import { IconProps } from "@/src/types/Icon";
import React from "react";
import Svg, { Path } from "react-native-svg";

interface GenericIconProps extends IconProps {
  d: string;
  fill?: string;
}

const Icon = ({ size = 24, color = "black", d, fill }: GenericIconProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill ?? "none"}
    stroke={ fill && fill !== "none" ? "none":color }
    strokeWidth="1"
  >
    <Path d={d}></Path>
  </Svg>
);

const paths = {
  Home:
    "m21.762 8.786-7-6.68a3.994 3.994 0 0 0-5.524 0l-7 6.681A4.017 4.017 0 0 0 1 11.68V19c0 2.206 1.794 4 4 4h3.005a1 1 0 0 0 1-1v-7.003a2.997 2.997 0 0 1 5.994 0V22a1 1 0 0 0 1 1H19c2.206 0 4-1.794 4-4v-7.32a4.02 4.02 0 0 0-1.238-2.894Z",
  Reels:
    "M22.942 7.464c-.062-1.36-.306-2.143-.511-2.671a5.366 5.366 0 0 0-1.272-1.952 5.364 5.364 0 0 0-1.951-1.27c-.53-.207-1.312-.45-2.673-.513-1.2-.054-1.557-.066-4.535-.066s-3.336.012-4.536.066c-1.36.062-2.143.306-2.672.511-.769.3-1.371.692-1.951 1.272s-.973 1.182-1.27 1.951c-.207.53-.45 1.312-.513 2.673C1.004 8.665.992 9.022.992 12s.012 3.336.066 4.536c.062 1.36.306 2.143.511 2.671.298.77.69 1.373 1.272 1.952.58.581 1.182.974 1.951 1.27.53.207 1.311.45 2.673.513 1.199.054 1.557.066 4.535.066s3.336-.012 4.536-.066c1.36-.062 2.143-.306 2.671-.511a5.368 5.368 0 0 0 1.953-1.273c.58-.58.972-1.181 1.27-1.95.206-.53.45-1.312.512-2.673.054-1.2.066-1.557.066-4.535s-.012-3.336-.066-4.536Zm-7.085 6.055-5.25 3c-1.167.667-2.619-.175-2.619-1.519V9c0-1.344 1.452-2.186 2.619-1.52l5.25 3c1.175.672 1.175 2.368 0 3.04Z",
  Inbox:
    "M22.513 3.576C21.826 2.552 20.617 2 19.384 2H4.621c-1.474 0-2.878.818-3.46 2.173-.6 1.398-.297 2.935.784 3.997l3.359 3.295a1 1 0 0 0 1.195.156l8.522-4.849a1 1 0 1 1 .988 1.738l-8.526 4.851a1 1 0 0 0-.477 1.104l1.218 5.038c.343 1.418 1.487 2.534 2.927 2.766.208.034.412.051.616.051 1.26 0 2.401-.644 3.066-1.763l7.796-13.118a3.572 3.572 0 0 0-.116-3.863Z",
  Search:
  "M17.545 15.045a8.5 8.5 0 1 0-2.5 2.5l4.243 4.243a1 1 0 0 0 1.414-1.414l-4.243-4.243ZM10.5 16a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Z",
};


// Helper function to create filled and outline icon variants
const createIcon =(d:string) => (
  {
    Outline: (props: IconProps) => <Icon d={d} {...props} />,
    Filled: (props: IconProps) => <Icon d={d} fill="black" {...props} />,
  }
);

export const Home = createIcon(paths.Home);
export const Reels = createIcon(paths.Reels);
export const Inbox = createIcon(paths.Inbox);
export const Search = createIcon(paths.Search);