import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Stack,
} from "@mui/material";
import { useCardPreview } from "../providers/PreviewProvider";

export function MessageEditor() {
  const { enabledSections } = useCardPreview();
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Stack>
            {enabledSections["header"] ? <HeaderPreview /> : null}
            <Divider />
            {enabledSections["body"] ? <BodyPreview /> : null}
            <Divider />
            {enabledSections["footer"] ? <FooterPreview /> : null}
            {enabledSections["buttons"] ? <ButtonPreview /> : null}
          </Stack>
        </CardContent>
      </Card>
      <Card
        sx={{
          minWidth: 300,
        }}
      ></Card>
    </Box>
  );
}

function HeaderPreview() {
  const { headerContent } = useCardPreview();
  return (
    <Box minHeight={100} display={"flex"} flexDirection={"column"}>
      <Chip label="Header" />
      {headerContent}
    </Box>
  );
}
function BodyPreview() {
  const { bodyMessage } = useCardPreview();
  return (
    <Box minHeight={100} display={"flex"} flexDirection={"column"}>
      <Chip label="Body message" />
      {bodyMessage}
    </Box>
  );
}
function FooterPreview() {
  const { footerMessage } = useCardPreview();
  return (
    <Box minHeight={100} display={"flex"} flexDirection={"column"}>
      <Chip label="Footer" />
      {footerMessage}
    </Box>
  );
}
function ButtonPreview() {
  const { buttons } = useCardPreview();
  return (
    <Box minHeight={100} display={"flex"} flexDirection={"column"}>
      <Chip label="Footer" />
      {buttons?.map((buttonAction) => (
        <Button variant="outlined">{buttonAction.text}</Button>
      ))}
    </Box>
  );
}
