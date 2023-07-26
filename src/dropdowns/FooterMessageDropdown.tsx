import { TextFields } from "@mui/icons-material";
import { Box, Button, Stack, TextareaAutosize } from "@mui/material";
import { DropdownCard } from "../components/DropdownCard";
import { useState } from "react";
import { useCardPreview } from "../providers/PreviewProvider";

export function FooterMessageDropdown() {
  const { enabledSections, setEnabledSections } = useCardPreview();
  return (
    <DropdownCard
      onEnable={() =>
        setEnabledSections({
          ...enabledSections,
          footer: !enabledSections["footer"],
        })
      }
      enabled={enabledSections["footer"]}
      icon={<TextFields />}
      title="Footer text"
      content={<FooterMessageContent />}
    />
  );
}

function FooterMessageContent() {
  const { footerMessage, setFooterMessage } = useCardPreview();
  const [newFooterMessage, setNewFooterMessage] = useState(footerMessage);
  return (
    <Box>
      <Stack spacing={3}>
        <TextareaAutosize
          value={newFooterMessage}
          onChange={(e) => setNewFooterMessage(e.target.value)}
        ></TextareaAutosize>
      </Stack>

      <Button onClick={() => setFooterMessage(newFooterMessage)}>Save</Button>
    </Box>
  );
}
