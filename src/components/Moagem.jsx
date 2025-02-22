import Sobre from "./Sobre";

const Moagem = () => {
    return (
        <Sobre
            titulo={`Moagem`}
            descUm={`Ela é feita através da combinação de diversos tipos de café. Esta “mistura” varia de acordo com o perfil do consumidor, podendo ser um produto gourmet, que leva toques mais suaves; do tipo forte, que é mais amargo e menos ácido; ou até mesmo aromático, que conta com sabores adicionais.`}
            descDois={`A mistura é preparada mecanicamente. Então, ela é encaminhada para um rolo mecânico, que quebrará os grãos, até chegar à granulometria ideal do produto. Depois da moagem, o café deve descansar por três horas para liberar mais gás carbônico.`}
            imagem={`./src/imgs/moagem.jpeg`}
        />
    );
}

export default Moagem;