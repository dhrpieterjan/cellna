# Strapi to Payload CMS Field Mapping

This document shows exactly how to map your Strapi data to Payload CMS fields.

## Projects Collection

| Strapi Field | Payload Field | Type | Notes |
|--------------|---------------|------|-------|
| `id` | `id` | Auto | Automatically generated |
| `Actief` | `Actief` | Checkbox | Default: true |
| `Naam` | `Naam` | Text | Required |
| `Aantalverkocht` | `Aantalverkocht` | Number | Default: 0 |
| `Type` | `Type` | Text | Optional |
| `Aantalvantype` | `Aantalvantype` | Number | Optional |
| `Locatie` | `Locatie` | Text | Optional |
| `Fase` | `Fase` | Select | Options: planning, bouw, verkoop, voltooid |
| `Prijs` | `Prijs` | Text | Optional |
| `Projectomschrijving` | `Projectomschrijving` | RichText | HTML content |
| `Lon` + `Lat` | `LocatieCoordinaten` | Point | Geographic coordinates [longitude, latitude] |
| `Tabel` | `Tabel` | Textarea | JSON string |
| `Hoofdfoto` | `Hoofdfoto` | Upload | Relation to media |
| `prijsImage` | `prijsImage` | Upload | Relation to media |
| `Fotosvhp` | `Fotosvhp` | Array | Array of uploads |

## Homepage Global

| Strapi Field | Payload Field | Type | Notes |
|--------------|---------------|------|-------|
| `Wiezijnwe` | `Wiezijnwe` | RichText | HTML content |
| `Wiezijnwefoto` | `Wiezijnwefoto` | Upload | Relation to media |
| `Waarominvestereninvastgoed` | `Waarominvestereninvastgoed` | RichText | HTML content |
| `Bouwgrondtekoop` | `Bouwgrondtekoop` | RichText | HTML content |
| `fotogallerij` | `fotogallerij` | Array | Array of uploads |
| `event.Eventnaam` | `event.Eventnaam` | Text | Event name |
| `event.Eventdatum` | `event.Eventdatum` | Text | Event date |
| `event.Subtitel` | `event.Subtitel` | Text | Event subtitle |
| `event.Subtitel2` | `event.Subtitel2` | Text | Event subtitle 2 |
| `event.Eventfoto` | `event.Eventfoto` | Upload | Relation to media |

## Media Collection

| Strapi Field | Payload Field | Type | Notes |
|--------------|---------------|------|-------|
| `url` | `url` | Auto | Automatically generated |
| `alt` | `alt` | Text | Alt text for accessibility |

## Copy-Paste Instructions

### For Projects

1. Go to `/admin/collections/projects`
2. Create new project
3. Copy each field value from Strapi to corresponding Payload field
4. For images: Upload the image file, it will automatically get a URL
5. For rich text: Copy the HTML content directly

### For Homepage

1. Go to `/admin/globals/homepage`
2. Copy each field value from Strapi to corresponding Payload field
3. For the event group, fill in all event fields
4. For images: Upload the image files

### For Media

1. Go to `/admin/collections/media`
2. Upload each image file
3. Add alt text for accessibility

## Important Notes

- **Rich Text Fields**: Copy HTML content directly from Strapi
- **Images**: Upload files to Payload, don't copy URLs
- **Arrays**: Add each item individually in Payload
- **Relations**: Select the uploaded media files from the dropdown
- **Numbers**: Copy exact values including decimals
- **Checkboxes**: Check if the Strapi value is true
