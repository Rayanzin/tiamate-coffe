import HeaderModular from "./HeaderModular";
import RedesSociais from "./RedesSociais";
import img from "../imgs/header-noticia.jpeg"
const HeaderNoticias = () => {
    return (
        <HeaderModular
            className="flex justify-end !items-end w-auto max-sm:w-[400px]"
            classH2="!w-[480px]"
            imagem={img}
            texto="Abra sua Franquia Tiamate Coffee."
            redes={(<RedesSociais />)}
        />
    );
}

export default HeaderNoticias;