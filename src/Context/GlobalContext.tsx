import { createContext, ReactNode, useState } from "react";

type props = {
  children: ReactNode;
};

type GlobalContextType = {
  name: string;
  setName: (value: string) => void;
};

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: props) => {
  const [name, setName] = useState<string>("teste");

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};
