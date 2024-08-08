import { Navigate } from "react-router-dom";
import useSecurity from "./useSecurity";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SecureRoute: React.FC<Props> = (props) => {
  //@ts-expect-error dsa
  const { loggedIn } = useSecurity();

  if (!loggedIn) {
    return <Navigate to="/" replace />;
  }

  return props.children;
};
export default SecureRoute;
