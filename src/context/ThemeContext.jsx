import { useReducer } from "react";
import { ThemeContext } from "./ThemeContext";

const initialState = {
  dark: false,
  grid: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, dark: !state.dark };

    case "TOGGLE_VIEW":
      return { ...state, grid: !state.grid };

    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}