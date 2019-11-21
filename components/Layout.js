import Header from "./Header";
import "../components/layout.scss";

const Layout = props => (
    <div>
        <div className="semicont">
            <Header />
        </div>
        {props.children}
    </div>
);

export default Layout;
