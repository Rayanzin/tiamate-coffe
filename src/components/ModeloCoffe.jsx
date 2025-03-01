import ModeloModular from "./ModeloModular";

const ModeloCoffe = () => {
    return (
        <ModeloModular
            id={`coffe`}
            className="text-[55px]"
            Titulo={`Tiamate Coffee`}
            Espaço={`30 a 40`}
            Faturamento={`40`}
            Royaltyes={`2.000,00`}
            Investimento={`130`}
            imgPrincipal={`./src/imgs/Franquia-trad.jpeg`}
            img1={`./src/imgs/franquia-trad1.jpeg`}
            img2={`./src/imgs/franquia-trad2.jpeg`}
            img3={`./src/imgs/franquia-trad3.jpeg`}
            img4={`./src/imgs/franquia-trad4.jpeg`}
            img5={`./src/imgs/franquia-trad5.jpeg`}
        />
    );
}

export default ModeloCoffe;