import React from 'react';
import { Navigate } from 'react-router-dom';

import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';

import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import SocialButton from '../SocialButton/Socialbutton';
import auth from '../../../../Firebase/firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const SocialLogin = ({ from }) => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  if (googleUser || githubUser) return <Navigate to={from} />;

  return googleLoading || githubLoading ? (
    <LoadingSpinner notFullHeight />
  ) : (
    <>
      <p style={{ lineHeight: 0.1 }} className="border-b text-center mt-7 mb-4">
        <span className="p-2 bg-white">OR</span>
      </p>
      <SocialButton
        icon={<FontAwesomeIcon className="w-7 h-7" icon={faGoogle} />}
        text="Login with Google"
        error={googleError}
        signInWithGoogle={signInWithGoogle}
      />
      <SocialButton
        icon={<FontAwesomeIcon className="w-7 h-7" icon={faGithub} />}
        text="Login with Github"
        error={githubError}
        signInWithGoogle={signInWithGithub}
      />
    </>
  );
};

export default SocialLogin;
