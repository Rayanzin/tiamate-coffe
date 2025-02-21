import HeaderModular from "./HeaderModular";
import RedesSociais from "./RedesSociais"

const HeaderConato = () => {
    return (
        <HeaderModular 
            className="w-[453px]"
            imagem={`./src/imgs/header-contato.jpeg`}
            texto={`Depois do café eu me expresso.`}
            redes={(<RedesSociais/>)}
        />
    );
}

export default HeaderConato;