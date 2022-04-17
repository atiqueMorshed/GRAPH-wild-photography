import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import FormError from '../Shared/FormError/FormError';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';
import SocialLogin from '../Shared/SocialLogin/SocialLogin/SocialLogin';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/';

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const [formError, setFormError] = useState({});

  const [authenticatedUser, authenticatedLoading] = useAuthState(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  let formErrorTimeout;

  useEffect(() => {
    if (user) navigate(from, { replace: true });
  }, [user, navigate, from]);

  useEffect(() => {
    if (authenticatedUser) navigate(from);
  }, [authenticatedUser, navigate, from]);

  useEffect(() => {
    return () => {
      clearTimeout(formErrorTimeout);
    };
  }, [formErrorTimeout]);

  const handleLoginWithEmailAndPassword = (e) => {
    e.preventDefault();

    clearTimeout(formErrorTimeout);
    setFormError({});

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let hasError = false;

    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      hasError = true;
      setFormError((prev) => ({
        ...prev,
        emailInvalid: 'Please enter a valid email.',
      }));
      emailRef.current.value = '';
    }

    if (password?.length < 6 || password?.length > 20) {
      hasError = true;
      setFormError((prev) => ({
        ...prev,
        passwordLength: 'Password length must be between 6, 20',
      }));
      passwordRef.current.value = '';
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      hasError = true;
      setFormError((prev) => ({
        ...prev,
        passwordUppercase: 'Must contain uppercase.',
      }));
      passwordRef.current.value = '';
    }

    if (!/(?=.*\d)/.test(password)) {
      hasError = true;
      setFormError((prev) => ({
        ...prev,
        passwordNumber: 'Must contain number.',
      }));
      passwordRef.current.value = '';
    }

    if (!hasError) {
      signInWithEmailAndPassword(email, password);
    } else {
      formErrorTimeout = setTimeout(() => setFormError({}), 5000);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setFormError((prev) => ({
        ...prev,
        emailInvalid: 'Please enter a valid email.',
      }));
      emailRef.current.value = '';
    } else {
      await sendPasswordResetEmail(email);
      toast.success('Reset Password Email Sent!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return loading || authenticatedLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="w-10/12 max-w-[600px] mx-auto flex justify-center my-20">
        <form
          className="px-4 md:px-16 py-20 shadow"
          onSubmit={handleLoginWithEmailAndPassword}
        >
          <h1 className="text-3xl font-medium pb-4 text-center mb-8">Login</h1>

          <div className="mb-8">
            <input
              ref={emailRef}
              type="email"
              className="shadow-sm border text-sm rounded block w-[250px] md:w-[350px] p-2"
              placeholder="Email"
              required
            />
            <FormError error={formError?.emailInvalid} />
          </div>

          <div className="mb-8">
            <input
              ref={passwordRef}
              type="password"
              className="shadow-sm border text-sm rounded block w-[250px] md:w-[350px] p-2"
              placeholder="Password"
              required
            />
            <FormError error={formError?.passwordLength} />
            <FormError error={formError?.passwordUppercase} />
            <FormError error={formError?.passwordNumber} />
          </div>

          <button
            type="submit"
            className="border px-12 py-2 rounded bg-gray-900 hover:bg-gray-800 transition duration-350 text-white text-center mb-2"
          >
            Login
          </button>
          <FormError error={error?.message} />

          <p className="text-sm mt-5">
            Forgot Password?{' '}
            <button
              className="hover:underline font-medium"
              onClick={handleResetPassword}
            >
              Reset
            </button>
          </p>
          <FormError className="pt-2" error={resetError?.message} />

          <p className="text-sm mt-5">
            Dont have an account?{' '}
            <Link className="hover:underline font-medium" to="/register">
              Register
            </Link>
          </p>

          <SocialLogin from={from} />
        </form>
      </div>
    </>
  );
};

export default Login;
