import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import YtLogo from "/Users/majiydiy/Desktop/myapp/src/assets/youtubelogo.png";
import VideoCall from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar/";
import Microphone from "@mui/icons-material/Mic";
import "./Header.css";

import Home from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import {
  History,
  OndemandVideo,
  WatchLater,
  ThumbUp,
  ExpandMoreOutlined,
  YouTube,
  Theaters,
  SportsEsports,
  Settings,
  Flag,
  Help,
  Feedback,
} from "@mui/icons-material";
import SidebarRow from "../SidebarRow/SidebarRow";
import "../Sidebar.css";
import SubscriptionRow from "../SubscriptionRow/SubscriptionRow";

function Header() {
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const MiniSidebar = document.querySelector(".mini_sidebar");
    if (sidebar) {
      sidebar.classList.toggle("active");
    }
    if (MiniSidebar) {
      MiniSidebar.classList.toggle("active");
    }
  };

  return (
    <div className="parent_header">
      <div className="header">
        <div className="header_left">
          <div onClick={toggleSidebar}>
            <MenuIcon />
          </div>
          <img className="header_logo" src={YtLogo} />
        </div>
        <div className="header_input">
          <div className="header_middle">
            <input className="SearchInput" placeholder="Search" type="text" />
            <SearchIcon className="header_searchBtn" />
          </div>
          <Microphone className="header_icons" />
        </div>
        <div className="header_right">
          <VideoCall className="header_icons" />
          <AppsIcon className="header_icons" />
          <NotificationIcon className="header_icons" />
          <Avatar src="https://yt3.ggpht.com/MYqdBW04JAm_YJl35ukUoMa8qflwyxW6Ez9tv4B7abO1z_z9WxNxDEefMIdTml_JM9T3bm51Qg=s88-c-k-c0x00ffffff-no-rj-mo" />
        </div>
      </div>
      <div className="sidebar">
        <SidebarRow icon={Home} title="Home" />
        <SidebarRow icon={ExploreIcon} title="Explore" />
        <SidebarRow icon={SubscriptionsIcon} title="Subscriptions" />
        <hr></hr>
        <SidebarRow icon={VideoLibraryIcon} title="Library" />
        <SidebarRow icon={History} title="History" />
        <SidebarRow icon={OndemandVideo} title="Your Videos" />
        <SidebarRow icon={WatchLater} title="Watch Later" />
        <SidebarRow icon={ThumbUp} title="Liked" />
        <SidebarRow icon={ExpandMoreOutlined} title="Show More" />
        <hr />
        <h4 className="sidebar_heading">SUBSRIPTIONS</h4>
        <SubscriptionRow
          img="https://yt3.ggpht.com/NrIEzYVk5mBH9yRIefVDnvyD7YQpvbmOUx-LRNaC7KCc1DQ82B-bvURmZbEhZoCllobJjCBq=s88-c-k-c0x00ffffff-no-rj"
          name="Abao in Tokyo"
        />
        <SubscriptionRow
          img="https://yt3.ggpht.com/wGLEN8t6JQarGZhUcqhZlIaGv5tvzTpnWHi-I_8jlIxbDvnA0GSlvjFyOXfObxvfBEbJqs1shQ=s88-c-k-c0x00ffffff-no-rj"
          name="Hijazi Records"
        />
        <SubscriptionRow
          img="https://yt3.ggpht.com/ytc/AGIKgqM8ruPpsZQbB35xIWK5RSugC1FqIKBBg-fIE3U2SQ=s88-c-k-c0x00ffffff-no-rj"
          name="dndm"
        />
        <SubscriptionRow
          img="https://yt3.ggpht.com/wDl1P_UboCY2MjOCPSvrqXzd9TUS8cNSk8sL4h02ESAGxHIy2EL262sGsyKuKk1rnTY2ko7oUg=s88-c-k-c0x00ffffff-no-rj"
          name="Muhammad Dibirov"
        />
        <SubscriptionRow
          img="https://yt3.ggpht.com/bxSwDRtEMSzHrcC9HYA-pH_VP0vgEFuASGNCJFZCqBr2xiz37a67XPgpyKNq-23NffgiQlfurQ=s88-c-k-c0x00ffffff-no-rj"
          name="Azon Tv"
        />
        <SidebarRow icon={ExpandMoreOutlined} title="Show More" />
        <hr />
        <h4 className="sidebar_heading">MORE ON YOUTUBE</h4>
        <SidebarRow icon={YouTube} title="Youtube Premium" />
        <SidebarRow icon={Theaters} title="Movies" />
        <SidebarRow icon={SportsEsports} title="Gaming" />
        <hr />
        <SidebarRow icon={Settings} title="Settings" />
        <SidebarRow icon={Flag} title="Report History" />
        <SidebarRow icon={Help} title="Help" />
        <SidebarRow icon={Feedback} title="Send feedback" />
        <hr></hr>
        <div className="footer">
          <p>About &nbsp; Press &nbsp; Copyright</p>
          <p>Contact us &nbsp; Creators</p>
          <p>Advertise &nbsp; Developers</p>
          <br />
          <p>Terms &nbsp; Privacy &nbsp; Policy & Safety</p>
          <p>How Youtube works</p>
          <p>Test new features</p>
          <br />
          <p style={{ color: "rgb142,142,142" }}>&#169; 2023 Google LLC</p>
        </div>
      </div>
      <div className="mini_sidebar">
        <div className="miniDiv">
          <Home />
          <p>Home</p>
        </div>
        <div className="miniDiv">
          <ExploreIcon />
          <p>Explore</p>
        </div>
        <div className="miniDiv">
          <SubscriptionsIcon />
          <p>Subscriptions </p>
        </div>
        <div className="miniDiv">
          <VideoLibraryIcon />
          <p>Library</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
