import HeaderModular from "./HeaderModular";
import RedesSociais from "./RedesSociais";
import img from "../imgs/header-nossocafe.jpeg"

const HeaderNossoCafe = () => {
    return ( 
        <HeaderModular
            imagem={img}
            texto="Mais que sabor, sentimentos!"
            redes={(<RedesSociais/>)}
        />
     );
}
 
export default HeaderNossoCafe;