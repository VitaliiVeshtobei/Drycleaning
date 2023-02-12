import React, { useContext } from "react";
import { ColorModeContext } from "../../theme";

import { useTheme } from "@mui/material";
import { AppBarStyled } from "./StyledTopBar";

import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  sideBarIsOpen: boolean | undefined;
  toggleSideBar: () => void;
};

export function TopBar({ toggleSideBar, sideBarIsOpen }: Props) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled
        sidebarisopen={`${sideBarIsOpen}`}
        position="fixed"
        sx={{
          backgroundColor: theme.palette.primary.dark,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            // color={"secondary"}
            aria-label="menu"
            sx={{ mr: 2, color: theme.palette.secondary.dark }}
            onClick={toggleSideBar}
          >
            <MenuIcon />
          </IconButton>
          <FormGroup>
            <FormControlLabel
              sx={{ marginRight: 5, color: theme.palette.secondary.dark }}
              control={
                <Switch
                  onClick={() => colorMode.toggleColorMode()}
                  defaultChecked
                />
              }
              label={theme.palette.mode === "dark" ? "dark" : "light"}
              labelPlacement="start"
            />
          </FormGroup>
          <Typography
            variant="h1"
            component="div"
            sx={{
              flexGrow: 1,
              marginRight: 5,
              textAlign: "center",
              color: theme.palette.secondary.dark,
            }}
          >
            DryCleaning
          </Typography>

          <Button sx={{ color: theme.palette.secondary.dark }}>Register</Button>
          <Button sx={{ color: theme.palette.secondary.dark }}>Login</Button>
        </Toolbar>
      </AppBarStyled>
    </Box>
  );
}
