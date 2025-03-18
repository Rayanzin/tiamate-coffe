import HeaderModular from "./HeaderModular";
import RedesSociais from "./RedesSociais"
import img from "../imgs/header-contato.jpeg"

const HeaderConato = () => {
    return (
        <HeaderModular 
            classH2="!w-[440px]"
            imagem={img}
            texto={`Depois do café eu me expresso.`}
            redes={<RedesSociais/>}
        />
    );
}

export default HeaderConato;