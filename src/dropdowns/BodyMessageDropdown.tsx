import { TextFields } from "@mui/icons-material";
import { DropdownCard } from "../components/DropdownCard";
import { Box, Button, Stack, TextareaAutosize } from "@mui/material";
import { useCardPreview } from "../providers/PreviewProvider";
import { useState } from "react";
export function BodyMessageDropdown() {
  const { enabledSections, setEnabledSections } = useCardPreview();
  return (
    <DropdownCard
      onEnable={() => {}}
      enabled={enabledSections["body"]}
      icon={<TextFields />}
      title="Body message"
      content={<BodyMessageContent />}
    />
  );
}

function BodyMessageContent() {
  const { bodyMessage, setBodyMessage } = useCardPreview();
  const [newBodyMessage, setNewBodyMessage] = useState(bodyMessage);
  return (
    <Box>
      <Stack spacing={3}>
        <TextareaAutosize
          onChange={(val) => setNewBodyMessage(val.target.value)}
        ></TextareaAutosize>
      </Stack>

      <Button onClick={() => setBodyMessage(newBodyMessage)}>Save</Button>
    </Box>
  );
}
