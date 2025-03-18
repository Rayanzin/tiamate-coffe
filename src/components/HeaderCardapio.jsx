import HeaderModular from "./HeaderModular"
import RedesSociais from "./RedesSociais"
const HeaderCardapio = () => {
    return (
        <HeaderModular
            classH2="w-[440px]"
            imagem={`./src/imgs/header-cardapio.jpeg`}
            texto={`O verdadeiro sabor do Café.`}
            redes={(<RedesSociais />)}
        />
    );
}

export default HeaderCardapio;