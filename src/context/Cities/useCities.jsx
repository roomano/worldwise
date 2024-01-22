import { useContext } from "react";
import { CitiesContext } from "./CitiesContext";

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside of the PostProvider");
  return context;
}

export default useCities;
