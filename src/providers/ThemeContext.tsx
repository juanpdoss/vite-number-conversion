import React, { createContext, useState } from "react";

export type ThemeContextValue = {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<Partial<ThemeContextValue>>({
  color: "",
});

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [color, setColor] = useState<string>("red");

  return (
    <ThemeContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
