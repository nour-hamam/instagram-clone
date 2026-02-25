import React from "react";
import { IconProps } from "./Icon";

export interface TabIconProps {
  focused: boolean;
  FilledIcon: React.ComponentType<IconProps>;
  OutlineIcon: React.ComponentType<IconProps>;
  size?: number;
  isProfile?: boolean;
}
