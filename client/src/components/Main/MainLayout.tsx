import { Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          //   bgcolor: "#cfe8fc",
          height: "100vh",
          display: "flex",
          justifyContent: "center",

          marginTop: 8,
        }}
      >
        <Outlet />
      </Box>
    </Container>
  );
};
