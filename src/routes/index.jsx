import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Default from "../layouts/Default";

const Patchs = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Default />} >
                        <Route index element={<Home/>} />

                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Patchs;