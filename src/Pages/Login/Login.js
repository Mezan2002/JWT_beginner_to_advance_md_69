import React from "react";
import { json, Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import GoogleIcon from "../../assets/icons/icons8-google-48.png";
import FacebookIcon from "../../assets/icons/icons8-facebook-48.png";
import TwitterIcon from "../../assets/icons/icons8-twitter-48.png";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { loginUser, googleLogin, facebookLogin } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: user.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // setting the token in the local storage , this is easy but not the safe way to set the token
            localStorage.setItem("geniusToken", data.token);
            navigate(from, { replace: true });
          });
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const handleFacebookLogIn = () => {
    facebookLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const handleTwitterLogIn = () => {};

  return (
    <div className="flex items-center pt-5 pb-20">
      <div className="w-1/2 mx-auto">
        <img className="w-9/12 mx-auto" src={loginImage} alt="" />
      </div>
      <div className="w-1/2 mx-auto">
        <div className=" text-center rounded-xl py-20 shadow-2xl">
          <h2 className="text-3xl font-semibold mb-5">Login</h2>
          {/* <p className="text-red-500 mb-5">{error.slice(10, 300)}</p> */}
          <form onSubmit={handleLogin} className="w-9/12 mx-auto">
            <div className="inputGroup ">
              <input
                className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl"
                type="email"
                name="email"
                placeholder="Username or Email"
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl mt-10"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between  mt-10">
              <div>
                <input type="checkbox" name="" id="rememberMe" />
                <label htmlFor="rememberMe" className="ml-2">
                  Remember Me
                </label>
              </div>
              <div>
                <Link to="" className="underline">
                  Forgot Password
                </Link>
              </div>
            </div>
            <button className="btn btn-primary w-full mt-10 ">Login</button>
            <h4 className="my-10">
              Don't have an account?{" "}
              <Link to="/signUp" className="underline">
                Create a new account
              </Link>
            </h4>
            <div className="divider  mt-5">OR SIGN IN WITH</div>
            <div className="flex justify-center mt-5">
              <div
                onClick={handleGoogleLogIn}
                className="border w-24 h-24 flex justify-center items-center flex-col mr-2 px-4 py-2 rounded-full cursor-pointer"
              >
                <img className="w-10 mx-auto" src={GoogleIcon} alt="" />
                <p className="">Google</p>
              </div>
              <div
                onClick={handleFacebookLogIn}
                className="border w-24 h-24 flex justify-center items-center flex-col mr-2 px-4 py-2 rounded-full cursor-pointer"
              >
                <img className="w-10 mx-auto" src={FacebookIcon} alt="" />
                <p className="">Facebook</p>
              </div>
              <div
                onClick={handleTwitterLogIn}
                className="border w-24 h-24 flex justify-center items-center flex-col mr-2 px-4 py-2 rounded-full cursor-pointer"
              >
                <img className="w-10 mx-auto" src={TwitterIcon} alt="" />
                <p className="">Twitter</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
