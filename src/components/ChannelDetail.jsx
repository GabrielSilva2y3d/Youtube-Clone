import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";

const ChannelDetail = () => {
  const { channelId } = useParams();
  const [channelData, setChannelData] = useState(null);
  const [videosData, setVideosData] = useState(null);
  return (
    <Box></Box>
  );
};

export default ChannelDetail;
