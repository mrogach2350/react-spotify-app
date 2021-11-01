import { useState, useEffect } from "react";
import { getFollowedArtists } from "@/services/spotifyApi";
import { Card, ImageList, ImageListItem } from "@mui/material";

const Spotify = () => {
  const [followedArtists, setFollowedArtists] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchFollowedArtists = async () => {
      const data = await getFollowedArtists();
      console.log("data: ", data);
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
    <div>
      <Card>
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {imageUrls.map((item) => (
            <ImageListItem key={item}>
              <img src={item} alt={item} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Card>
    </div>
  );
};

export default Spotify;
