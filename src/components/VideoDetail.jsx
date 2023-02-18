import { CheckCircle } from "@mui/icons-material";
import { Typography, Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data.items[0]));
  }, [id]);

  if (!videoDetails?.snippet) {
    return <div>Loading</div>;
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <Box sx={{ minHeight: "95vh", backgroundColor: "#111", color: "#fff" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              variant="h5"
              p={2}
              sx={{ fontWeight: "bold", marginBottom: "8px", color: "#fff" }}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="subtitle2" sx={{ marginRight: "12px", color: '#fff' }}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: 12, color: "#aaa", marginLeft: "6px" }} />
                </Typography>
              </Link>
              <Stack direction="row" alignItems="center">
                <Typography variant="subtitle2" sx={{ marginRight: "8px", color: '#fff' }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
