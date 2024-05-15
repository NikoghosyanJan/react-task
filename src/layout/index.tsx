import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layout.scss"

function Layout() {

    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}

export default Layout;