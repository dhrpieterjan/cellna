import type { GlobalConfig } from "payload";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  admin: {
    group: "Content",
  },
  fields: [
    {
      name: "Wiezijnwe",
      type: "textarea",
      admin: {
        description: "Wie zijn we sectie content",
      },
    },
    {
      name: "Wiezijnwefoto",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Foto voor wie zijn we sectie",
      },
    },
    {
      name: "Waarominvestereninvastgoed",
      type: "textarea",
      admin: {
        description: "Waarom investeren in vastgoed content",
      },
    },
    {
      name: "Bouwgrondtekoop",
      type: "textarea",
      admin: {
        description: "Bouwgrond te koop content",
      },
    },
    {
      name: "fotogallerij",
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
        description: "Fotogalerij voor homepage",
      },
    },
    {
      name: "event",
      type: "group",
      fields: [
        {
          name: "Eventnaam",
          type: "text",
          admin: {
            description: "Naam van het event",
          },
        },
        {
          name: "Eventdatum",
          type: "text",
          admin: {
            description: "Datum van het event",
          },
        },
        {
          name: "Subtitel",
          type: "text",
          admin: {
            description: "Subtitel van het event",
          },
        },
        {
          name: "Subtitel2",
          type: "text",
          admin: {
            description: "Tweede subtitel van het event",
          },
        },
        {
          name: "Eventfoto",
          type: "upload",
          relationTo: "media",
          admin: {
            description: "Foto van het event",
          },
        },
      ],
      admin: {
        description: "Event informatie",
      },
    },
  ],
};
