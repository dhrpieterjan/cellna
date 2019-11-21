import Link from "next/link";
import "../components/header.scss";

const Header = () => (
    <div className="header">
        <img className="logo" src="/static/logo.png" alt="Logo Cellna" />
        <div className="nav">
            <Link href="/">
                <a className="link">Home</a>
            </Link>
            {/* <a className="link">Projecten</a> */}
            <a className="link">Wie zijn we</a>
            <a className="link">Waarom investeren in vastgoed</a>
            <a className="link">Fotogalerij</a>
            <a className="link">Bouwgrond te koop?</a>
            <a className="link">Contact</a>
            {/* <Link href="/project">
                <a className="link">project</a>
            </Link> */}
        </div>
    </div>
);

export default Header;
