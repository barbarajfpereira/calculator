import React from "react";

const initialState = {
  formula: "",
  result: ""
};

const DisplayContext = React.createContext(initialState);

export default DisplayContext;
