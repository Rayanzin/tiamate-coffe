import Comentarios from "../components/Comentarios";
import Franquia from "../components/Franquia";
import HeaderCardapio from "../components/HeaderCardapio";

const Cardapio = () => {
    return (
        <main className="max-w-[1920px] m-auto bg-white">
            <HeaderCardapio/>
            <Franquia />
            <Comentarios />
        </main>
    );
}

export default Cardapio;