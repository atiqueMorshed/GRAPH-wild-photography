import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import FormError from '../Shared/FormError/FormError';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';

const Register = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  const termsCheckRef = useRef('');

  const navigate = useNavigate();

  const [authenticatedUser, authenticatedLoading] = useAuthState(auth);

  const [createUserWithEmailAndPassword, user, loading, userCreationError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [formError, setFormError] = useState({});

  let formErrorTimeout;

  useEffect(() => {
    return () => {
      clearTimeout(formErrorTimeout);
    };
  }, [formErrorTimeout]);

  useEffect(() => {
    if (user || authenticatedUser) navigate('/');
  }, [user, authenticatedUser, navigate]);

  const handleSignUpWithEmalAndPassword = async (e) => {
    e.preventDefault();
    clearTimeout(formErrorTimeout);

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const termsCheck = termsCheckRef.current.checked;

    let hasError = false;

    if (name.length < 3) {
      hasError = true;
      setFormError((prev) => ({
        nameInvalid: 'Name has to be of atleast 3 characters',
      }));
      nameRef.current.value = '';
    }

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

    if (password !== confirmPassword) {
      hasError = true;
      setFormError((prev) => ({
        ...prev,
        passwordsDontMatch: 'Passwords must match.',
      }));
      confirmPasswordRef.current.value = '';
    }

    if (!termsCheck) {
      hasError = true;
      setFormError((prev) => ({
        ...prev,
        uncheckedTerms: 'You must accept the terms.',
      }));
    }

    if (!hasError) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    } else {
      formErrorTimeout = setTimeout(() => setFormError({}), 5000);
    }
  };

  return loading || authenticatedLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="max-w-[600px] mx-auto flex justify-center my-20">
      <form
        className=" px-16 py-20 shadow"
        onSubmit={handleSignUpWithEmalAndPassword}
      >
        <h1 className="text-3xl font-medium pb-4 text-center mb-8">Register</h1>

        <div className="mb-8">
          <input
            ref={nameRef}
            type="name"
            className="shadow-sm border text-sm rounded block  w-[250px] md:w-[350px] p-2"
            placeholder="Full Name"
            required
          />
          <FormError error={formError?.nameInvalid} />
        </div>

        <div className="mb-8">
          <input
            ref={emailRef}
            type="email"
            className="shadow-sm border text-sm rounded block  w-[250px] md:w-[350px] p-2"
            placeholder="Email"
            required
          />
          <FormError error={formError?.emailInvalid} />
        </div>

        <div className="mb-8">
          <input
            ref={passwordRef}
            type="password"
            className="shadow-sm border text-sm rounded block  w-[250px] md:w-[350px] p-2"
            placeholder="Password"
            required
          />
          <FormError error={formError?.passwordLength} />
          <FormError error={formError?.passwordUppercase} />
          <FormError error={formError?.passwordNumber} />
        </div>

        <div className="mb-8">
          <input
            ref={confirmPasswordRef}
            type="password"
            className="shadow-sm border text-sm rounded block  w-[250px] md:w-[350px] p-2"
            placeholder="Confirm Password"
            required
          />
          <FormError error={formError?.passwordsDontMatch} />
        </div>

        <div className="input-group flex gap-2 items-center mb-6">
          <input ref={termsCheckRef} type="checkbox" id="checkTerms" />
          <p
            className={`${
              formError?.uncheckedTerms ? 'text-red-500' : ''
            } text-sm`}
          >
            Accept Terms and Conditions.
          </p>
        </div>

        <button
          type="submit"
          className="border px-12 py-2 rounded bg-gray-900 hover:bg-gray-800 transition duration-350 text-white text-center mb-2"
        >
          Register
        </button>
        <FormError error={userCreationError?.message} />

        <p className="text-sm mt-3">
          Already Registered?{' '}
          <Link className="hover:underline font-medium" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
