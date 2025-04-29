import VideoModular from "./VideoModular";
import img from "../imgs/video-franquado.png"

const VideoFranqueado = () => {
  return (
    <VideoModular
    className="max-w-[1170px] h-[600px] m-auto"
      video={
        "https://www.youtube.com/embed/RWCP7z8ufiA?si=828HURnf4QgOepgV&amp controls=0"
      }
      img={img}
    />
  );
};

export default VideoFranqueado;
