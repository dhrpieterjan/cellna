import "./Footer.scss";
import Container from "./container";

export default function Footer() {

    let date = new Date();

    return (
        <Container >
            <div className="footer">
                <div className="linken">
                    {/* <a className="link" href="https://Facebook.com">
                        <img src="../static/fa.png"></img>
                        <h3>Facebook</h3>
                    </a>
                    <a className="link" href="https://linkedin.com">
                        <img src="../static/in.png"></img>
                        <h3>LinkedIn</h3>
                    </a> */}
                    <a className="link" href="mailto:info@cellna.be">
                        <img src="../static/ma.png"></img>
                        <h3>Mail: info@cellna.be</h3>
                    </a>
                </div>
                <div className="subtext" >
                    <p>
                        © {date.getFullYear()} Cellna bv - Hollandstraat 84 - 9420 Erpe-Mere - +32 474 53 39 71 - BTW: BE 0542 996 003
                    <br /> Website door Pieter-Jan Philips - P3P Solutions +32 473 17 12 20
                </p>
                </div>
            </div>

        </Container>
    )

}