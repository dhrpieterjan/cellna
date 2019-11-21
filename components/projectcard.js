import "./projectcard.scss";
import Link from "next/link";

export default function Projectcard(props) {
    const project = props.project;
    const url = `https://api.cellna.be${project.Hoofdfoto.url}`;
    return (
        <Link href="/project/[id]" as={`/project/${project.id}`}>
            <div className="projectcard">
                <div
                    className="foto"
                    style={{
                        backgroundImage: `url(${url})`
                    }}>
                    <p className="aantalverkocht">{project.Aantalverkocht}</p>
                </div>
                <div className="info">
                    <h3 className="projectname">{project.Naam}</h3>
                    {project.Locatie && (
                        <div className="row">
                            <img
                                className="glymp"
                                src="/static/icons/location.png"
                            />
                            <p>Locatie: {project.Locatie}</p>
                        </div>
                    )}
                    {project.Type && (
                        <div className="row">
                            <img
                                className="glymp"
                                src="/static/icons/type.png"
                            />
                            <p>
                                {project.Type}: {project.Aantalvantype}
                            </p>
                        </div>
                    )}
                    {project.Fase && (
                        <div className="row">
                            <img
                                className="glymp"
                                src="/static/icons/state.png"
                            />
                            <p>Fase: {project.Fase}</p>
                        </div>
                    )}

                    {project.Prijs && (
                        <div className="row">
                            <img
                                className="glymp"
                                src="/static/icons/money.png"
                            />
                            <p>Prijs: {project.Prijs}</p>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
