import { useEffect } from 'react';
import Cookies from 'js-cookie';

const Logout = () => {
  useEffect(() => {
    // Remove the refresh token and access token from local storage
    Cookies.set('refreshToken', null);
    Cookies.set('accessToken', null);
    localStorage.setItem('userLoginstatus',false);
    // Redirect to the login page
    window.location.href = '/logins';
  }, []);
  return null;
}
export default Logout
