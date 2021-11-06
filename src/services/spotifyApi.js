import axios from 'axios';
import store, { selectToken } from '@/store';
import qs from 'query-string';
import { RESET_API_TOKEN } from '@/store/auth';

export const buildHeader = () => {
  const token = selectToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getCurrentUserDetails = async () => {
  const queryUrl = `${import.meta.env.VITE_APP_SPOTIFY_BASE_URL}/me`;
  try {
    const response = await axios.get(queryUrl, { ...buildHeader() });
    return await response.data;
  } catch (error) {
    console.log('my error: ', error);
    store.dispatch(RESET_API_TOKEN);
  }
};

export const getFollowedArtists = async () => {
  const queryString = qs.stringify({ type: 'artist' });
  const queryUrl = `${import.meta.env.VITE_APP_SPOTIFY_BASE_URL}/me/following?${queryString}`;
  try {
    const response = await axios.get(queryUrl, { ...buildHeader() });
    return await response.data;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const getUserPlaylists = async ({ limit = 20, offset = 0 }) => {
  const queryString = qs.stringify({ offset, limit });
  const queryUrl = `${import.meta.env.VITE_APP_SPOTIFY_BASE_URL}/me/playlists?${queryString}`;
  try {
    const response = await axios.get(queryUrl, { ...buildHeader() });
    return await response.data;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const getPlaylistTracks = async (playlistId) => {
  const queryUrl = `${import.meta.env.VITE_APP_SPOTIFY_BASE_URL}/playlists/${playlistId}/tracks`;
  try {
    const response = await axios.get(queryUrl, { ...buildHeader() });
    return await response.data;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const reorderPlaylist = async ({ playlistId, rangeStart, insertBefore }) => {
  const queryUrl = `${import.meta.env.VITE_APP_SPOTIFY_BASE_URL}/playlists/${playlistId}/tracks`;
  try {
    const response = await axios.put(
      queryUrl,
      { range_start: rangeStart, insert_before: insertBefore ++ },
      {
        ...buildHeader(),
      },
    );
    return await response.data;
  } catch (error) {
    console.log('error: ', error);
  }
};
