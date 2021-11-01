import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import qs from "query-string";
const responseType = "token";
const clientId = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_APP_SPOTIFY_REDIRECT_URI;

const initiateSpotifyLogin = () => {
  const spotifyAuthOptions = {
    response_type: encodeURI(responseType),
    client_id: encodeURI(clientId),
    redirect_uri: encodeURI(redirectUri),
  };

  const queryString = qs.stringify(spotifyAuthOptions);
  const spotifyUrl = `https://accounts.spotify.com/authorize?${queryString}`;
  document.location = spotifyUrl;
};

export const MyAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button onClick={initiateSpotifyLogin} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar