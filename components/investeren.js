import "./investeren.scss";
import { prototype } from "events";

export default function Investeren(props) {
    return (
        <div className="investeren">
            <h3 className="title" style={{ color: props.textcolor }}>
                {props.titel}
            </h3>
            <p className="text" style={{ color: props.textcolor }}>
                {props.text}
            </p>
        </div>
    );
}
