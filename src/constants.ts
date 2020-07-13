import { Dimensions } from "react-native";
const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("screen");

const COLORS = {
  RED: "RGB(255,0,0)",
  ORANGE: "RGB(255,127,0)",
  YELLOW: "RGB(255,255,0)",
  GREEN: "RGB(0,255,0)",
  BLUE: "RGB(0,0,255)",
  PURPLE: "RGB(75,0,130)",
  VIOLET: "RGB(143,0,255)",
};

export default {
  MIN_SPAWN_SIZE: 50,
  MAX_SWAWN_SIZE: 150,
  MAX_END_SIZE: 250,
  SCREEN_WIDTH: ScreenWidth,
  SCREEN_HEIGHT: ScreenHeight,
  COLORS,
  COLOR_ARRAY: [...Object.values(COLORS)],
};
