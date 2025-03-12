import Slider from "react-slick";
import NoticiaCompletaModular from "./NoticiaCompletaModular";

const NoticiaCompleta = () => {
  const settings = {
    dots: false, // Exibe os pontos de navegação
    infinite: false, // Habilita a rotação infinita
    speed: 1000, // Velocidade da transição
    slidesToShow: 3, // Número de cards visíveis por vez
    slidesToScroll: 3, // Número de slides que movem de cada vez
    arrows: false, // Remove os botões de seta
    draggable: true, // Permite arrastar livremente os slides
    swipeToSlide: true, // Permite deslizar diretamente para qualquer posição
    responsive: [
      {
        breakpoint: 1024, // Para telas de 1024px ou menores (como tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Para telas de 600px ou menores (como celulares)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const Noticias = [
    {
      img: "./src/imgs/noticia-tiamatte-1.jpg",
      titulo: "Conheça cinco lugares no centro para ir com os amigos",
      href: "#noticiacompleta",
    },
    {
      img: "./src/imgs/noticia-tiamatte-2.jpg",
      titulo: "Um gostinho moderno no coração de Fortaleza",
      href: "#noticiacompleta",
    },
    {
      img: "./src/imgs/noticia-tiamatte-3.jpg",
      titulo: "Cafeteria é nova tendência de negócio em Salvador",
      href: "#noticiacompleta",
    },
  ];
  return (
    <section id="noticiacompleta" className="flex flex-col gap-[30px] w-[1440px] m-auto px-[135px] mt-[117px] mb-[190px] ">
      <div>
        <p className="text-[18px] font-normal">Fique por dento</p>
        <h2 className="text-[50px] font-bold text-primaria">Tiamate na Mídia</h2>
      </div>
      <ul className="  flex justify-center ">
        <Slider
          className="w-[1200px] mr-[-10px]"
          {...settings}
        >
          {Noticias.map((noticia, index) => (
            <li key={index} className="!w-[370px] flex justify-center pt-[10px] pl-[10px]">
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
