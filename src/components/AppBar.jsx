import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import qs from 'query-string';

const responseType = 'token';
const clientId = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_APP_SPOTIFY_REDIRECT_URI;

const initiateSpotifyLogin = () => {
  const spotifyAuthOptions = {
    response_type: encodeURI(responseType),
    client_id: encodeURI(clientId),
    redirect_uri: encodeURI(redirectUri),
    scope:
      'playlist-modify-private user-read-private user-read-email user-read-currently-playing user-read-playback-state user-library-read user-follow-read app-remote-control user-read-recently-played user-top-read',
  };

  const queryString = qs.stringify(spotifyAuthOptions);
  const spotifyUrl = `https://accounts.spotify.com/authorize?${queryString}`;
  // eslint-disable-next-line no-undef
  document.location = spotifyUrl;
};

export const MyAppBar = () => {
  const userData = useSelector((state) => state.auth.userData);
  const token = useSelector((state) => state.auth.token);
  const isLoggedIn = !!token;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {isLoggedIn ? (
            <Typography>{userData?.display_name || 'Welcome'}</Typography>
          ) : (
            <Button onClick={initiateSpotifyLogin} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MyAppBar;
