import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "Naam",
    defaultColumns: ["Naam", "Locatie", "Fase", "Actief"],
  },
  fields: [
    {
      name: "Naam",
      type: "text",
      required: true,
      admin: {
        description: "Project naam",
      },
    },
    {
      name: "Actief",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description: "Is dit project actief en zichtbaar?",
      },
    },
    {
      name: "Aantalverkocht",
      type: "number",
      defaultValue: 0,
      admin: {
        description: "Aantal verkochte units",
      },
    },
    {
      name: "Type",
      type: "text",
      admin: {
        description: "Type project (bijv. Appartementen, Huizen)",
      },
    },
    {
      name: "Aantalvantype",
      type: "number",
      admin: {
        description: "Aantal units van dit type",
      },
    },
    {
      name: "Locatie",
      type: "text",
      admin: {
        description: "Locatie van het project",
      },
    },
    {
      name: "Fase",
      type: "select",
      options: [
        { label: "Planning", value: "planning" },
        { label: "Ruwbouw in uitvoering", value: "ruwbouw in uitvoering" },
        {
          label: "Verkocht als projectgrond",
          value: "verkocht als projectgrond",
        },
        { label: "In afwerking", value: "in afwerking" },
        { label: "Opgeleverd", value: "opgeleverd" },
        { label: "Afgewerkt", value: "afgewerkt" },
      ],
      admin: {
        description: "Huidige fase van het project",
      },
    },
    {
      name: "Prijs",
      type: "text",
      admin: {
        description: 'Prijs informatie (bijv. "Vanaf €250.000")',
      },
    },
    {
      name: "Projectomschrijving",
      type: "textarea",
      admin: {
        description: "Gedetailleerde projectomschrijving",
      },
    },
    {
      name: "LocatieCoordinaten",
      type: "point",
      admin: {
        description:
          "Geografische locatie van het project (longitude, latitude)",
      },
    },
    {
      name: "Tabel",
      type: "textarea",
      admin: {
        description: "Tabel data (JSON string)",
      },
    },
    {
      name: "Hoofdfoto",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Hoofdfoto van het project",
      },
    },
    {
      name: "prijsImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Afbeelding met prijsinformatie",
      },
    },
    {
      name: "Fotosvhp",
      type: "array",
      fields: [
        {
          name: "foto",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
      admin: {
        description: "Fotogalerij van het project",
      },
    },
  ],
};
