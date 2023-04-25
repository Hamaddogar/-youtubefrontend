import React from "react";
import Tags from "../Tags/Tags";
import "./HomePage.css";
import VideoCard from "../VideoCard/VideoCard";

function HomePage() {
  return (
    <div className="homepage">
      <Tags />
      <VideoCard
        thumbnail="https://img.youtube.com/vi/nLwb5ymdJ0A/maxresdefault.jpg"
        duration="01:33"
        ChannelName="Rialians On Earth"
        ChannelLogo="https://yt3.ggpht.com/Ldfl6ND7xdtRiwR9SwXhRZnNvwFQvtQoFFLeTOmSdxf0ExCYFFeRuDRzIFXXRtvy3ygD5Oa5uyA=s68-c-k-c0x00ffffff-no-rj"
        title="Techno Mix 2023 | Space odyssey"
        views="59k views"
        time="6 hours ago"
      />
      <VideoCard
        thumbnail="https://img.youtube.com/vi/aWvfd5PY3nI/maxresdefault.jpg"
        duration="19:43"
        ChannelName="Azon Tv"
        ChannelLogo="https://yt3.ggpht.com/bxSwDRtEMSzHrcC9HYA-pH_VP0vgEFuASGNCJFZCqBr2xiz37a67XPgpyKNq-23NffgiQlfurQ=s68-c-k-c0x00ffffff-no-rj"
        title="Lu Shayn sobiq SSSR davlatlari suverenitetini shubha ostiga oldi"
        views="6.9k views"
        time="3 hours ago"
      />
      <VideoCard
        thumbnail="https://img.youtube.com/vi/ykURWvAo6Eg/maxresdefault.jpg"
        duration="58:52"
        ChannelName="Lost In Lofi"
        ChannelLogo="https://yt3.ggpht.com/LipLc6hxpq-n9APdwzNRlyjcKsHeTae3PwTP9pbDYpSDQPrxmUdwYbLNwYOyw2wKJduXnFU7=s88-c-k-c0x00ffffff-no-rj"
        title="Kyoto Sunset ☯︎ Japanese Lofi HipHop Mix"
        views="2.9M views"
        time="2 years ago"
      />
      <VideoCard
        thumbnail="https://img.youtube.com/vi/e3fz3dqhN44/maxresdefault.jpg"
        duration="18:12"
        ChannelName="Cleo Abram"
        ChannelLogo="https://yt3.ggpht.com/U8iCRHhvytOb0QXW5lFd59uMiT_BKVo0fcJ_y7ZdAPEIwdUGvTjRRO5OpGKLMYua_Y1qanQu=s88-c-k-c0x00ffffff-no-rj"
        title="Quantum Computers, explained with MKBHD"
        views="2.6M views"
        time="2 weeks ago"
      />
      <VideoCard
        thumbnail="https://img.youtube.com/vi/uRQH2CFvedY/maxresdefault.jpg"
        duration="5:17:48"
        ChannelName="freeCodeCamp.org"
        ChannelLogo="https://yt3.ggpht.com/ytc/AGIKgqMl9TL4OpwS8Zc5jHrNnfO01f_Wbovye9mQzfp36Q=s88-c-k-c0x00ffffff-no-rj"
        title="ChatGPT Course – Use The OpenAI API to Code 5 Projects"
        views="210K views"
        time="5 days ago"
      />
      <VideoCard
        thumbnail="https://img.youtube.com/vi/pjPjvCGS-io/maxresdefault.jpg"
        duration="6:15"
        ChannelName="Inspiring"
        ChannelLogo="https://yt3.ggpht.com/Fhoq9s4Rm0PYXmcN1PU_oJ34Q4nLSofGf78qX17B0aQH5EQQhVrNU9pHylfQMmzaze4kILtKHw=s88-c-k-c0x00ffffff-no-rj"
        title="DO NOT LET THEM CONTROL YOU! | Andrew Tate Motivational Speech"
        views="21K views"
        time="4 days ago"
      />
      <VideoCard
        thumbnail="https://img.youtube.com/vi/ZN_KbXCa4hY/maxresdefault.jpg"
        duration="37:33"
        ChannelName="Muhammad Dibirov | محمد ديبيروف "
        ChannelLogo="https://yt3.ggpht.com/wDl1P_UboCY2MjOCPSvrqXzd9TUS8cNSk8sL4h02ESAGxHIy2EL262sGsyKuKk1rnTY2ko7oUg=s88-c-k-c0x00ffffff-no-nd-rj"
        title="Muhammad Dibirov - Surah Yusuf | محمد ديبيروف - سورة يوسف (كاملة)"
        views="272K views"
        time="8 month ago"
      />
      <VideoCard
        thumbnail="https://img.youtube.com/vi/-gYpCIbZjUQ/maxresdefault.jpg"
        duration="10:59"
        ChannelName="WordToTheWise"
        ChannelLogo="https://yt3.ggpht.com/ytc/AGIKgqNI0aHOKipz_SWgjIYt61BQFXGJh2cX51tA03RP=s88-c-k-c0x00ffffff-no-rj"
        title="You Should Be A Monster | Jordan Peterson Motivation"
        views="921K views"
        time="4 month ago"
      />
    </div>
  );
}

export default HomePage;
