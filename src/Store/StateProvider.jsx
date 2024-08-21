import React, { Children, useReducer } from "react";
import { createContext } from "react";

export const StateContext = createContext(null);

const StateProvider = ({ children, initialState, reducer }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
