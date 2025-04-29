import React, { useRef } from "react";

const VideoModular = ({ className = "", divVideo = "", video, img }) => {
  const iframeRef = useRef(null);
  const botaoRef = useRef(null);
  const imagemvideoRef = useRef(null);
  const overlayRef = useRef(null);

  function startVideo() {
    const iframe = iframeRef.current;
    const botao = botaoRef.current;
    const imagemvideo = imagemvideoRef.current;
    const overlay = overlayRef.current;

    if (!iframe) return;

    let iframeSrc = iframe.src;
    if (!iframeSrc.includes("autoplay=1")) {
      iframe.src = iframeSrc + "&autoplay=1&mute=1";
    }

    setTimeout(() => {
      if (botao) botao.style.display = "none";
      if (imagemvideo) imagemvideo.style.display = "none";
      if (overlay) {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
      }
    }, 1500);
  }
  // sm -> 640px
  // md -> 768px
  // lg -> 1024px
  // xl -> 1280px
  // 2xl -> 1535px
  return (
    <section
      className={`w-full max-h-[500px] mb-[135px] mt-[83px] bg-white ${className} px-[20px] max-lg:h-[400px] max-md:h-[300px] max-[550px]:h-[200px] max-sm:my-[60px]`}
    >
      <div
        className={`relative !max-w-[100%] h-full flex justify-center items-center ${divVideo} `}
      >
        {/* RESPONSIVE IFRAME WRAPPER */}
        <div className="relative w-[100%] h-full">
          <iframe
            ref={iframeRef}
            className="absolute top-0 left-0 w-full h-full"
            width="560"
            height="315"
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <button
          ref={botaoRef}
          className="absolute z-10 flex flex-col gap-[22px] items-center max-md:gap-[16px] max-sm:gap-[10px]"
          onClick={startVideo}
        >
          <svg
            className="*:hover:fill-letras2 *:duration-200 duration-300 shadow-2xl active:shadow-primaria rounded-2xl max-md:w-[80%] max-sm:w-[60%] h-[100%]"
            width="166"
            height="113"
            viewBox="0 0 166 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 94.1666V18.8333C0 13.8384 2.18616 9.04808 6.07754 5.51615C9.96892 1.98422 15.2468 0 20.75 0H145.25C150.753 0 156.031 1.98422 159.923 5.51615C163.814 9.04808 166 13.8384 166 18.8333V94.1666C166 99.1615 163.814 103.952 159.923 107.484C156.031 111.016 150.753 113 145.25 113H20.75C15.2468 113 9.96892 111.016 6.07754 107.484C2.18616 103.952 0 99.1615 0 94.1666ZM70.4463 29.1257C69.6706 28.6245 68.7579 28.3266 67.8082 28.2649C66.8584 28.2032 65.9082 28.3799 65.0618 28.7757C64.2153 29.1715 63.5052 29.7711 63.0093 30.5089C62.5133 31.2466 62.2506 32.0941 62.2501 32.9583V80.0416C62.2506 80.9058 62.5133 81.7532 63.0093 82.491C63.5052 83.2288 64.2153 83.8284 65.0618 84.2242C65.9082 84.62 66.8584 84.7967 67.8082 84.735C68.7579 84.6732 69.6706 84.3754 70.4463 83.8741L106.759 60.3325C107.431 59.897 107.979 59.322 108.358 58.6553C108.736 57.9887 108.933 57.2497 108.933 56.4999C108.933 55.7501 108.736 55.0112 108.358 54.3445C107.979 53.6779 107.431 53.1029 106.759 52.6674L70.4463 29.1257Z"
              fill="#CF9A5A"
            />
          </svg>
          <p className="text-[18px] text-letras max-md:text-[16px] max-sm:text-[14px] ">Assistir Vídeo</p>
        </button>

        <div
          ref={imagemvideoRef}
          className="top-0 left-0 !w-full h-full absolute"
        >
          <img className="w-full h-full" src={img} alt="imagem do video" />
        </div>

        <div
          ref={overlayRef}
          style={{ opacity: 1 }}
          className="top-0 left-0 bg-[#0000009c] !w-full h-full absolute transition-opacity duration-500"
        ></div>
      </div>
    </section>
  );
};

export default VideoModular;
