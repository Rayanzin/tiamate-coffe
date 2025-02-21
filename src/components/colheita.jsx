import Sobre from "./Sobre";

const Colheita = () => {
    return (
        <Sobre
            titulo={`Colheita`}
            descUm={`A colheita acontece quando a maioria dos frutos já estão maduros. Tudo começa com uma seleção criteriosa das sementes de café. Elas são escolhidas, plantadas e mantidas em viveiros especiais, que darão origem às mudas. `}
            descDois={`As plantinhas passam por diversas etapas de crescimento e quando alcançam de quatro a seis pares de folhas em seus galhos, são levadas para os solos que abrigarão o cafezal.`}
            imagem={`./src/imgs/colheita.jpeg`}
        />
    );
}

export default Colheita;