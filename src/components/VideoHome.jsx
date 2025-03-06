import VideoModular from "./VideoModular";

const VideoHome = () => {
  return (
    <VideoModular
      className="max-w-[1186px] h-[600px] my-[135px] m-auto"
      img={"./src/imgs/video-home.png"}
      video={
        "https://www.youtube.com/embed/nsDOKftuzA8?si=F1P8I9FDn3clFt6Z&amp;controls=0"
      }
    />
  );
};

export default VideoHome;
