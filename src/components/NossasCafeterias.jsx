import Slider from "react-slick";

const NossasCafeterias = () => {

    const settings = {
        dots: true, // Exibe os pontos de navegação
        infinite: true, // Habilita a rotação infinita
        speed: 1000, // Velocidade da transição
        slidesToShow: 5, // Número de cards visíveis por vez
        slidesToScroll: 1, // Número de slides que movem de cada vez
        arrows: false, // Remove os botões de seta
        draggable: true, // Permite arrastar livremente os slides
        swipeToSlide: true, // Permite deslizar diretamente para qualquer posição
        autoplay: true,
        autoplaySpeed: 3000,
    }

    const imagens = [
        {
            img: "./src/imgs/nosso-ambiente-1.png"
        },
        {
            img: "./src/imgs/nosso-ambiente-2.png"
        },
        {
            img: "./src/imgs/nosso-ambiente-3.png"
        },
        {
            img: "./src/imgs/nosso-ambiente-4.png"
        },
        {
            img: "./src/imgs/nosso-ambiente-5.png"
        },
        {
            img: "./src/imgs/ambiente-1.jpg"
        },
        {
            img: "./src/imgs/ambiente-2.jpg"
        },
        {
            img: "./src/imgs/ambiente-3.jpg"
        },
        {
            img: "./src/imgs/ambiente-5.jpg"
        },
        {
            img: "./src/imgs/ambiente-6.jpg"
        },

    ]
    return (
        <section className="w-full mt-[113px] mb-[150px]">
            <section className="w-[1170px] m-auto flex flex-col gap-[44px]">
                <div className="flex justify-between items-center">
                    <h2 className="text-[50px] font-bold text-primaria">
                        Nossas Cafeterias
                    </h2>
                    <a
                        className="flex items-center gap-[11px] hover:underline"
                        target="_blank"
                        href="https://www.instagram.com/tiamatefortaleza/"
                    >
                        <p className="text-[18px] font-normal text-letras2">
                            Veja mais
                        </p>
                        <svg
                            className="*:hover:fill-bghover"
                            width="62"
                            height="61"
                            viewBox="0 0 62 61"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M40.6875 30.5C40.6875 33.0278 39.6669 35.4522 37.8501 37.2396C36.0333 39.0271 33.5693 40.0312 31 40.0312C28.4307 40.0312 25.9667 39.0271 24.1499 37.2396C22.3331 35.4522 21.3125 33.0278 21.3125 30.5C21.3125 29.9567 21.3706 29.4261 21.4707 28.9115H18.0833V41.6103C18.0833 42.4935 18.8099 43.2083 19.7076 43.2083H42.2956C42.7258 43.2075 43.1382 43.0388 43.4421 42.7391C43.746 42.4395 43.9167 42.0335 43.9167 41.6103V28.9115H40.5293C40.6294 29.4261 40.6875 29.9567 40.6875 30.5ZM31 36.8542C31.8483 36.854 32.6883 36.6894 33.472 36.3698C34.2557 36.0502 34.9677 35.5818 35.5674 34.9915C36.1671 34.4012 36.6428 33.7004 36.9672 32.9292C37.2917 32.158 37.4585 31.3315 37.4583 30.4968C37.4581 29.6622 37.2908 28.8357 36.966 28.0647C36.6411 27.2937 36.1651 26.5931 35.5651 26.0031C34.9651 25.4131 34.2528 24.9451 33.469 24.6259C32.6852 24.3066 31.8451 24.1424 30.9968 24.1427C29.2835 24.1431 27.6405 24.8131 26.4294 26.0053C25.2182 27.1976 24.538 28.8144 24.5384 30.5C24.5389 32.1856 25.2199 33.8021 26.4317 34.9937C27.6434 36.1854 29.2867 36.8546 31 36.8542ZM38.75 23.8281H42.6218C42.879 23.8281 43.1257 23.7278 43.3079 23.5492C43.4901 23.3705 43.5929 23.1281 43.5937 22.875V19.0657C43.5937 18.812 43.4913 18.5688 43.3091 18.3895C43.1268 18.2101 42.8796 18.1094 42.6218 18.1094H38.75C38.4922 18.1094 38.245 18.2101 38.0627 18.3895C37.8804 18.5688 37.778 18.812 37.778 19.0657V22.875C37.7812 23.3992 38.2172 23.8281 38.75 23.8281ZM31 0C22.7783 0 14.8933 3.21338 9.07969 8.93324C3.26606 14.6531 0 22.4109 0 30.5C0 38.5891 3.26606 46.3469 9.07969 52.0668C14.8933 57.7866 22.7783 61 31 61C35.071 61 39.1021 60.2111 42.8632 58.6783C46.6243 57.1456 50.0417 54.8989 52.9203 52.0668C55.7989 49.2346 58.0824 45.8723 59.6403 42.1718C61.1982 38.4714 62 34.5053 62 30.5C62 26.4947 61.1982 22.5286 59.6403 18.8282C58.0824 15.1277 55.7989 11.7654 52.9203 8.93324C50.0417 6.10106 46.6243 3.85444 42.8632 2.32167C39.1021 0.788906 35.071 0 31 0ZM47.1458 42.8557C47.1458 44.7969 45.5312 46.3854 43.5582 46.3854H18.4418C16.4688 46.3854 14.8542 44.7969 14.8542 42.8557V18.1443C14.8542 16.2031 16.4688 14.6146 18.4418 14.6146H43.5582C45.5312 14.6146 47.1458 16.2031 47.1458 18.1443V42.8557Z"
                                fill="#C7794A"
                            />
                        </svg>
                    </a>
                </div>
                <ul className="flex flex-col w-full h-[215px] gap-[24px]">
                    <Slider className="w-full carrosel z-10 cursor-pointer active:cursor-grabbing gap-[20px]" {...settings}>
                        {
                            imagens.map((imagem) => (
                                <li className="w-[215px] h-[215px] !mr-[24px] ">
                                    <img className="w-[215px] h-full rounded-md" src={imagem.img} alt="nossa cafeteria" />
                                </li>
                            ))
                        }
                    </Slider>
                </ul>
            </section>
        </section>
    );
}

export default NossasCafeterias;