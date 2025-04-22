import CardComents from "./CardComents";
// import React from 'react';
import Slider from "react-slick";
import img from "../imgs/coments.png"
import img1 from "../imgs/kalil-sousa.jpeg"
import img2 from "../imgs/maria-oliveira.jpeg"
import img3 from "../imgs/joao-silva.webp"
import img4 from "../imgs/ana-paula-costa.jpeg"
import img5 from "../imgs/luciana-mendes.jpg"

// Configuração do carrossel
const settings = {
    dots: false, // Exibe os pontos de navegação
    infinite: true, // Habilita a rotação infinita
    speed: 1000, // Velocidade da transição
    slidesToShow: 2.5, // Número de cards visíveis por vez
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
            }
        },
        {
            breakpoint: 640, // Para telas de 600px ou menores (como celulares)
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};


const Comentarios = () => {
    const comentarios = [
        {
            Nota: "5",
            Comentario: "O café é realmente bom, e os salgados também (pedi um croissant de 4 queijos). Já havia pedido antes via iFood mas resolvi fazer uma visita enquanto andava pelo Centro, o café fica mesmo ao lado da Praça do Ferreira. Vale a pena dar uma visitada quando quiser se refrescar com um café gelado deles ou tomar um café da manhã por lá.",
            Imagem: img1,
            Nome: "Kalil Sousa",
        },
        {
            Nota: "5",
            Comentario: "A experiência foi maravilhosa! O café estava perfeito e o ambiente é super agradável. Comi um pão de queijo e foi uma delícia. Vou voltar mais vezes!",
            Imagem: img2,
            Nome: "Maria Oliveira",
        },
        {
            Nota: "4",
            Comentario: "O café é bom, mas o atendimento poderia ser mais rápido. Mesmo assim, adorei o sabor e a atmosfera do lugar. Vale a pena visitar!",
            Imagem: img3,
            Nome: "João Silva",
        },
        {
            Nota: "5",
            Comentario: "Simplesmente o melhor café que já tomei! Amei o ambiente e a simpatia dos funcionários. Super recomendo!",
            Imagem: img4,
            Nome: "Ana Paula Costa",
        },
        {
            Nota: "5",
            Comentario: "Excelente! O café gelado estava uma delícia e a torta de maçã estava incrível. Um lugar perfeito para um café da manhã tranquilo.",
            Imagem: img5,
            Nome: "Luciana Mendes",
        },
    ];

    // sm -> 640px
    // md -> 768px
    // lg -> 1024px
    // xl -> 1280px
    // 2xl -> 1535px

    return (
        <section className="py-[130px] flex flex-col items-center max-sm:overflow-hidden">
            <div className="text-center">
                <p className="text-letras2 text-[18px]">Depoimentos</p>
                <h2 className="text-primaria text-[50px] mb-[40px] max-md:text-[32px] max-[460px]:text-[24px]">Tudo sobre Tiamate Coffee</h2>
            </div>
            <div className="relative">
                <div className="w-[505px] h-[420px]  z-0 absolute top-[-30px] left-[-340px] max-[460px]:w-[400px] max-[460px]:h-[350px]">
                    <img className="w-full h-full object-cover object-right-top" src={img} alt="atendente" />
                </div>
                <Slider className="w-[1100px] carrosel z-10 cursor-pointer active:cursor-grabbing mr-[-340px] max-xl:w-[900px] max-sm:w-[550px] max-sm:ml-[-43%] max-[460px]:ml-[-20%] " {...settings}>
                    {comentarios.map((comentario, index) => (
                        <div key={index} className="flex justify-center">
                            <CardComents
                                Nota={comentario.Nota}
                                Comentario={comentario.Comentario}
                                Imagem={comentario.Imagem}
                                Nome={comentario.Nome}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>

    );
}

export default Comentarios;
