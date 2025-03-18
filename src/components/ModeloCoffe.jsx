import ModeloModular from "./ModeloModular";
import img1 from "../imgs/franquia-trad1.jpeg"
import img2 from "../imgs/franquia-trad2.jpeg"
import img3 from "../imgs/franquia-trad3.jpeg"
import img4 from "../imgs/franquia-trad4.jpeg"
import img5 from "../imgs/franquia-trad5.jpeg"
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
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
        />
    );
}

export default ModeloCoffe;