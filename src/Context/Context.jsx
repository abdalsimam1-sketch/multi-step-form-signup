import { createContext, useState, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    plan: "",
    planPrice: 0,
    billing: "monthly",
    addOns: [],
  });
  const valuesToBeShared = { formData, setFormData };
  return (
    <>
      <FormContext.Provider value={valuesToBeShared}>
        {children}
      </FormContext.Provider>
    </>
  );
};
export const useFormData = () => {
  return useContext(FormContext);
};
