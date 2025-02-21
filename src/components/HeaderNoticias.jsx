import HeaderModular from "./HeaderModular";
import RedesSociais from "./RedesSociais";

const HeaderNoticias = () => {
    return (
        <HeaderModular
            className="top-[152px] ml-[720px]"
            imagem="./src/imgs/header-noticia.jpeg"
            texto="Abra sua Franquia Tiamate Coffee."
            redes={(<RedesSociais />)}
        />
    );
}

export default HeaderNoticias;