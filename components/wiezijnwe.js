import "./wiezijnwe.scss";
import Container from "./container";

export default function Wiezijnwe(props) {
    const url = `https://api.cellna.be${props.foto}`;
    console.log(url);
    return (
        <div className="wiezijnwe">
            <div className="square">
                <div className="text">
                    <h3 className="title">Wie zijn we:</h3>
                    {props.detext}
                </div>
                <div
                    className="foto"
                    style={{
                        backgroundImage: `url(${url})`
                    }}></div>
            </div>
        </div>
    );
}
