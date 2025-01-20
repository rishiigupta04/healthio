import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
  const currencySymbol = "$";
  const value = {
    currencySymbol,
  };
  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
