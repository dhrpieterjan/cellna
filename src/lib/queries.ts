import { gql } from '@apollo/client';

export const GET_HOMEPAGE = gql`
  query GetHomepage {
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

export const GET_PROJECT_DETAIL = gql`
  query GetProjectDetail($id: ID!) {
    project(id: $id) {
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
      Fotosvhp {
        url
      }
    }
  }
`;

export const GET_ALL_PROJECT_IDS = gql`
  query GetAllProjectIds {
    projects {
      id
    }
  }
`;