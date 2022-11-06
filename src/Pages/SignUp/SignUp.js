import React from "react";
import { Link } from "react-router-dom";
import signUpImage from "../../assets/images/login/login.svg";
import GoogleIcon from "../../assets/icons/icons8-google-48.png";
import FacebookIcon from "../../assets/icons/icons8-facebook-48.png";
import TwitterIcon from "../../assets/icons/icons8-twitter-48.png";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
const SignUp = () => {
  const { registerWithEmail, googleLogin, facebookLogin } =
    useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    registerWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
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
    <div className="flex items-center pb-20">
      <div className="w-1/2 mx-auto">
        <img className="w-9/12 mx-auto" src={signUpImage} alt="" />
      </div>
      <div className="w-1/2 mx-auto">
        <div className=" text-center rounded-xl py-20 shadow-2xl">
          <h2 className="text-3xl font-semibold mb-5">Create an Account</h2>
          {/* <p className="text-red-500 mb-5">{error.slice(10, 300)}</p> */}
          <form onSubmit={handleLogin} className="w-9/12 mx-auto">
            <div className="inputGroup ">
              <input
                className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl mt-7"
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl mt-7"
                type="email"
                name="email"
                placeholder="Username or Email"
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl mt-7"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <input
              className="btn btn-primary w-full mt-10"
              type="submit"
              value="Sign Up"
            />
            <h4 className="my-10">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Log In
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

export default SignUp;
