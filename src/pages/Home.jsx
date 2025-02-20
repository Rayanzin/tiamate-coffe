import Comentarios from "../components/Comentarios";
import Franquia from "../components/Franquia";
import HeaderHome from "../components/HeaderHome";

const Home = () => {
    return (
        <main className="max-w-[1920px] m-auto bg-white">
            <HeaderHome />
            <Franquia />
            <Comentarios />
        </main>
    );
}

export default Home;