import { useEffect, useCallback } from 'react';
import qs from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserDetails } from '@/services/spotifyApi';
import { SET_USER_DATA, SET_API_TOKEN } from '@/store/auth';

const SpotifyRedirect = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const setAccessToken = useCallback(async () => {
    const data = qs.parse(location.hash);
    const newToken = data['access_token'];
    await dispatch(SET_API_TOKEN(newToken));
  });
  const setUserDetails = useCallback(async () => {
    const userDetails = await getCurrentUserDetails();
    await dispatch(SET_USER_DATA(userDetails));
    history.push('/');
  });

  useEffect(() => {
    setAccessToken();
  }, []);

  useEffect(() => {
    console.log('setUserDetails: ', token)
    if (token) {
      setUserDetails();
    }
  }, [token]);

  return <div>LoggingIn...</div>;
};

export default SpotifyRedirect;
