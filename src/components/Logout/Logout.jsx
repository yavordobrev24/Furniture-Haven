import { useContext, useEffect } from "react";

import AuthContext from "../../contexts/authContext";

export default function Logout() {
  const { onLogout } = useContext(AuthContext);
  useEffect(() => {
    onLogout();
  }, []);
  return null;
}
