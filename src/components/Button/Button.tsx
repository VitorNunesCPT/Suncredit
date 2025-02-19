import React from "react";
import { ActivityIndicator } from "react-native";
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";
import { Text } from "../Text/Text";
import { Theme } from "../../theme/theme";

export type ButtonProps = TouchableOpacityBoxProps & {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
};

const buttonSize = {
  small: {
    paddingHorizontal: "s12" as const,
    paddingVertical: "s6" as const,
    preset: "paragraphSmall" as const,
  },
  medium: {
    paddingHorizontal: "s16" as const,
    paddingVertical: "s12" as const,
    preset: "paragraphMedium" as const,
  },
  large: {
    paddingHorizontal: "s20" as const,
    paddingVertical: "s16" as const,
    preset: "paragraphLarge" as const,
  },
};

type ButtonVariant = {
  background: keyof Theme["colors"];
  text: keyof Theme["colors"];
  border?: {
    width: number;
    color: keyof Theme["colors"];
  };
};

const buttonVariants: Record<
  NonNullable<ButtonProps["variant"]>,
  ButtonVariant
> = {
  primary: {
    background: "primary",
    text: "mainBackground",
  },
  secondary: {
    background: "secondary",
    text: "mainBackground",
  },
  outline: {
    background: "mainBackground",
    text: "primary",
    border: {
      width: 2,
      color: "primary",
    },
  },
};

export function Button({
  title,
  loading,
  disabled,
  variant = "primary",
  size = "medium",
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const variantProps = buttonVariants[variant];
  const sizeProps = buttonSize[size];

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      backgroundColor={variantProps.background}
      borderRadius="s8"
      paddingHorizontal={sizeProps.paddingHorizontal}
      paddingVertical={sizeProps.paddingVertical}
      style={{ opacity: disabled ? 0.5 : 1 }}
      borderWidth={variantProps.border?.width}
      borderColor={variantProps.border?.color}
      {...touchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator color={variantProps.text} />
      ) : (
        <Text
          preset={sizeProps.preset}
          bold
          color={variantProps.text}
          textAlign="center"
        >
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
