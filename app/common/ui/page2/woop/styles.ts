import { ColorPalette } from "@/app/common/styles/color-palette";
import { CornerRadius, Shadows } from "@/app/common/styles/style-setting";
import { Theme } from "@mui/material";
import { ChipType } from "./woop-chip";

const sizeAlign = {
  L: 24,
  M: 24,
  S: 16,
  XS: 16,
};

const WoopBtnStyles = {
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
      lineHeight: `${sizeAlign.L}px`,
    },
    M: {
      py: "10px",
      px: "32px",
      fontSize: 16,
      lineHeight: `${sizeAlign.M}px`,
    },
    S: {
      py: "8px",
      px: "24px",
      fontSize: 14,
      lineHeight: `${sizeAlign.S}px`,
    },
    XS: {
      py: "6px",
      px: "20px",
      fontSize: 14,
      lineHeight: `${sizeAlign.XS}px`,
    },
  },
  iconBtnSizeStyles: {
    L: { fontSize: sizeAlign.L },
    M: { fontSize: sizeAlign.M },
    S: { fontSize: sizeAlign.S },
    XS: { fontSize: sizeAlign.XS },
  },
};

const WoopChipStyles = {
  baseStyles: {
    px: 1.5,
    py: 1,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "18px",
    borderRadius: 2,
    "& .MuiSvgIcon-root": {
      fontSize: 16,
    },
    "&:focus": {
      boxShadow: Shadows.FocusBtn.style,
    },
  },
  typeStyles: {
    [ChipType.Primary]: {
      bgcolor: (theme: Theme) => theme.palette.primary.light,
      color: (theme: Theme) => theme.palette.primary.main,
      border: (theme: Theme) => `1px solid ${theme.palette.primary.light}`,
      "&:hover": {
        color: (theme: Theme) => theme.palette.violet.main,
        bgcolor: (theme: Theme) => theme.palette.primary.light,
      },
      "&:active": {
        color: (theme: Theme) => theme.palette.violet.dark,
      },
      isClose: {
        bgcolor: (theme: Theme) => theme.palette.primary.main,
        color: (theme: Theme) => theme.palette.primary.contrastText,
        border: (theme: Theme) => `1px solid ${theme.palette.primary.main}`,
        "&:hover": {
          bgcolor: (theme: Theme) => theme.palette.error.dark,
          color: (theme: Theme) => theme.palette.error.contrastText,
          border: (theme: Theme) => `1px solid ${theme.palette.error.main}`,
        },
        "&:active": {
          bgcolor: (theme: Theme) => theme.palette.error.main,
          color: (theme: Theme) => theme.palette.error.contrastText,
          border: (theme: Theme) => `1px solid ${theme.palette.error.main}`,
        },
      },
    },
    [ChipType.Secondary]: {
      bgcolor: (theme: Theme) => theme.palette.background.default,
      color: (theme: Theme) => theme.palette.text.secondary,
      border: (theme: Theme) => `1px solid ${theme.palette.divider}`,
      "&:hover": {
        bgcolor: (theme: Theme) => theme.palette.background.default,
        color: (theme: Theme) => theme.palette.violet.main,
        border: (theme: Theme) => `1px solid ${theme.palette.violet.main}`,
      },
      "&:active": {
        bgcolor: (theme: Theme) => theme.palette.background.default,
        color: (theme: Theme) => theme.palette.violet.main,
        border: (theme: Theme) => `1px solid ${theme.palette.violet.dark}`,
      },
      isClose: {
        color: (theme: Theme) => theme.palette.text.secondary,
        border: (theme: Theme) => `1px solid ${theme.palette.divider}`,
        "&:hover": {
          color: (theme: Theme) => theme.palette.error.main,
          bgcolor: (theme: Theme) => theme.palette.background.default,
          border: (theme: Theme) => `1px solid ${theme.palette.error.main}`,
        },
        "&:active": {
          color: (theme: Theme) => theme.palette.error.dark,
          border: (theme: Theme) => `1px solid ${theme.palette.error.dark}`,
        },
      },
    },
  },
  disabledStyles: {
    bgcolor: ColorPalette.Greyscale.disabledBg,
    color: ColorPalette.Greyscale.disabledText,
    "&:hover": {
      bgcolor: ColorPalette.Greyscale.disabledBg,
      color: ColorPalette.Greyscale.disabledText,
    },
    "&:active": {
      bgcolor: ColorPalette.Greyscale.disabledBg,
      color: ColorPalette.Greyscale.disabledText,
    },
  },
};

export { WoopChipStyles, WoopBtnStyles };
