import VideoModular from "./VideoModular";

const VideoHome = () => {
  return (
    <VideoModular
      className=""
      img={"./src/imgs/video-home.png"}
      video={
        "https://www.youtube.com/embed/nsDOKftuzA8?si=F1P8I9FDn3clFt6Z&amp;controls=0"
      }
    />
  );
};

export default VideoHome;
