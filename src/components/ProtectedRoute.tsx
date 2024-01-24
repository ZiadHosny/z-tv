import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children }: { children: any }) => {
  const { user } = UserAuth();

  return !user ? <Navigate to="/" /> : children;
};
