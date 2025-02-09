import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Default from "../layouts/Default";
import NossoCafe from "../pages/NossoCafe";
import Noticias from "../pages/noticias";
import Contato from "../pages/Contato";
import Cardapio from "../pages/Cardapio";

const Patchs = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Default />} >
                        <Route index element={<Home/>} />
                        <Route path="/NossoCafe" element={<NossoCafe/>}/>
                        <Route path="/Noticias" element={<Noticias/>}/>
                        <Route path="/Contato" element={<Contato/>}/>
                        <Route path="/Cardapio" element={<Cardapio/>}/>
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Patchs;