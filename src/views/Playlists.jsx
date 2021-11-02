import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
import ListUserPlaylists from '../components/ListUserPlaylists';
import PlaylistDetailCard from '../components/PlaylistDetailCard';


const Playlists = () => {
  const isLoggedIn = !!useSelector((state) => state.auth.token);
  const [selectedPlaylist, setSelectedPlaylist] = useState({});

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
          <ListUserPlaylists selectedId={selectedPlaylist.id} handleSelectPlaylist={setSelectedPlaylist} />
          {selectedPlaylist.id && (
            <PlaylistDetailCard selectedPlaylist={selectedPlaylist}>Selected PlaylistId: {selectedPlaylist.id}</PlaylistDetailCard>
          )}
        </Box>
      ) : (
        <Typography> Please Login </Typography>
      )}
    </React.Fragment>
  );
};

export default Playlists;
