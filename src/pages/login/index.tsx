import React from "react";
import loginBanner from "../../assets/login-banner.svg";
import netomiLogo from "../../assets/netomi-logo.svg";
import googleIcon from "../../assets/google-icon.svg";
// import { useAppSelector } from "../../store/reduxHooks";

// export interface LoginProps {
//   children: ReactNode;
// }

function Login() {
  // const username = useAppSelector((state) => state.auth.username);
  return (
    <div className={"grid grid-cols-2 gap-20 mt-20 mx-32"}>
      <div className={"flex flex-col justify-between"}>
        <div className={"flex justify-center"}>
          <img
            src={loginBanner}
            alt="Login banner"
            height="535px"
            width="504px"
          />
        </div>
        <div className={"flex justify-center mt-16 mb-6 text-grey_medium"}>
          @2022 NETOMI.Inc All Rights Reserved.
        </div>
      </div>
      <div className={"flex flex-col"}>
        <div className={"flex justify-center"}>
          <img src={netomiLogo} alt="Netomi Logo" height="40px" width="164px" />
        </div>
        <div className={"flex justify-center text-4xl font-semibold mt-6"}>
          Internal DA Reports
        </div>
        <div className={"flex justify-center text-2xl mt-16 font-semibold"}>
          Login
        </div>
        <div
          className={
            "flex flex-row items-center justify-center text-sm mt-11 border border-solid border-grey_medium rounded py-3 cursor-pointer"
          }
        >
          <img
            src={googleIcon}
            className={"mr-3"}
            alt="Google Logo"
            height="24px"
            width="24px"
          />
          <span>Login with Google</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Login);
