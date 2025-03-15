import HeaderModular from "./HeaderModular";
import RedesSociais from "./RedesSociais";

const HeaderNoticias = () => {
    return (
        <HeaderModular
            className="flex justify-end !items-end"
            classH2="!w-[480px]"
            imagem="./src/imgs/header-noticia.jpeg"
            texto="Abra sua Franquia Tiamate Coffee."
            redes={(<RedesSociais />)}
        />
    );
}

export default HeaderNoticias;