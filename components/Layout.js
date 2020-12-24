import Header from "./Header";
import "../components/layout.scss";
import Formulier from "../components/formulier";
import Footer from "../components/Footer";


const Layout = props => (
    <div>
        <div className="semicont">
            <Header />
        </div>
        {props.children}

        <Formulier />
        <Footer />
    </div >
);

export default Layout;
