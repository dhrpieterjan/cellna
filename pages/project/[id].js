import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Container from "../../components/container";
import FotoViewer from "../../components/fotoviewer";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import "./project.scss";

export default function Post() {
    const router = useRouter();

    const GET_HOMEPAGE = gql`
        {
            project(id: "${router.query.id}") {
                id
                Actief
                Naam
                Aantalverkocht
                Type
                Aantalvantype
                Projectomschrijving
                Locatie
                Fase
                Lon
                Lat
                Prijs
                Tabel
                prijsImage {
                    url
                }
                Hoofdfoto {
                    url
                }
                Fotosvhp{
                    url
                }
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_HOMEPAGE);
    if (loading) {
        return (
            <p>
                <Layout>
                    <h1>Loading</h1>
                </Layout>
            </p>
        );
    }

    if (error) {
        console.log("error");
        router.push('/');
        return;
    }
    let project;
    let bestaat = false;
    if (data.project) {
        project = data.project;
        bestaat = true;
    }

    const url = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/${project.Lon},${project.Lat},14.7/350x200?access_token=pk.eyJ1IjoiZGhycGlldGVyamFuIiwiYSI6ImNpdHBsYjF6aTAwMDkzM3BmZzdxeXc3OWoifQ.laBcEj13ocvYLNZ3cDhwLw`;
    return (
        <Layout>
            <Container>
                <div className="projectInfo">
                    <h3 className="projectNaam">{project.Naam}</h3>
                    <div className="project">
                        <div className="projcetText">{project.Projectomschrijving}</div>
                        <div className="projectSpecs">
                            <div className="verk">{project.Aantalverkocht}</div>
                            <div className="spec">
                                <h3>Project specificaties:</h3>
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
                            <div className="kaart">
                                <h3>Project op kaart:</h3>
                                <div className="kaartje">
                                    <img src={url}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {bestaat && <h1>{router.query.id}</h1>} */}

                <div className="table">
                    {project.prijsImage ? (
                        <div className="row">
                            <img className="prijsInfoImg"
                                src={`https://api.cellna.be/${project.prijsImage.url}`}
                            />
                        </div>
                    ) : <p>Nog geen prijzen beschikbaar.</p>}
                </div>
                {project.Fotosvhp.length > 0 && <FotoViewer fotos={project.Fotosvhp}>
                </FotoViewer>}
            </Container>
        </Layout>
    );
}
