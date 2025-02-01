import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Default = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    );
}

export default Default;