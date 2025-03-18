import Ambiente from "../components/Ambiente";
import BoasVindas from "../components/BoasVindas";
import CardapioHome from "../components/CardapioHome";
import Comentarios from "../components/Comentarios";
import Franquia from "../components/Franquia";
import HeaderHome from "../components/HeaderHome";
import HeaderHomeDois from "../components/HeaderHomeDois";
import Missoes from "../components/Missoes";
import VideoHome from "../components/VideoHome";

const Home = () => {
    return (
        <main className="max-w-[1920px] m-auto bg-white">
            <HeaderHome />
            <BoasVindas/>
            <Missoes/>
            <VideoHome/>
            <HeaderHomeDois/>
            <Ambiente/>
            <CardapioHome/>
            <Franquia />
            <Comentarios />
        </main>
    );
}

export default Home;