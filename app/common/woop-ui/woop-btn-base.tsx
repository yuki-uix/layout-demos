import { Button, ButtonProps, SxProps } from "@mui/material";
import React from "react";
import { WoopBtnStyles } from "./styles";

export enum BtnType {
  Filled = "Filled",
  Outlined = "Outlined",
  Text = "Text",
}
export enum BtnSize {
  L = "L",
  M = "M",
  S = "S",
  XS = "XS",
}

export function WoopBtnBase({
  children,
  type = BtnType.Filled,
  size = BtnSize.L,
  disabled = false,
  startIcon,
  endIcon,
  onFocus,
  onBlur,
  onClick,
  sx,
  ...props
}: {
  children: React.ReactNode;
  type?: BtnType;
  size?: BtnSize;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onClick?: () => void;
  sx?: SxProps;
  props?: ButtonProps;
}) {
  WoopBtnStyles.userDefinedStyles = { ...sx };
  return (
    <Button
      disableRipple
      disabled={disabled}
      sx={{
        ...WoopBtnStyles.baseStyles,
        ...WoopBtnStyles.typeStyles[type],
        ...WoopBtnStyles.sizeStyles[size],
        "&:hover": {
          ...WoopBtnStyles.typeStyles[type]["&:hover"],
        },
        "&:active": {
          ...WoopBtnStyles.typeStyles[type]["&:active"],
        },
        "& .MuiSvgIcon-root": {
          ...WoopBtnStyles.iconBtnSizeStyles[size],
        },
        ...WoopBtnStyles.userDefinedStyles,
      }}
      variant={
        WoopBtnStyles.typeStyles[type].variant as
          | "contained"
          | "outlined"
          | "text"
      }
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
      {...props}
    >
      {startIcon && <span style={{ marginRight: "8px" }}>{startIcon}</span>}
      {children}
      {endIcon && <span style={{ marginLeft: "8px" }}>{endIcon}</span>}
    </Button>
  );
}
