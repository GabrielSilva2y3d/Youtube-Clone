import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card
      sx={{
        width: { xs: "320px", sm:'338px', md: "300px"},
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
        borderRadius: "4px",
        backgroundColor: "#222", 
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: '320px', sm: '338px', md:'300'}, height: {xs: '180px', sm: '200px', md: '160px'}}} 
        />
      </Link>
      <CardContent
        sx={{
          padding: "8px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{
              lineHeight: 1.2,
              color: "#fff",
              fontSize: "14px",
              marginBottom: "4px",
            }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
          }
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#aaa",
          }}
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            sx={{ lineHeight: 1.2 }}
            color="#ccc"
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "#ccc", ml: "4px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
