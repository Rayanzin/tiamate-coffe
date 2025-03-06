const VideoModular = ({ className = "", video, img }) => {
  function startVideo() {
    let iframe = document.getElementById("youtube-iframe");
    let iframeSrc = iframe.src; // Captura o src atual do iframe
    iframe.src = iframeSrc + "&autoplay=1"; // Adiciona o parâmetro autoplay=1 para iniciar o vídeo
    let tempoDeAtraso = 1500;
    let botao = document.getElementById("botao")
    let imagemvideo = document.getElementById("imagemvideo")
    let overlay = document.getElementById("overlay")
    setTimeout(() => {
      botao.style.display = "none";
      imagemvideo.style.display = "none";
      overlay.style.display = "none";
    }, tempoDeAtraso);
  }
  return (
    <section className={`relative w-full h-[500px] bg-primaria ${className}`}>
      <div className=" w-full h-full flex justify-center items-center">
        <iframe
          id="youtube-iframe"
          className="relative w-full h-full"
          width="560"
          height="315"
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <button
          id="botao"
          className="absolute z-10 flex flex-col gap-[22px]  "
          onClick={startVideo}
        >
          <svg
            className="*:hover:fill-letras2 *:duration-200 duration-300 shadow-2xl active:shadow-primaria rounded-2xl"
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
          <p className="text-[18px] text-letras">Assistir Vídeo</p>
        </button>
      </div>
      <div id="imagemvideo" className="top-0 left-0 w-full h-full absolute">
        <img className="w-full h-full" src={img} alt="imagem do video" />
      </div>
      <div
        id="overlay"
        className="top-0 left-0 bg-[#0000009c] w-full h-full absolute"
      ></div>
    </section>
  );
};

export default VideoModular;
