import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { ColorPalette, ColorPaletteDark } from "../common/styles/color-palette";
import { ColorPaletteList } from "../components/page2/color-palette-list";
import { ShadowList } from "../components/page2/shadow-list";
import React from "react";
import ButtonList from "../components/page2/button-list";

export function WoopDesignSystem() {
  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        gap={2}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Box sx={{ width: "49%" }}>
          <Accordion
            sx={{
              bgcolor: ColorPalette.Background.bgLight,
            }}
            id="color-palette-light-list"
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: ColorPalette.Greyscale.textPrimary }}
                />
              }
              aria-controls="color-palette-light-list"
              id="color-palette-light-list"
            >
              <Typography
                component="span"
                variant="h6"
                fontWeight="800"
                color={ColorPalette.Greyscale.textPrimary}
              >
                Color Palette - Light
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: ColorPalette.Background.bgLight,
                borderTop: `1px solid ${ColorPalette.Greyscale.dividers}`,
              }}
            >
              <ColorPaletteList colorPalette={ColorPalette} />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ width: "49%" }}>
          <Accordion
            id="color-palette-dark-list"
            sx={{
              bgcolor: ColorPaletteDark.Background.bgDarken,
              border: (theme) => `1px solid ${theme.palette.grey[200]}`,
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: ColorPaletteDark.Greyscale.textPrimary }}
                />
              }
              aria-controls="color-palette-dark-list"
              id="color-palette-dark-list"
            >
              <Typography
                component="span"
                variant="h6"
                fontWeight="800"
                color={ColorPaletteDark.Greyscale.textPrimary}
              >
                Color Palette - Dark
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: ColorPaletteDark.Background.bgDarken,
                borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
              }}
            >
              <ColorPaletteList colorPalette={ColorPaletteDark} />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ width: "49%" }}>
          <Accordion
            sx={{
              border: (theme) => `1px solid ${theme.palette.grey[200]}`,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="800">
                Shadow
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                pt: 2,
                bgcolor: (theme) => theme.palette.background.default,
                borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
              }}
            >
              <ShadowList />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ width: "49%" }}>
          <Accordion
            sx={{
              border: (theme) => `1px solid ${theme.palette.grey[200]}`,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="800">
                Buttons
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                pt: 2,
                display: "flex",
                flexDirection: "column",
                bgcolor: (theme) => theme.palette.background.default,
                borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
              }}
            >
              <ButtonList />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    </Container>
  );
}
