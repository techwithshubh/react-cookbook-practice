import React, { useState } from "react";
import SecurityContext from "./SecurityContext";

type Props = {
  children: React.ReactNode;
};

const SecurityProvider: React.FC<Props> = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <SecurityContext.Provider
      value={{
        login: (username: string, password: string) => {
          if (username === "fred" && password === "password") {
            setLoggedIn(true);
          }
        },
        logout: () => setLoggedIn(false),
        loggedIn,
      }}
    >
      {props.children}{" "}
    </SecurityContext.Provider>
  );
};
export default SecurityProvider;
