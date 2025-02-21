import HeaderModular from "./HeaderModular";
import RedesSociais from "./RedesSociais";

const HeaderHome = () => {
    return (
        <HeaderModular
            imagem="./src/imgs/header-home.jpeg"
            textoMarcado="Um café quentinho"
            texto=" aqui na Tiamate muda o dia."
            redes={(<RedesSociais/>)}
        />
    );
}

export default HeaderHome;