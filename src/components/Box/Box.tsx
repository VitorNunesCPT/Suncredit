import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from "react-native";

import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  BackgroundColorProps,
  spacing,
  SpacingProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  ShadowProps,
  spacingShorthand,
  SpacingShorthandProps,
} from "@shopify/restyle";
import { Theme } from "../../theme/theme";

/**
 * Componente Box base usando Restyle
 * Útil para criar layouts e containers
 */
const Box = createBox<Theme>();

export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = RNTouchableOpacityProps &
  BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  ShadowProps<Theme>;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity
);

export default Box;
