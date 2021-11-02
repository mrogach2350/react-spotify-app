import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent } from '@mui/material';
import { getPlaylistTracks } from '@/services/spotifyApi';

const PlaylistDetailCard = ({ selectedPlaylist }) => {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    const fetchTracks = async () => {
      const data = await getPlaylistTracks(selectedPlaylist.id);
      const tracks = data.items.map((item) => item.track);
      setTracks(tracks);
    };
    fetchTracks();
  }, []);
  return (
    <Card sx={{ margin: '25px' }}>
      <CardHeader title={selectedPlaylist.name} subheader={selectedPlaylist.description} />
      <CardContent sx={{ maxHeight: '75vh', overflowY: 'scroll'  }}>
        {tracks.map((track) => (
          <div key={track.id}>{track.name}</div>
        ))}
      </CardContent>
    </Card>
  );
};

PlaylistDetailCard.propTypes = {
  selectedPlaylist: PropTypes.object,
};

export default PlaylistDetailCard;
