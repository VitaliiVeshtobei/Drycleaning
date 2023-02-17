import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

export const tokens = (mode: PaletteMode | undefined) => ({
  ...(mode === "dark"
    ? {
        lightGreen: {
          100: "#e7f2f2",
          200: "#cfe5e4",
          300: "#b8d7d7",
          400: "#a0cac9",
          500: "#88bdbc",
          600: "#6d9796",
          700: "#527171",
          800: "#364c4b",
          900: "#1b2626",
        },
        middleGreen: {
          100: "#d3dcde",
          200: "#a8b8bc",
          300: "#7c959b",
          400: "#517179",
          500: "#254e58",
          600: "#1e3e46",
          700: "#162f35",
          800: "#0f1f23",
          900: "#071012",
        },
        darkGreen: {
          100: "#cfd5d6",
          200: "#a0abad",
          300: "#708184",
          400: "#41575b",
          500: "#112d32",
          600: "#0e2428",
          700: "#0a1b1e",
          800: "#071214",
          900: "#03090a",
        },
        darkBrown: {
          100: "#dcdbd9",
          200: "#b9b7b3",
          300: "#95928d",
          400: "#726e67",
          500: "#4f4a41",
          600: "#3f3b34",
          700: "#2f2c27",
          800: "#201e1a",
          900: "#100f0d",
        },
        lightBrown: {
          100: "#e2e0de",
          200: "#c5c2bc",
          300: "#a8a39b",
          400: "#8b8579",
          500: "#6e6658",
          600: "#585246",
          700: "#423d35",
          800: "#2c2923",
          900: "#161412",
        },
      }
    : {
        lightGreen: {
          100: "#1b2626",
          200: "#364c4b",
          300: "#527171",
          400: "#6d9796",
          500: "#88bdbc",
          600: "#a0cac9",
          700: "#b8d7d7",
          800: "#cfe5e4",
          900: "#e7f2f2",
        },
        middleGreen: {
          100: "#071012",
          200: "#0f1f23",
          300: "#162f35",
          400: "#1e3e46",
          500: "#254e58",
          600: "#517179",
          700: "#7c959b",
          800: "#a8b8bc",
          900: "#d3dcde",
        },
        darkGreen: {
          100: "#03090a",
          200: "#071214",
          300: "#0a1b1e",
          400: "#0e2428",
          500: "#112d32",
          600: "#41575b",
          700: "#708184",
          800: "#a0abad",
          900: "#cfd5d6",
        },
        darkBrown: {
          100: "#100f0d",
          200: "#201e1a",
          300: "#2f2c27",
          400: "#3f3b34",
          500: "#4f4a41",
          600: "#726e67",
          700: "#95928d",
          800: "#b9b7b3",
          900: "#dcdbd9",
        },
        lightBrown: {
          100: "#161412",
          200: "#2c2923",
          300: "#423d35",
          400: "#585246",
          500: "#6e6658",
          600: "#8b8579",
          700: "#a8a39b",
          800: "#c5c2bc",
          900: "#e2e0de",
        },
      }),
});

export const themeSettings = (mode: PaletteMode | undefined) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.darkBrown[600],
            },
            secondary: { main: colors.middleGreen[100] },

            background: {
              default: colors.lightGreen[700],
            },
          }
        : {
            primary: {
              main: colors.darkBrown[600],
            },
            secondary: { main: colors.middleGreen[100] },

            background: {
              default: colors.lightGreen[700],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sens-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useMode = (): Array<Object | any> => {
  const [mode, setMode] = useState<PaletteMode | undefined>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (): void =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
