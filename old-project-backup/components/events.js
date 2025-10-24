import "./events.scss";

export default function events(props) {
    return (
        <div className="events">
            <h3>{props.naam}</h3>
            <div className="info">

                <div>
                    <p>{props.datum}</p>
                    <p>{props.uur}</p>
                </div>
            </div>
        </div>
    );
}
