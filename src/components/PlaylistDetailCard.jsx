import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent } from '@mui/material';
import { getPlaylistTracks } from '@/services/spotifyApi';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

  const onDragEnd = () => {};

  return (
    <Card sx={{ margin: '25px' }}>
      <CardHeader title={selectedPlaylist.name} subheader={selectedPlaylist.description} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={selectedPlaylist.id}>
          {(provided) => (
            <CardContent
              ref={provided.innerRef}
              {...provided.droppableProps}
              sx={{ maxHeight: '75vh', overflowY: 'scroll' }}
            >
              {tracks.map((track, index) => (
                <Draggable key={track.id} draggableId={track.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {track.name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </CardContent>
          )}
        </Droppable>
      </DragDropContext>
    </Card>
  );
};

PlaylistDetailCard.propTypes = {
  selectedPlaylist: PropTypes.object,
};

export default PlaylistDetailCard;
