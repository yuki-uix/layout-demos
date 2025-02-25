import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { v6 } from "../constants/page2/v6";
import { HorizontalCard } from "../common/ui/page2/woop/cards/horizontal-card";
import { VerticalCard } from "../common/ui/page2/woop/cards/vertical-card";

export function Test() {
  return (
    <Container maxWidth="xl">
      <Box
        data-layer="test-component-recognize"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Stack direction="row" spacing={4}>
          <Box
            data-layer="image"
            component="img"
            src={v6.image}
            sx={{
              width: "calc(50% - 16px)",
              height: "auto",
              aspectRatio: "1/1",
            }}
          />
          <Stack spacing={4} sx={{ width: "50%" }}>
            {v6.horizontalCards.slice(0, 2).map((card, index) => (
              <Box
                key={index}
                data-layer={`horizontal-card-${index}`}
                sx={{ width: "100%" }}
              >
                <HorizontalCard {...card} />
              </Box>
            ))}
          </Stack>
        </Stack>

        <Box data-layer="horizontal-card-2" sx={{ width: "100%" }}>
          <HorizontalCard {...v6.horizontalCards[2]} />
        </Box>

        <Stack direction="row" spacing={4}>
          {v6.verticalCards.map((card, index) => (
            <Box
              key={index}
              data-layer={`vertical-card-${index}`}
              sx={{
                width: `calc((100% - ${
                  (v6.verticalCards.length - 1) * 32
                }px) / ${v6.verticalCards.length})`,
              }}
            >
              <VerticalCard {...card} pictureSize={316} />
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
