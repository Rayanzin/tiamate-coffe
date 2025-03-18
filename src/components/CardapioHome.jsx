import Slider from "react-slick";
import ButtonModular from "./ButtonModular";
import img1 from "../imgs/coffe-cookie.png"
import img2 from "../imgs/cream-morango.png"
import img3 from "../imgs/coffe-tradicional.png"
import img4 from "../imgs/coffe-brigadeiro.png"
import img5 from "../imgs/coffe-caramelo.png"
import img6 from "../imgs/cream-baunilha.png"
import img7 from "../imgs/cream-chocolate.png"
import img8 from "../imgs/cream-churros.png"
const CardapioHome = () => {
  const settings = {
    dots: true, // Exibe os pontos de navegação
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

  const bebidas = [
    {
      img: img1
    },
    {
      img: img2
    },
    {
      img: img3
    },
    {
      img: img4
    },
    {
      img: img5
    },
    {
      img: img6
    },
    {
      img: img7
    },
    {
      img: img8
    },
  ];

  return (
    <section className="flex flex-col items-center w-full h-[900px] pt-[246px] bg-bgcard">
      <p className="text-[18px] font-normal text-letras2">Confira nosso</p>
      <h2 className="text-[50px] font-bold text-primaria">Cardápio</h2>
      <ul className="w-[900px] mt-[77px] mb-[72px] px-[70px]">
        <Slider {...settings}>
          {bebidas.map((bebidas, index) => (
            <li key={index} className="!w-[280px] h-[250px] focus:outline-none">
              <img
                className="w-full h-full object-cover"
                src={bebidas.img}
                alt="bebida"
              />
            </li>
          ))}
        </Slider>
      </ul>
      <ButtonModular
        className="!bg-letras3 w-[304px] h-[60px]"
        type={`primary`}
        link={`/cardapio`}
        buttonName={`Ver mais`}
      />
    </section>
  );
};

export default CardapioHome;
