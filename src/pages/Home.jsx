import Comentarios from "../components/Comentarios";
import Franquia from "../components/Franquia";
import HeaderHome from "../components/HeaderHome";
import HeaderHomeDois from "../components/HeaderHomeDois";

const Home = () => {
    return (
        <main className="max-w-[1920px] m-auto bg-white">
            <HeaderHome />
            <HeaderHomeDois/>
            <Franquia />
            <Comentarios />
        </main>
    );
}

export default Home;