import ModeloModular from "./ModeloModular";

const ModeloToGo = () => {
    return (
        <ModeloModular
            Titulo={` Tiamate Coffee To Go`}
            Espaço={` 8 a 12`}
            Faturamento={` 25`}
            Royaltyes={` 1.500,00`}
            Investimento={` 100`}
            imgPrincipal={`./src/imgs/franquia-togo.jpeg`}
            img1={`./src/imgs/franquia-togo1.jpeg`}
            img2={`./src/imgs/franquia-togo2.jpeg`}
            img3={`./src/imgs/franquia-togo3.jpeg`}
            img4={`./src/imgs/franquia-togo4.jpeg`}
            img5={`./src/imgs/franquia-togo5.jpeg`}
        />
    );
}

export default ModeloToGo;