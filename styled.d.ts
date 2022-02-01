import "styled-components";

import defaultTheme from "./src/config/theme";

export type Theme = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
