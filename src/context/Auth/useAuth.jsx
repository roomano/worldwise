import { useContext } from "react";
import { AuthContex } from "./FakeAuthContex";

function useAuth() {
  const context = useContext(AuthContex);
  if (context === undefined) {
    throw new Error("AuthContext was used outside of AuthProvider");
  }
  return context;
}

export default useAuth;
