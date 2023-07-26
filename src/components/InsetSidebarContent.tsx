import { Box, Paper, Stack, Typography } from "@mui/material";
import { DropdownCard } from "./DropdownCard";
import Textfields from "@mui/icons-material/TextFields";
import { Crop169 } from "@mui/icons-material";
import { HeaderDropdown } from "../dropdowns/HeaderDropdown";
import { BodyMessageDropdown } from "../dropdowns/BodyMessageDropdown";
import { ButtonDropdown } from "../dropdowns/ButtonDropdown";
import { FooterMessageDropdown } from "../dropdowns/FooterMessageDropdown";

export function InsetSidebarContent() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flexGrow: 1, backgroundColor: "#eeeeee", p: 3 }}>
        <Typography paddingBottom={4} variant="h5">
          Edit Message
        </Typography>
        <Typography paddingBottom={4} variant="body1">
          Content
        </Typography>
        <Stack sx={{ minWidth: "450px" }} spacing={6}>
          <Paper sx={{ maxWidth: "450px" }}>
            <HeaderDropdown />
          </Paper>
          <Paper>
            <BodyMessageDropdown />
          </Paper>
          <Paper>
            <FooterMessageDropdown />
          </Paper>
          <Paper>
            <ButtonDropdown />
          </Paper>
        </Stack>
      </Box>
    </Box>
  );
}
