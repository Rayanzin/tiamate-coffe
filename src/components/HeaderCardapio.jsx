import HeaderModular from "./HeaderModular"
import RedesSociais from "./RedesSociais"
import img from "../imgs/header-cardapio.jpeg"
const HeaderCardapio = () => {
    // sm -> 640px
    // md -> 768px
    // lg -> 1024px
    // xl -> 1280px
    // 2xl -> 1535px
    return (
        <HeaderModular
            classH2="2xl:!w-[440px] max-2xl:!w-[400px] max-xl:!w-[440px] max-lg:!w-[380px] max-sm:!w-[280px]"
            imagem={img}
            texto={`O verdadeiro sabor do Café.`}
            redes={(<RedesSociais />)}
        />
    );
}

export default HeaderCardapio;