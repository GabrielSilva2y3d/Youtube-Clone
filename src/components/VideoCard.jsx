import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet} }) => {
  return (
    <Card sx={{ width: {md: '300px', xs: '100%'}, boxShadow:'none', borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia 
        component="img"
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: 358, height: 180}}
      />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: '106px'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '6px'}}/>
          </Typography>
      </Link>
        </CardContent>
    </Card>
  );
};

export default VideoCard;
