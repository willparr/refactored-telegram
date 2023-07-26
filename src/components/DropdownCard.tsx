import {
  Box,
  Typography,
  Switch,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

type Props = {
  title?: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
  helperContent?: React.ReactNode;
  enabled?: boolean;
  onEnable: (enable: boolean) => void;
};

export function DropdownCard({
  title,
  content,
  icon,
  helperContent,
  enabled,
  onEnable,
}: Props) {
  return (
    <Box>
      <Accordion expanded={enabled}>
        <AccordionSummary
          expandIcon={<Switch onChange={() => onEnable(!enabled)} checked={enabled} />}
        >
          {icon}
          <Typography sx={{ paddingLeft: "4px" }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{content}</AccordionDetails>
      </Accordion>
    </Box>
  );
}
