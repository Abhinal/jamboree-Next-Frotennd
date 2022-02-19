import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";


export default function Register(e) {
  const history = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() =>{
    setEmailError("")
    setPasswordError("")
    setNameError("")
    if(Cookies.get('rt'))
    {
      history.push("/")
    }
  }, [ history])


  function signup(e){
    e.preventDefault()
    let postData = {
      name,
      email,
      password,
    };

    fetch("http://103.217.221.158/api/v1/user/signup", {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(postData)
    }).then((res) => {
      if (res.ok) {
        res.json().then((resp) =>{
          Cookies.set("at",resp.at, {expires: 2})
          Cookies.set("rt",resp.rt, {expires: 14})
          Cookies.set("name",resp.name, {expires: 14})
          history.push("/")
        });
      } else {
        res.json().then((err) => {
          err ? err.email ? setEmail("") : setEmail(email) : setEmail(email)
          err ? err.password ? setPassword("") : setPassword(password) : setPassword(password)
          err ? err.name ? setName("") : setName(name) : setName(name)
          setEmailError(err ? err.email ? err.email.slice(0,1)[0] : "" : "")
          setPasswordError(err ? err.password ? err.password.slice(0,1)[0] : "" : "")
          setNameError(err ? err.name ? err.name.slice(0,1)[0] : "" : "")
        })
      }
    })
  }

  return (
    <>
      <div className="container-fluid row px-0 mx-0 montserrat text-center" id="login">
        <div className="col-lg-8 col-md-6 d-flex" id="login-image">
          <div className="text-left col-md-6 mt-auto mb-lg-5 ml-lg-5 pl-3 pb-5">
            <h3 className="text-white">
              <b>Lorem Ipsum is simply dummy text of the</b>{" "}
            </h3>
            <Link href="/login"><a className="btn mt-2 button-1 px-3 text-white">
              Login</a>
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 px-5" id="login-form">
          <div className="px-2 container-fluid defaultColor my-auto">
            <h3>Create your account</h3>

            <form className="text-left">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  className= {nameError ? "form-control border border-danger":"form-control"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-describedby="name"
                  placeholder= {nameError ? nameError:"Enter your name"}
                />
                {/* {nameError ? <label className="text-danger">{nameError}</label>:""} */}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">E-Mail ID</label>
                <input
                  type="email"
                  className= {emailError ? "form-control border border-danger":"form-control"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                  placeholder={emailError ? emailError:"Enter your email id"}
                />
                {/* {emailError ? <label className="text-danger">{emailError}</label>:""} */}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type={visible ? "text":"password"}
                  className= {passwordError ? "form-control border border-danger":"form-control"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={passwordError ? passwordError:"Enter your password"}
                />
                {/* {passwordError ? <label className="text-danger">{passwordError}</label>:""} */}
              </div>
              <span className="form-check d-inline">
              <input type="checkbox" className="form-check-input" value={visible} onClick={() => setVisible(!visible)} />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Show Password
                </label>
              </span>
              <span className="d-inline float-right">Forget Password?</span>
              <button
                type="submit"
                onClick={signup}
                className="btn w-100 mt-2 button-1"
              >
                Register
              </button>
            </form>
            <br />
            <p>or</p>
            <p>Continue with</p>
            <button type="submit" className="btn w-100 mt-2 mb-5 button-2">
              <i className="fab fa-google"></i> Google
            </button>
          </div>
          <Link href="/login"><a className="mt-5 defaultColor">
            Already have account? <b>LOGIN</b></a>
          </Link>
        </div>
      </div>
    </>
  );
}
