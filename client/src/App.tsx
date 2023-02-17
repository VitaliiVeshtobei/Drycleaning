import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Home } from "./pages/Home";
import { ErrorPage } from "./errorPage/errorPage";
import { CreateWorkshop } from "./components/Main/CreateWorkshop/CreateWorkshop";
import { Workshops } from "./components/Main/Workshops/Workshops";
import { getWorkshops } from "./utils/getData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/workshops",
        element: <Workshops />,
        loader: getWorkshops,
      },
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
