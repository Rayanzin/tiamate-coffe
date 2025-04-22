import HeaderModular from "./HeaderModular";
import RedesSociais from "./RedesSociais"
import img from "../imgs/header-contato.jpeg"

const HeaderConato = () => {
    // sm -> 640px
    // md -> 768px
    // lg -> 1024px
    // xl -> 1280px
    // 2xl -> 1535px
    return (
        <HeaderModular 
            classH2="2xl:!w-[440px] max-2xl:!w-[460px] max-lg:!w-[340px] max-sm:!w-[260px]"
            imagem={img}
            texto={`Depois do café eu me expresso.`}
            redes={<RedesSociais/>}
        />
    );
}

export default HeaderConato;