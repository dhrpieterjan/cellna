import Link from "next/link";
import "../components/header.scss";

const Header = () => (
    <div className="header">
        <a href="/" className="logoken">
            <img className="logo" src="/static/logo.png" alt="Logo Cellna" />
        </a>
        <div className="nav">
            <Link href="/">
                <a className="link">Home</a>
            </Link>
            {/* <a className="link">Projecten</a> */}

            <a className="link" href="/#wzw">Wie zijn we</a>
            <a className="link" href="/#wiiv">Waarom investeren in vastgoed</a>
            <a className="link" href="/#fotos">Fotogalerij</a>
            <a className="link" href="/#contact">Contact</a>
            {/* <Link href="/project">
                <a className="link">project</a>
            </Link> */}
        </div>
    </div>
);

export default Header;
