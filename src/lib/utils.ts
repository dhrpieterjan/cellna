import { Media } from "@/payload-types";

/**
 * Utility function to extract URL from media field
 * Handles both string URLs and Payload CMS media objects
 */
export const getMediaUrl = (
  media: Media | string | null | undefined
): string => {
  if (!media) {
    // For production, use Vercel URL for fallback image
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}/imagedummy.png`;
    }
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
      return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/imagedummy.png`;
    }
    return "/imagedummy.png";
  }

  if (typeof media === "string") {
    return media;
  }
  // If it's already a full URL, return as is
  if (
    media.url &&
    typeof media.url === "string" &&
    (media.url.startsWith("http://") || media.url.startsWith("https://"))
  ) {
    return media.url;
  }

  // For localhost, use relative URLs to avoid private IP issues
  if (process.env.NODE_ENV === "development") {
    return media.url ?? "/imagedummy.png"; // Use relative URL like "/api/media/file/..."
  }

  // For production, use Vercel URL or fallback to NEXT_PUBLIC_API_URL
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  return `${baseUrl}${media.url}`;
};

/**
 * Utility function to extract alt text from media field
 * Handles both string and Payload CMS media objects
 */
export const getMediaAlt = (media: Media | null | undefined): string => {
  if (!media || !media.alt) {
    return "";
  }
  return media.alt;
};

/**
 * Utility function to create a photo object for PhotoGallery component
 * Combines URL and alt text extraction
 */
export const createPhotoObject = (
  media: Media | null | undefined
): { url: string; alt: string } => {
  return {
    url: getMediaUrl(media),
    alt: getMediaAlt(media),
  };
};
