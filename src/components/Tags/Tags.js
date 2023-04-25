import React, { useEffect } from "react";
import "./Tags.css";
import { NavigateNext } from "@mui/icons-material";

function Tags() {
  useEffect(() => {
    const tags = document.querySelector(".minitag");
    if (tags) {
      tags.forEach((tag) => {
        tag.addEventListener("click", () => {
          tags.forEach((tag) => tag.classList.remove("active"));
          if (tag) {
            tag.classList.add("active");
          }
        });
      });
    }
  }, []);

  return (
    <div className="tags">
      <div className="miniTag active">All</div>
      <div className="miniTag">Mixes</div>
      <div className="miniTag">Music</div>
      <div className="miniTag">Live</div>
      <div className="miniTag">Gaming</div>
      <div className="miniTag">Podcasts</div>
      <div className="miniTag">Sketch Comedy</div>
      <div className="miniTag">Recently Uploaded</div>
      <NavigateNext className="next" />
    </div>
  );
}

export default Tags;
