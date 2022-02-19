import React, { useEffect } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const baseUrl = "http://103.217.221.158/api/v1"

export default function Protected(props) {
  let Cmp = props.Cmp;

  const history = useNavigate();

  useEffect(() => {
    if (Cookies.get("at")) {
      fetch(baseUrl + "/user/token/verify", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: Cookies.get("at") }),
      }).then((res) => {
        if (res.status !== 200) {
          Cookies.remove("at");
        } else {
        }
      });
    } else if (!Cookies.get("at")) {
      if (Cookies.get("rt")) {
        fetch(baseUrl + "/user/token/verify", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: Cookies.get("rt") }),
        }).then((res) => {
          if (res.status === 200) {
            let refresh = Cookies.get("rt");

            fetch(baseUrl + "/user/token/refresh", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ refresh: refresh }),
            }).then((res) => {
              res.json().then((resp) => {
                Cookies.set("at", resp.access, { expires: 2 });
                Cookies.set("rt", resp.refresh, { expires: 14 });
                Cookies.set("name", Cookies.get("name"), { expires: 14 });
              });
            });
          } else {
            Cookies.remove("rt");
            history("/login");
          }
        });
      } else {
        history("/login");
      }
    }
  }, [history]);

  return (
    <>
      <Cmp />
    </>
  );
}
