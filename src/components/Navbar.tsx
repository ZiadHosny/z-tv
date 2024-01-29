import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import {  signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase';
import { errorMsg, loadingMsg, logoutMsg } from '../utils/messages';

export const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  
  const navigate = useNavigate();

  const handleLogout = async () => {

    toast.promise(async () => {
      await signOut(auth);
    }, {
      pending: loadingMsg,
      success: logoutMsg,
      error: {
        render({ toastProps }) {
          const error = toastProps.data as any
          return error.code ?? errorMsg
        },
      },
    })

    navigate('/');
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          ZTV
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
