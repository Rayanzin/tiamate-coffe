import Comentarios from "../components/Comentarios";
import Franquia from "../components/Franquia";
import HeaderHome from "../components/HeaderHome";
import HeaderHomeDois from "../components/HeaderHomeDois";
import VideoHome from "../components/VideoHome";

const Home = () => {
    return (
        <main className="max-w-[1920px] m-auto bg-white">
            <HeaderHome />
            <HeaderHomeDois/>
            <VideoHome/>
            <Franquia />
            <Comentarios />
        </main>
    );
}

export default Home;