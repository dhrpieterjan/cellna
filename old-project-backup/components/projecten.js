import "./projecten.scss";
import Container from "../components/container";
import Projectcard from "../components/projectcard";

export default function Projecten(props) {
    //console.log(props);
    return (
        <div>
            <Container color="#F3F5F6">
                <div className="projectwrapper">
                    <h3 className="titel">Projecten</h3>
                    <p className="subTitel">
                        Onderstaand vindt u al onze huidige als ook de
                        afgewerkte projecten.
                    </p>
                </div>
            </Container>
            <div
                className="bollen"
                style={{ backgroundImage: "url(../static/bollen.png)" }}>
                <h2 className="sub">Actieve Projecten</h2>
            </div>
            <Container>
                <div className="actieveprojecten">
                    {props.projecten.map(project => {
                        if (project.Actief) {
                            return (
                                <Projectcard
                                    key={project.id}
                                    project={project}></Projectcard>
                            );
                        }
                    })}
                </div>
            </Container>
            <Container>
                <h2 className="sub sub2">Opgeleverde Projecten</h2>
                <div className="opgeleverderprojecten">
                    {props.projecten.map(project => {
                        if (!project.Actief) {
                            return (
                                <Projectcard
                                    key={project.id}
                                    project={project}></Projectcard>
                            );
                        }
                    })}
                </div>
            </Container>
        </div>
    );
}
