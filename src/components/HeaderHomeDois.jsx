import HeaderModular from "./HeaderModular";
import img from "../imgs/header-home-dois.jpeg"
const HeaderHomeDois = () => {
    return (
        <HeaderModular className=""
            imagem={img}
            textoMarcadoDois="Café Autêntico"
            textoDois="Chegou nosso café! Direto da fazenda."
        />
    );
}
 
export default HeaderHomeDois;