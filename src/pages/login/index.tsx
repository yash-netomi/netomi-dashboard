import React from "react";
import { useAppSelector } from "../../store/reduxHooks";

// export interface LoginProps {
//   children: ReactNode;
// }

function Login() {
  const username = useAppSelector((state) => state.auth.username);
  return (
    <h1 className="text-3xl font-bold underline">
      {username}
    </h1>
  );
}

export default React.memo(Login);
