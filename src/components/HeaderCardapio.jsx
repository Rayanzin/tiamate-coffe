import HeaderModular from "./HeaderModular"
import RedesSociais from "./RedesSociais"
import img from "../imgs/header-cardapio.jpeg"
const HeaderCardapio = () => {
    return (
        <HeaderModular
            classH2="w-[440px]"
            imagem={img}
            texto={`O verdadeiro sabor do Café.`}
            redes={(<RedesSociais />)}
        />
    );
}

export default HeaderCardapio;