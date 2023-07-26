import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
const drawerWidth = 56;
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CampaignIcon from "@mui/icons-material/Campaign";
import { InsetSidebarContent } from "./InsetSidebarContent";
import { CardPreviewProvider } from "../providers/PreviewProvider";
import { MessageEditor } from "./MessageEditor";
import { CloseOutlined } from "@mui/icons-material";

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)` }}>
        <Toolbar
          sx={{
            backgroundColor: "white",
            justifyContent: "space-between",
          }}
        >
          <Typography color="black" variant="h6" noWrap component="div">
            Create a Campaign
          </Typography>
          <div>
            <Chip label="Tips"></Chip>
            <IconButton>
              <CloseOutlined></CloseOutlined>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          color: "black",
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",

            overflow: "hidden",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem key={"Account"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key={"Mosiac"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AutoAwesomeMosaicIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem key={"Chat"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChatBubbleIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem key={"Campaign"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CampaignIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: `calc(100% - ${drawerWidth}px)`,
        }}
        component="main"
      >
        <CardPreviewProvider>
          <InsetSidebarContent />
          <MessageEditor />
        </CardPreviewProvider>
      </Box>
    </Box>
  );
}
