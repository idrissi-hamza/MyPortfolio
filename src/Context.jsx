import { createContext, useReducer } from "react";

export const globalContext = createContext();

const initialState = { darkMode: true, open: false };

const globalReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { ...state, darkMode: !state.darkMode };
    case "menu":
      return { ...state, open: !state.open };
    default:
      return state;
  }
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <globalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </globalContext.Provider>
  );
};
