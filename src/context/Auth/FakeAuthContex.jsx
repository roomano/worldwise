import { createContext, useReducer } from "react";

const AuthContex = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.paylaod, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };

    default:
      throw new Error("Unknown action tye");
  }
}

const FAKE_USER = {
  name: "romano",
  email: "romano@example.com",
  password: "12345",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function FakeAuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, passwd) {
    let stat = false;
    if (email === FAKE_USER.email && passwd === FAKE_USER.password) {
      dispatch({ type: "login", paylaod: FAKE_USER });
      stat = true;
    }

    return stat;
  }

  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContex.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContex.Provider>
  );
}

export { FakeAuthProvider, AuthContex };
