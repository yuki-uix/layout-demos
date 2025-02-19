import { ColorPalette } from "@/app/common/styles/color-palette";
import { CornerRadius, Shadows } from "@/app/common/styles/style-setting";

export const WoopBtnStyles = {
  baseStyles: {
    border: "none",
    textTransform: "none",
    textAlign: "center",
    borderRadius: CornerRadius.Buttons.style,
    fontWeight: 600,
    "&:focus": {
      boxShadow: Shadows.FocusBtn.style,
    },
    "&:disabled": {
      bgcolor: ColorPalette.Greyscale.disabledBg,
      color: ColorPalette.Greyscale.disabledText,
    },
  },
  typeStyles: {
    Primary: {
      bgcolor: ColorPalette.AccentViolet.accent1Primary,
      variant: "contained",
      "&:hover": {
        bgcolor: ColorPalette.AccentViolet.hoverState,
      },
      "&:active": {
        bgcolor: ColorPalette.AccentViolet.clickState,
      },
    },
    Secondary: {
      bgcolor: ColorPalette.AccentViolet.accent1Quaternary,
      color: ColorPalette.AccentViolet.accent1Primary,
      variant: "outlined",
      "&:hover": {
        bgcolor: ColorPalette.AccentViolet.hoverState,
        color: ColorPalette.Background.bgLight,
      },
      "&:active": {
        bgcolor: ColorPalette.AccentViolet.clickState,
        color: ColorPalette.Background.bgLight,
      },
    },
    Tertiary: {
      bgcolor: ColorPalette.Background.bgLight,
      color: ColorPalette.AccentViolet.accent1Primary,
      variant: "text",
      "&:hover": {
        bgcolor: ColorPalette.Background.bgLight,
        color: ColorPalette.AccentViolet.hoverState,
      },
      "&:active": {
        bgcolor: ColorPalette.Background.bgLight,
        color: ColorPalette.AccentViolet.clickState,
      },
    },
  },
  sizeStyles: {
    L: {
      py: "12px",
      px: "32px",
      fontSize: 18,
      lineHeight: "24px",
    },
    M: {
      py: "10px",
      px: "32px",
      fontSize: 16,
      lineHeight: "24px",
    },
    S: {
      py: "8px",
      px: "24px",
      fontSize: 14,
      lineHeight: "16px",
    },
    XS: {
      py: "6px",
      px: "20px",
      fontSize: 14,
      lineHeight: "16px",
    },
  },
};
