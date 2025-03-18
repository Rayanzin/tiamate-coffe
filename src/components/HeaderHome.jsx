import HeaderModular from "./HeaderModular";
import RedesSociais from "./RedesSociais";
import img from "../imgs/header-home.jpeg"

const HeaderHome = () => {
  return (
    <HeaderModular
      imagem={img}
      textoMarcado={`Um café quentinho`}
      texto={`aqui na Tiamate muda o dia.`}
      redes={<RedesSociais />}
    />
  );
};

export default HeaderHome;
