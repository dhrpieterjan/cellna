import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

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
                Locatie
                Fase
                Prijs
                Hoofdfoto {
                    url
                }
            }
        }
    `;

    const { loading, data } = useQuery(GET_HOMEPAGE);
    if (loading) {
        return (
            <p>
                <Layout>
                    <h1>Loading</h1>
                </Layout>
            </p>
        );
    }
    let bestaat = false;
    if (data.project) {
        const project = data.project;
        bestaat = true;
    }

    console.log(project);
    return (
        <Layout>
            {bestaat && <h1>{router.query.id}</h1>}
            <p>This is the blog post content.</p>
        </Layout>
    );
}
