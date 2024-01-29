import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Router } from './Router';

import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { setUser } from './store/authSlice';
import { useAppDispatch } from './store/hooks';

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setUser(currentUser?.email));
    });

    return () => {
      unsubscribe();
    };
  });


  return (
    // {/* <BrowserRouter basename='Netflix'> */}
    <BrowserRouter>
      <Navbar />
      <Router />
      <ToastContainer
        theme="dark"
        autoClose={1000}
        transition={Bounce}
      />
    </BrowserRouter>
  );
};
