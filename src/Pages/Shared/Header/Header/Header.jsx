import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomLink from '../CustomLink/CustomLink';
import MenuLinks from '../MenuILinks/MenuLinks';
import HashLink from '../HashLink/HashLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase/firebase.init';
import { sendEmailVerification, signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [emailVerificationWarning, setEmailVerificationWarning] = useState(
    'Account not verified'
  );
  const [error, setError] = useState();

  console.log(user);

  const [closeEmailVerificationWarning, setCloseEmailVerificationWarning] =
    useState(false);

  let errorTimeout;

  useEffect(() => {
    return () => {
      clearTimeout(errorTimeout);
    };
  }, [errorTimeout]);

  const handleSendEmailVerification = async () => {
    clearTimeout(errorTimeout);
    try {
      await sendEmailVerification(auth.currentUser);
      setEmailVerificationWarning('Verification email sent!');
    } catch (error) {
      setError(error?.message);
      errorTimeout = setTimeout(() => setError(), 5000);
    }
  };

  return (
    <div className="">
      <div className="flex justify-between md:justify-center items-center py-4 w-10/12 mx-auto">
        <div className="hidden md:flex lg:gap-4">
          <CustomLink to="/">Home</CustomLink>
          <HashLink to="/#services" id="services">
            Services
          </HashLink>
        </div>

        <Link to="/">
          <div className="flex flex-col justify-center items-center md:mx-5 lg:mx-20">
            <h1 className="font-montserratSubrayada text-2xl font-semibold">
              GRAPH
            </h1>
            <p className="font-monteCarlo text-xl">Wild Life Photography</p>
          </div>
        </Link>

        <div className="hidden md:flex gap-4">
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/blog">Blog</CustomLink>

          {user ? (
            <button onClick={() => signOut(auth)}>Logout</button>
          ) : (
            <CustomLink to="/login">Login</CustomLink>
          )}
        </div>

        <div className="burger-menu md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="w-8 h-8"
            onClick={() => setToggleMenu((prev) => !prev)}
          />
        </div>
      </div>

      {toggleMenu && (
        <div className="nav-links flex flex-col items-center pb-4 mb-8 md:hidden w-9/12 mx-auto">
          <MenuLinks />
        </div>
      )}
      {!closeEmailVerificationWarning && user && !user?.emailVerified && (
        <>
          <div
            className={`flex justify-center items-center gap-2 py-2 border ${
              emailVerificationWarning === 'Verification email sent!'
                ? 'text-blue-700'
                : 'text-red-500'
            }`}
          >
            <p className="text-sm text-center">
              {emailVerificationWarning}{' '}
              <span className="hidden md:inline">
                , Please check your email.
              </span>
            </p>
            <button
              onClick={handleSendEmailVerification}
              className="text-sm underline hover:text-gray-700 cursor-pointer"
            >
              Resend Email
            </button>
            <FontAwesomeIcon
              className="text-gray-700 h-5 w-5 cursor-pointer hover:text-gray-500"
              icon={faXmark}
              onClick={() => setCloseEmailVerificationWarning(true)}
            />
          </div>
          {error && (
            <p className="text-center py-2 border text-sm text-red-500">
              {error}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
