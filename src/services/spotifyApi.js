import axios from 'axios';
import store, { selectToken } from '@/store';
import qs from 'query-string';
import { RESET_API_TOKEN } from '@/store/auth';

export const getCurrentUserDetails = async () => {
  const token = selectToken();
  const queryUrl = `${import.meta.env.VITE_APP_SPOTIFY_BASE_URL}/me`;
  try {
    const response = await axios.get(queryUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.data;
  } catch (error) {
    console.log('my error: ', error);
    store.dispatch(RESET_API_TOKEN);
  }
};

export const getFollowedArtists = async () => {
  const token = selectToken();
  const queryString = qs.stringify({ type: 'artist' });
  const queryUrl = `${import.meta.env.VITE_APP_SPOTIFY_BASE_URL}/me/following?${queryString}`;
  try {
    const response = await axios.get(queryUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.data;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const getUserPlaylists = async () => {
  // eslint-disable-next-line no-unused-vars
  const token = selectToken();
};
