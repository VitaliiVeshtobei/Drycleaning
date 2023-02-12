import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Home } from "./pages/Home";
import { ErrorPage } from "./errorPage/errorPage";
import { CreateWorkshop } from "./components/Main/CreateWorkshop/CreateWorkshop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/createworkshop",
        element: <CreateWorkshop />,
      },
    ],
  },
]);

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
