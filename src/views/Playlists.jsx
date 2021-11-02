import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
import ListUserPlaylists from '../components/ListUserPlaylists';

const Playlists = () => {
  const isLoggedIn = !!useSelector((state) => state.auth.token);
  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
          <ListUserPlaylists />
          {/* <ListUserPlaylists /> */}
        </Box>
      ) : (
        <Typography> Please Login </Typography>
      )}
    </React.Fragment>
  );
};

export default Playlists;
