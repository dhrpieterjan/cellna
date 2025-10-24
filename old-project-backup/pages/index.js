// pages/index.js

import Layout from "../components/Layout";
import Events from "../components/events";
import Container from "../components/container";
import Projecten from "../components/projecten";
import "../components/reset.scss";
import "../components/style.scss";
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Wiezijnwe from "../components/wiezijnwe";
import Investeren from "../components/investeren";
import FotoViewer from "../components/fotoviewer";


const GET_HOMEPAGE = gql`
    {
        homepages {
            Wiezijnwe
            event {
                Eventnaam
                Eventdatum
                Subtitel
                Eventfoto {
                    url
                }
                Subtitel2
            }
            Wiezijnwefoto {
                url
            }
            fotogallerij {
                url
            }
            Waarominvestereninvastgoed
            Bouwgrondtekoop
        }
        projects {
            id
            Actief
            Naam
            Aantalverkocht
            Type
            Aantalvantype
            Locatie
            Fase
            Prijs
            Hoofdfoto {
                url
            }
        }
    }
`;

export default function Index() {
    const { loading, data } = useQuery(GET_HOMEPAGE);
    //var homepage = data.homepage[0];
    if (loading) return <div>Loading</div>;

    const homepage = data.homepages[0];

    const event = homepage.event;

    const projects = data.projects;
    const wiezijnwe = homepage.Wiezijnwe;
    const Wiezijnwefoto = homepage.Wiezijnwefoto;
    const Waarominvestereninvastgoed = homepage.Waarominvestereninvastgoed;
    const Bouwgrondtekoop = homepage.Bouwgrondtekoop;
    const fotogallerij = homepage.fotogallerij;

    return (
        <Layout>
            <Container color="#3C4146">
                {event && <Events
                    naam={event.Eventnaam}
                    datum={event.Subtitel}
                    uur={event.Subtitel2}
                    img="/static/imagedummy.png"></Events>}

            </Container>
            <Projecten projecten={projects}></Projecten>

            <Container color="#3C4146" minHeight="200px"></Container>
            <Wiezijnwe detext={wiezijnwe} foto={Wiezijnwefoto.url} id="wzw" />
            <Container color="#F3F5F6">
                <Investeren
                    titel={"Waarom investeren in vastgoed?"}
                    text={Waarominvestereninvastgoed}
                />
            </Container>

            <Container>
                <FotoViewer fotos={fotogallerij}>
                </FotoViewer>
            </Container>

            <Container color="#3C4146">
                <Investeren
                    titel={"Bouwgrond te koop?"}
                    text={Bouwgrondtekoop}
                    textcolor={"white"}
                />
            </Container>

        </Layout>
    );
}
