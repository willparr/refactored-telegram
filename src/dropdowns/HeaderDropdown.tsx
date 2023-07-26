import { Image } from "@mui/icons-material";
import { DropdownCard } from "../components/DropdownCard";
import { Button, Stack, Typography } from "@mui/material";
import { useCardPreview } from "../providers/PreviewProvider";
import { SelectCustom } from "../components/Select";
export function HeaderDropdown() {
  const { enabledSections, setEnabledSections } = useCardPreview();
  return (
    <DropdownCard
      onEnable={() =>
        setEnabledSections({
          ...enabledSections,
          header: !enabledSections["header"],
        })
      }
      enabled={enabledSections["header"]}
      icon={<Image />}
      title="Header"
      content={<HeaderContent />}
    />
  );
}

function HeaderContent() {
  return (
    <Stack spacing={3}>
      <SelectCustom />
      <Typography>Image size recommendation: 800 x 418 pixel.</Typography>
      <Button variant="outlined">UPLOAD IMAGE</Button>
    </Stack>
  );
}
