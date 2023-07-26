import { Crop169 } from "@mui/icons-material";
import { DropdownCard } from "../components/DropdownCard";
import { Stack, TextField } from "@mui/material";
import { useCardPreview } from "../providers/PreviewProvider";
export function ButtonDropdown() {
  const { enabledSections, setEnabledSections } = useCardPreview();
  return (
    <DropdownCard
      onEnable={() =>
        setEnabledSections({
          ...enabledSections,
          buttons: !enabledSections['buttons'],
        })
      }
      enabled={enabledSections['buttons']}
      icon={<Crop169 />}
      title="Buttons"
      content={<ButtonDropdownContent />}
    />
  );
}

function ButtonDropdownContent() {
  return (
    <Stack spacing={3}>
      <TextField
        id="outlined-helperText"
        label="Button 1"
        placeholder="Enter text"
      />
      <TextField
        id="outlined-helperText"
        label="Button 2"
        placeholder="Enter text"
      />
      <TextField
        id="outlined-helperText"
        label="Button 3"
        placeholder="Enter text"
      />
    </Stack>
  );
}
