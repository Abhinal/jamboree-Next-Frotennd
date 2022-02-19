import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";

export default function Login() {
  const history = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [pwderror, setPwdError] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // setEmailError("");
    // setPwdError("");
    if (Cookies.get("rt")) {
      history.push("/");
    }
  }, [history]);

  function login(e) {
    e.preventDefault();

    setEmailError("");
    setPwdError("");

    let postData = {
      email,
      password,
    };

    if (!postData.email) {
      setEmailError("Email id required.");
    }
    if (!postData.password) {
      setPwdError("Password required.");
    }

    fetch("http://103.217.221.158/api/v1/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((resp) => {
          Cookies.set("at", resp.at, { expires: 2 });
          Cookies.set("rt", resp.rt, { expires: 14 });
          Cookies.set("name", resp.name, { expires: 14 });
          history.push("/");
        });
      } else {
        res.json().then((err) => {
          let message = err.message;
          if (message === "Wrong password.") {
            setPassword("");
            setPwdError(message);
          } else if (message === "Email does not exist.") {
            setPassword("");
            setEmail("");
            setEmailError(message);
          }
        });
      }
    });
  }

  return (
    <>
      <div
        className="container-fluid row px-0 mx-0 montserrat text-center"
        id="login"
      >
        <div className="col-lg-8 col-md-6 d-flex" id="login-image">
          <div className="text-left col-md-6 mt-auto mb-lg-5 ml-lg-5 pl-3 pb-5">
            <h3 className="text-white">
              <b>Lorem Ipsum is simply dummy text of the</b>{" "}
            </h3>
            <Link href="/register">
              <a className="btn mt-2 button-1 px-3 text-white">
                Create Account
              </a>
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 px-5" id="login-form">
          <div className="px-2 container-fluid defaultColor my-auto">
            <h3>Login to your account</h3>
            <p>Login with JamBoree ID &amp; Password</p>

            <form className="text-left">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">E-Mail ID</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={
                    emailerror
                      ? "form-control border border-danger"
                      : "form-control"
                  }
                  aria-describedby="emailHelp"
                  placeholder={emailerror ? emailerror : "Enter your email id"}
                  color="red"
                  required
                />
                {/* {emailerror ? (
                  <span className="text-danger">{emailerror}</span>
                ) : (
                  ""
                )} */}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type={visible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={
                    pwderror
                      ? "form-control border border-danger"
                      : "form-control"
                  }
                  placeholder={pwderror ? pwderror : "Enter your password"}
                  required
                />
                {/* {pwderror ? (
                  <span className="text-danger">{pwderror}</span>
                ) : (
                  ""
                )} */}
              </div>
              <span className="form-check d-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={visible}
                  onClick={() => setVisible(!visible)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Show Password
                </label>
              </span>
              <span className="d-inline float-right">Forget Password?</span>
              <button
                type="submit"
                onClick={login}
                className="btn w-100 mt-2 button-1"
              >
                Login
              </button>
            </form>
            <br />
            <p>or</p>
            <p>Continue with</p>
            <button type="submit" className="btn w-100 mt-2 mb-5 button-2">
              <i className="fab fa-google"></i> Google
            </button>
          </div>
          <div className=""></div>
          <Link href="/register">
            <a className="mt-5 defaultColor">
              Don’t have account? <b>CREATE NEW ACCOUNT</b>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
