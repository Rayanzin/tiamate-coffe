import CardComents from "./CardComents";
import React from 'react';
import Slider from "react-slick";

// Configuração do carrossel
const settings = {
    dots: false, // Exibe os pontos de navegação
    infinite: false, // Habilita a rotação infinita
    speed: 1000, // Velocidade da transição
    slidesToShow: 2.5, // Número de cards visíveis por vez
    slidesToScroll: 1, // Número de slides que movem de cada vez
    arrows: false, // Remove os botões de seta
    responsive: [
        {
            breakpoint: 1024, // Para telas de 1024px ou menores (como tablets)
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600, // Para telas de 600px ou menores (como celulares)
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
            Imagem: "./src/imgs/kalil-sousa.jpeg",
            Nome: "Kalil Sousa",
        },
        {
            Nota: "5",
            Comentario: "A experiência foi maravilhosa! O café estava perfeito e o ambiente é super agradável. Comi um pão de queijo e foi uma delícia. Vou voltar mais vezes!",
            Imagem: "./src/imgs/maria-oliveira.jpeg",
            Nome: "Maria Oliveira",
        },
        {
            Nota: "4",
            Comentario: "O café é bom, mas o atendimento poderia ser mais rápido. Mesmo assim, adorei o sabor e a atmosfera do lugar. Vale a pena visitar!",
            Imagem: "./src/imgs/joao-silva.webp",
            Nome: "João Silva",
        },
        {
            Nota: "5",
            Comentario: "Simplesmente o melhor café que já tomei! Amei o ambiente e a simpatia dos funcionários. Super recomendo!",
            Imagem: "./src/imgs/ana-paula-costa.jpeg",
            Nome: "Ana Paula Costa",
        },
        {
            Nota: "5",
            Comentario: "Excelente! O café gelado estava uma delícia e a torta de maçã estava incrível. Um lugar perfeito para um café da manhã tranquilo.",
            Imagem: "./src/imgs/luciana-mendes.jpg",
            Nome: "Luciana Mendes",
        },
    ];

    return (
        <section className="my-[130px] flex flex-col items-center">
            <div className="text-center">
                <p className="text-letras2 text-[18px]">Depoimentos</p>
                <h2 className="text-primaria text-[50px] mb-[40px]">Tudo sobre Tiamate Coffee</h2>
            </div>
            <div className="relative ml-[240px]">
                <div className="w-[505px] h-[419px]  z-0 absolute top-[-30px] left-[-330px]">
                    <img className="w-full h-full object-cover object-top" src="./src/imgs/coments.png" alt="atendente" />
                </div>
                <Slider className="carrosel z-10 cursor-pointer active:cursor-grabbing" {...settings}>
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
