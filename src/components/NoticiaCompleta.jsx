import Slider from "react-slick";
import NoticiaCompletaModular from "./NoticiaCompletaModular";
import img1 from "../imgs/noticia-tiamatte-1.jpg";
import img2 from "../imgs/noticia-tiamatte-2.jpg";
import img3 from "../imgs/noticia-tiamatte-3.jpg";
const NoticiaCompleta = () => {
  const settings = {
    dots: false, // Exibe os pontos de navegação
    infinite: true, // Habilita a rotação infinita
    speed: 1000, // Velocidade da transição
    slidesToShow: 3, // Número de cards visíveis por vez
    slidesToScroll: 1, // Número de slides que movem de cada vez
    arrows: false, // Remove os botões de seta
    draggable: true, // Permite arrastar livremente os slides
    swipeToSlide: true, // Permite deslizar diretamente para qualquer posição
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280, // Para telas de 1024px ou menores (como tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800, // Para telas de 600px ou menores (como celulares)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const Noticias = [
    {
      img: img1,
      titulo: "Conheça cinco lugares no centro para ir com os amigos",
      href: "#noticiacompleta",
    },
    {
      img: img2,
      titulo: "Um gostinho moderno no coração de Fortaleza",
      href: "#noticiacompleta",
    },
    {
      img: img3,
      titulo: "Cafeteria é nova tendência de negócio em Salvador",
      href: "#noticiacompleta",
    },
  ];
  // sm -> 640px
  // md -> 768px
  // lg -> 1024px
  // xl -> 1280px
  // 2xl -> 1535px
  return (
    <section
      id="noticiacompleta"
      className="flex flex-col gap-[30px] max-w-[1440px] m-auto  mt-[117px] mb-[190px] items-center "
    >
      <div className="w-[1170px] max-xl:w-[770px] max-[800px]:w-[370px] ">
        <p className="text-[18px] font-normal">Fique por dento</p>
        <h2 className="text-[50px] font-bold text-primaria max-[800px]:text-[32px]">
          Tiamate na Mídia
        </h2>
      </div>
      <ul className="max-w-[1170px] flex justify-center max-xl:w-[770px] max-[800px]:w-[400px] ">
        <Slider className="w-full mr-[-30px]" {...settings}>
          {Noticias.map((noticia, index) => (
            <li key={index} className="flex justify-center">
              <NoticiaCompletaModular
                img={noticia.img}
                titulo={noticia.titulo}
                href={noticia.href}
              />
            </li>
          ))}
        </Slider>
      </ul>
    </section>
  );
};

export default NoticiaCompleta;
