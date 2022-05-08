import React from "react";
import {
 
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from '../../imges/google.png'
import Loading from "../LoadingPage/LoadingPage";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  
  const navigate = useNavigate();

  let errorElement;
  if (error) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message}
      </p>
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">OR</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info d-block mx-auto w-50 my-2"
        >
          <img style={{ width: "20px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
