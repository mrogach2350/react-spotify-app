import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getUserPlaylists } from '@/services/spotifyApi';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  ListItemButton,
  List,
  Pagination,
} from '@mui/material';

const ListUserPlaylists = ({ handleSelectPlaylist, selectedId }) => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [limit] = useState(20);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchUsersPlaylists = async () => {
      const offset = (page - 1) * 20;
      const data = await getUserPlaylists({ limit, offset });
      const { items: playlists = [], total } = data;
      setPlaylists(playlists);
      const pages = Math.ceil(total / limit);
      setPages(pages);
    };
    fetchUsersPlaylists();
  }, [page]);

  const handlePagination = (_e, newPage) => setPage(newPage);

  return (
    <Card sx={{ margin: '25px' }}>
      <CardHeader title="My Playlists"></CardHeader>
      <CardContent>
        <List>
          {playlists.map((playlist) => (
            <ListItemButton
              selected={selectedId === playlist.id}
              onClick={() => handleSelectPlaylist(playlist)}
              key={playlist.id}
            >
              {playlist.name}
            </ListItemButton>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Pagination onChange={handlePagination} page={page} count={pages} />
      </CardActions>
    </Card>
  );
};

ListUserPlaylists.propTypes = {
  handleSelectPlaylist: PropTypes.func,
  selectedId: PropTypes.string,
};

export default ListUserPlaylists;
