import VideoModular from "./VideoModular";

const VideoHome = () => {
  return (
    <>
      <h2 className="font-bold text-[50px] text-primaria ml-[138px] leading-[100%]">Coisas boas acontecem àqueles <br /> que gostam de café</h2>
      <VideoModular
        className="h-[600px]"
        divVideo="!w-[1168px] m-auto shadow-xl shadow-[#00000030]"
        img={"./src/imgs/video-home.png"}
        video={
          "https://www.youtube.com/embed/nsDOKftuzA8?si=F1P8I9FDn3clFt6Z&amp;controls=0"
        }
      />
    </>
  );
};

export default VideoHome;
