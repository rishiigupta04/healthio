import { createContext } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const currencySymbol = "$";
  const value = {
    currencySymbol,
  };
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
