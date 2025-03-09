import VideoModular from "./VideoModular";

const VideoHome = () => {
  return (
    <VideoModular
      className="h-[600px]"
      divVideo="!w-[60%] m-auto shadow-xl shadow-[#00000030]"
      img={"./src/imgs/video-home.png"}
      video={
        "https://www.youtube.com/embed/nsDOKftuzA8?si=F1P8I9FDn3clFt6Z&amp;controls=0"
      }
    />
  );
};

export default VideoHome;
