import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, CircularProgress } from '@mui/material';
import { getPlaylistTracks, reorderPlaylist } from '@/services/spotifyApi';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const PlaylistDetailCard = ({ selectedPlaylist }) => {
  const [trackList, setTrackList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTracks = async () => {
    setIsLoading(true);
    const data = await getPlaylistTracks(selectedPlaylist.id);
    const trackList = data.items.map((item) => item.track);
    setTrackList(trackList);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTracks();
  }, [selectedPlaylist]);

  const onDragEnd = ({ destination, source }) => {
    if (!destination.index || destination.index === source.index) {
      return;
    }

    const rangeStart = source.index;
    const insertBefore = destination.index;
    reorderPlaylist({
      playlistId: destination.droppableId,
      rangeStart,
      insertBefore,
    });
    fetchTracks();
    // const movedTrack = trackList.find((x) => x.id === draggableId);

    // let newTrackListOrder = [...trackList];
    // newTrackListOrder.splice(source.index, 1);
    // newTrackListOrder.splice(destination.index, 0, movedTrack);

    // setTrackList(newTrackListOrder);
  };

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
              {isLoading ? (
                <CircularProgress />
              ) : (
                <React.Fragment>
                  {trackList.map((track, index) => (
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
                </React.Fragment>
              )}
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
