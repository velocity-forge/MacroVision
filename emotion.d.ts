import "@emotion/react";
import { BaseTheme } from "./source/config/theme";

interface BaseThemeType extends BaseTheme {}

declare module "@emotion/react" {
  export interface Theme extends BaseThemeType {}
}
