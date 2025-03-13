import Slider from "react-slick";
import ButtonModular from "./ButtonModular";

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
      img: "./src/imgs/coffe-cookie.png",
    },
    {
      img: "./src/imgs/cream-morango.png",
    },
    {
      img: "./src/imgs/coffe-tradicional.png",
    },
    {
      img: "./src/imgs/coffe-brigadeiro.png",
    },
    {
      img: "./src/imgs/coffe-caramelo.png",
    },
    {
      img: "./src/imgs/cream-baunilha.png",
    },
    {
      img: "./src/imgs/cream-chocolate.png",
    },
    {
      img: "./src/imgs/cream-churros.png",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full h-[100vh] pt-[246px] bg-bgcard">
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
