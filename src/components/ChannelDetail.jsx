import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, ChannelCard } from "./";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  console.log(videos, channelDetail);

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?.channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])
  

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(185,34,34,1) 50%, rgba(0,0,0,1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" /> 
      </Box>
      <Box display="flex" p="2">
      <Box sx={{mr: {sm: '110px'}}}/>
          <Videos videos={videos}/> 
      </Box>
    </Box>
  );
};

export default ChannelDetail;
