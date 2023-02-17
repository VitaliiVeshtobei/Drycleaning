import { Drawer, List, ListItem, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

type Prop = {
  sideBarIsOpen: boolean | undefined;
};

export const SideBar = ({ sideBarIsOpen }: Prop) => {
  const theme = useTheme();

  return (
    <Box>
      <Drawer
        anchor="left"
        open={sideBarIsOpen}
        variant="persistent"
        sx={{
          // width: 150,
          // flexShrink: 0,
          // fdfd

          "& .MuiDrawer-paper": {
            width: 150,
            boxSizing: "border-box",
            backgroundColor: theme.palette.primary.main,
            marginTop: 8,
            // color: theme.palette.secondary.light,
          },
        }}
      >
        <List>
          <Link to={"/workshops"}>Workshops</Link>
          <Link to={"/createworkshop"}>Create Workshop</Link>
          <ListItem>Orders</ListItem>
          <ListItem>Admin</ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
