import Duvida from "../components/Duviva";
import Enderecos from "../components/Enderecos";
import HeaderConato from "../components/HeaderContato";
import NossasCafeterias from "../components/NossasCafeterias";

const Contato = () => {
    return (
        <main className="max-w-[1920px] m-auto bg-white overflow-hidden">
            <HeaderConato/>
            <NossasCafeterias/>
            <Enderecos/>
            <Duvida/>
        </main>
    );
}

export default Contato;