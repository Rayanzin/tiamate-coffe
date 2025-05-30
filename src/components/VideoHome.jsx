import VideoModular from "./VideoModular";
import img from "../imgs/video-franquado.png"

const VideoHome = () => {
  return (
    <>
      <div className="max-w-[1167px] m-auto max-[1185px]:px-[20px]">
        <h2 className="text-start font-bold text-[50px] text-primaria leading-[100%] max-[800px]:text-[32px] max-sm:text-[24px] max-[420px]:text-[18px]">
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
