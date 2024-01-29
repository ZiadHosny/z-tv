import { Navigate } from 'react-router-dom';
// import { UserAuth } from '../context/AuthContext';
import { useAppSelector } from '../store/hooks';

export const ProtectedRoute = ({ children }: { children: any }) => {
  const user = useAppSelector((state) => state.auth.user);


  return !user ? <Navigate to="/" /> : children;
};
