import Sobre from "./Sobre";

const Torragem = () => {
    return (
        <Sobre
            className="flex-row-reverse bg-bgcard"
            titulo={`Torragem`}
            descUm={`Este procedimento é todo controlado por operadores à distância. Quando o café alcança a temperatura de 140°C, acontecem interações entre as proteínas, gorduras e açúcares presentes nele.`}
            descDois={`Cada café possui uma curva de torra, então, a temperatura  e o tempo podem variar. Secos, os grãos descansam por três horas e perdem gás carbônico. Em seguida, estão prontos para serem pesados e armazenados.`}
            imagem={`./src/imgs/torragem.jpeg`}
        />
    );
}

export default Torragem;