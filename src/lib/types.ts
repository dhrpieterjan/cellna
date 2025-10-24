export interface Project {
  id: string;
  Actief: boolean;
  Naam: string;
  Aantalverkocht: number;
  Type?: string;
  Aantalvantype?: number;
  Locatie?: string;
  Fase?: string;
  Prijs?: string;
  Projectomschrijving?: string;
  Lon?: number;
  Lat?: number;
  Tabel?: string;
  Hoofdfoto: {
    url: string;
  };
  prijsImage?: {
    url: string;
  };
  Fotosvhp?: Array<{
    url: string;
  }>;
}

export interface Homepage {
  Wiezijnwe: string;
  event?: {
    Eventnaam: string;
    Eventdatum: string;
    Subtitel: string;
    Subtitel2: string;
    Eventfoto: {
      url: string;
    };
  };
  Wiezijnwefoto: {
    url: string;
  };
  fotogallerij: Array<{
    url: string;
  }>;
  Waarominvestereninvastgoed: string;
  Bouwgrondtekoop: string;
}

export interface HomepageData {
  homepages: Homepage[];
  projects: Project[];
}

export interface ProjectDetailData {
  project: Project;
}