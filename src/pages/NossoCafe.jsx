import Class from "../components/Class";
import Colheita from "../components/colheita";
import Comentarios from "../components/Comentarios";
import Franquia from "../components/Franquia";
import HeaderNossoCafe from "../components/HeadeNossoCafe";
import Moagem from "../components/Moagem";
import Torragem from "../components/Torragem";

const NossoCafe = () => {
    return ( 
        <main className="max-w-[1920px] m-auto bg-white overflow-hidden">
            <HeaderNossoCafe/>
            <Colheita/>
            <Torragem/>
            <Moagem/>
            <Class/>
            <Franquia/>
            <Comentarios/>
        </main>
     );
}
 
export default NossoCafe;