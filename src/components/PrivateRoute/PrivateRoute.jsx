import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStatus } from '../../hooks/useAuthStatus/useAuthStatus';
import Spinner from '../Spinner/Spinner';
export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
