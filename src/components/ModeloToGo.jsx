import ModeloModular from "./ModeloModular";
import img1 from "../imgs/franquia-togo1.jpeg"
import img2 from "../imgs/franquia-togo2.jpeg"
import img3 from "../imgs/franquia-togo3.jpeg"
import img4 from "../imgs/franquia-togo4.jpeg"
import img5 from "../imgs/franquia-togo5.jpeg"

const ModeloToGo = () => {
    return (
        <ModeloModular
            id={`togo`}
            Titulo={` Tiamate Coffee To Go`}
            Espaço={` 8 a 12`}
            Faturamento={` 25`}
            Royaltyes={` 1.500,00`}
            Investimento={` 100`}
            imgPrincipal={`./src/imgs/franquia-togo.jpeg`}
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
        />
    );
}

export default ModeloToGo;