import Comentarios from "../components/Comentarios";
import Franquia from "../components/Franquia";
import HeaderCardapio from "../components/HeaderCardapio";
import Menu from "../components/Menu";

const Cardapio = () => {
    return (
        <main className="max-w-[1920px] m-auto bg-white overflow-hidden">
            <HeaderCardapio/>
            <Menu/>
            <Franquia />
            <Comentarios />
        </main>
    );
}

export default Cardapio;