import React, { useState, useEffect } from 'react';
import { getFollowedArtists } from '@/services/spotifyApi';
import { Card, CardContent, CardHeader, ImageList, ImageListItem } from '@mui/material';

const FollowedArtistsCard = () => {
  const [followedArtists, setFollowedArtists] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchFollowedArtists = async () => {
      const data = await getFollowedArtists();
      console.log('data: ', data);
      setFollowedArtists(data?.artists.items);
    };
    fetchFollowedArtists();
  }, []);

  useEffect(() => {
    if (followedArtists && followedArtists.length !== 0) {
      const urls = followedArtists.map((x) => x.images[0].url);
      setImageUrls(urls);
    }
  }, [followedArtists]);

  return (
    <Card sx={{ margin: '25px' }} raised="2">
      <CardHeader title="Followed Artists" />
      <CardContent>
        <ImageList variant="quilted" cols={4} rowHeight={121}>
          {imageUrls.map((item) => (
            <ImageListItem key={item}>
              <img src={item} alt={item} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </CardContent>
    </Card>
  );
};

export default FollowedArtistsCard;
