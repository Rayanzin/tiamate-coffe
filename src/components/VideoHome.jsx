import VideoModular from "./VideoModular";
import img from "../imgs/video-franquado.png"

const VideoHome = () => {
  return (
    <>
      <div className="w-[1167px] m-auto">
        <h2 className="text-start font-bold text-[50px] text-primaria leading-[100%]">
          Coisas boas acontecem àqueles <br /> que gostam de café
        </h2>
      </div>
      <VideoModular
        className="h-[600px]"
        divVideo="!w-[1168px] m-auto shadow-xl shadow-[#00000030]"
        img={img}
        video={
          "https://www.youtube.com/embed/nsDOKftuzA8?si=F1P8I9FDn3clFt6Z&amp;controls=0"
        }
      />
    </>
  );
};

export default VideoHome;
