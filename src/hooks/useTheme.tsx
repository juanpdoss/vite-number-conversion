import { useContext } from "react";
import { ThemeContext, ThemeContextValue } from "../providers/ThemeContext";


// hook que consume el theme
export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if(!themeContext){
      // error
     throw new Error("Estas accediendo al context por fuera del provider") 
  }  

  return themeContext as ThemeContextValue;
};
