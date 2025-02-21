import HeaderModular from "./HeaderModular"
import RedesSociais from "./RedesSociais"
const HeaderCardapio = () => {
    return (
        <HeaderModular
            className="w-[450px]"
            imagem={`./src/imgs/header-cardapio.jpeg`}
            texto={`O verdadeiro sabor do Café.`}
            redes={(<RedesSociais />)}
        />
    );
}

export default HeaderCardapio;