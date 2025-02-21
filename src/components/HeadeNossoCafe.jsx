import HeaderModular from "./HeaderModular";
import RedesSociais from "./RedesSociais";

const HeaderNossoCafe = () => {
    return ( 
        <HeaderModular
            imagem="./src/imgs/header-nossocafe.jpeg"
            texto="Mais que sabor, sentimentos!"
            redes={(<RedesSociais/>)}
        />
     );
}
 
export default HeaderNossoCafe;