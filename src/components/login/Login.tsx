import React, { useEffect } from "react";
import "./Login.scss";
import { ILoginProps } from "./types";

const Login = ({navigate} : ILoginProps) => {

  useEffect(() => {
    const exchangeToken = async (code: string) => {
      try {
        const response = await fetch("http://localhost:3030/exchange_token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ code: code }),
         
        });

        console.log(response);

        if (response.ok) {
          const data = await response.json();

          localStorage.setItem("uId", data.userId);
          navigate("/");
        } else {
          console.error("Token exchange failed");
        }
      } catch (error) {
        console.error("Error occurred", error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      exchangeToken(code);
      ;
    }
  }, []);

  return (
    <div
      className="login"
      onClick={() =>
        (window.location.href =
          "https://www.strava.com/oauth/authorize?client_id=108156&response_type=code&redirect_uri=http://localhost:3000&approval_prompt=force&scope=read")
      }
    >
      <div className="login-btn">Login</div>
    </div>
  );
};

export default Login;
