import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginimage from '../../imges/login.png';
import './Login.css';
import LoadingPage from '../LoadingPage/LoadingPage';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';



const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";
    let errorItem;

      const 
      [signInWithEmailAndPassword,
        user,
        loading,
        error
      ] =useSignInWithEmailAndPassword(auth);
      console.log(user);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(loading || sending){
        return <LoadingPage></LoadingPage>
    }
   
   if(user){
      //  navigate(from, { replace: true });
   }

   if (error) {
    errorItem=<p className='text-danger'>Error: {error?.message}</p>  
  }

  // HANDLE EMAIL PASSWORD LOGIN
   const handleSubmit = async event => {
     event.preventDefault();
     const email = emailRef.current.value;
     const password = passwordRef.current.value;
     console.log(email, password);
     
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://secret-plateau-50974.herokuapp.com/login",
      {
        email,
      }
    );
    localStorage.setItem('accessToken', data.accessToken);
    navigate(from, { replace: true });
   };
   
   const navigateRegister = (event) => {
     navigate("/register");
   };

   const resetPassword = async() =>{
    const email = emailRef.current.value;
      if (email) {
        await sendPasswordResetEmail(email)
      toast('Sent email');
      }
      else{
        toast('please enter your email');
      }
   }

   return (
     <div className='container'>
       <div className='login-container'>
         <div>
            <img src={loginimage} alt="" />
         </div>
         <div>
         <div className="w-50 mx-auto">
         <h3 className="text-primary mt-2">Please Login</h3>

         <Form onSubmit={handleSubmit}>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control
               ref={emailRef} type="email" placeholder="Enter email" required />
           </Form.Group>


           <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Control
               ref={passwordRef} type="password" placeholder="Password" required />
           </Form.Group>


           <Button variant="primary w-100  d-block mb-3" type="submit">Login</Button>
         </Form>

          {errorItem} 

         <p>
           Are You new here? 
           <Link to="/register" className="text-primary pe-auto text-decoration-none" onClick={navigateRegister} > Please Register </Link>
            </p>

         <p>
           Forget Password? <button  to="/register" className="btn btn-link text-primary pe-auto text-decoration-none" onClick={resetPassword}  >Reset Password </button> </p>
           <SocialLogin></SocialLogin>
           <ToastContainer />
       </div>
         </div>
       </div>
     </div>
   );
};

export default Login;











// import React, { useEffect, useRef } from "react";
// import { Button, Form } from "react-bootstrap";
// import {
//   useAuthState,
//   useSendPasswordResetEmail,
//   useSignInWithEmailAndPassword,
// } from "react-firebase-hooks/auth";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import auth from "../../firebase.init";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import axios from "axios";
// import "./Login.css";
// import LoadingPage from "../LoadingPage/LoadingPage";
// import loginImg from "../../imges/login.png";
// import SocialLogin from "../SocialLogin/SocialLogin";
// import axios from "axios";
// const Login = () => {
//   const emailRef = useRef("");
//   const passwordRef = useRef("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [signInWithEmailAndPassword, euser, loading, error] =
//     useSignInWithEmailAndPassword(auth);
//   const [user] = useAuthState(auth);

//   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

//   let from = location.state?.from?.pathname || "/";
//   let errorItem;

//   // useEffect(() => {
//   //   if (user) {
//   //     //jwt s
//   //     const url = "http://localhost:5000/login";

//   //     fetch(url, {
//   //       method: "POST",
//   //       body: JSON.stringify({
//   //         email: user?.email,
//   //       }),
//   //       headers: {
//   //         "Content-type": "application/json; charset=UTF-8",
//   //       },
//   //     })
//   //       .then((response) => response.json())
//   //       .then((data) => {
//   //         console.log(data)
//   //         localStorage.setItem("accessToken", data.token);
//   //         navigate(from, { replace: true });
//   //       });

//   //     // //jwt e
//   //   }
//   // }, [euser, user, navigate, from]);

//   if (loading || sending) {
//     return <LoadingPage></LoadingPage>;
//   }

//   if (error) {
//     errorItem = <p className="text-danger">Error: {error?.message}</p>;
//   }
//   const handleSubmit =async (event) => {
//     event.preventDefault();
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;

//   await  signInWithEmailAndPassword(email, password);
  
//   const { data } = await axios.post("http://localhost:5000/login", { email });
//   localStorage.setItem("accessToken", data.accessToken);
//   navigate(from, { replace: true });
   
//   };

//   const navigateRegister = (event) => {
//     navigate("/register");
//   };

//   const resetPassword = async () => {
//     const email = emailRef.current.value;
//     if (email) {
//       await sendPasswordResetEmail(email);

//       toast("Sent email");
//     } else {
//       toast("please enter your email");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="login-container">
//         <div>
//           <img className="img-fluid" src={loginImg} alt="" />
//         </div>
//         <div>
//           <div className="login-form-container">
//             <div className="w-50 mx-auto">
//               <h3 className="text-primary mt-2">Please Login</h3>

//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Control
//                     ref={emailRef}
//                     type="email"
//                     placeholder="Enter email"
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Control
//                     ref={passwordRef}
//                     type="password"
//                     placeholder="Password"
//                     required
//                   />
//                 </Form.Group>

//                 <Button variant="primary w-100  d-block mb-3" type="submit">
//                   Login
//                 </Button>
//               </Form>

//               {errorItem}

//               <p>
//                 Are You new here?
//                 <Link
//                   to="/register"
//                   className="text-primary pe-auto text-decoration-none"
//                   onClick={navigateRegister}
//                 >
//                   Please Register
//                 </Link>
//               </p>

//               <p>
//                 Forget Password?
//                 <button
//                   to="/register"
//                   className="btn btn-link text-primary pe-auto text-decoration-none"
//                   onClick={resetPassword}
//                 >
//                   Reset Password
//                 </button>
//               </p>
//               <SocialLogin></SocialLogin>
//               <ToastContainer />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
