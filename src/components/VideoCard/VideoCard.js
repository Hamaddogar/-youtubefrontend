import React from "react";
import "./VideoCard.css";
import { MoreVert, PlaylistAdd, WatchLater } from "@mui/icons-material";
import { Avatar } from "@mui/material";
function VideoCard(props) {
  return (
    <div className="VideoCard ">
      <div className="WatchLater">
        <WatchLater className="VideoIcon" />
      </div>
      <div className="PlaylistAdd">
        <PlaylistAdd className="VideoIcon" />
      </div>
      <img className="VideoImg" src={props.thumbnail} />
      <div className="duration">{props.duration}</div>
      <div className="VideoData">
        <Avatar src={props.ChannelLogo} />
        <div className="ChannelDetails">
          <h5>{props.title}</h5>
          <p className="cname">{props.ChannelName}</p>
          <p>
            {props.views} &bull; {props.time}
          </p>
        </div>
        <MoreVert className="moreIcon" />
      </div>
    </div>
  );
}

export default VideoCard;
