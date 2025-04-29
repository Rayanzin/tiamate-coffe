import HeaderModular from "./HeaderModular";
import RedesSociais from "./RedesSociais";
import img from "../imgs/header-noticia.jpeg";
const HeaderNoticias = () => {
  // sm -> 640px
  // md -> 768px
  // lg -> 1024px
  // xl -> 1280px
  // 2xl -> 1535px
  return (
    <HeaderModular
      className="flex sm:justify-end !items-end w-auto  max-sm:w-[400px] max-sm:justify-center"
      classH2="xl:w-[480px] max-[380px]:ml-0 max-[380px]:p-0"
      imagem={img}
      texto="Abra sua Franquia Tiamate Coffee."
      redes={<RedesSociais />}
    />
  );
};

export default HeaderNoticias;
