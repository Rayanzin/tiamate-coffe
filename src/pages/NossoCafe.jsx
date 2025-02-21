import Colheita from "../components/colheita";
import Comentarios from "../components/Comentarios";
import Franquia from "../components/Franquia";
import HeaderNossoCafe from "../components/HeadeNossoCafe";

const NossoCafe = () => {
    return ( 
        <main className="max-w-[1920px] m-auto bg-white">
            <HeaderNossoCafe/>
            <Colheita/>
            <Franquia/>
            <Comentarios/>
        </main>
     );
}
 
export default NossoCafe;