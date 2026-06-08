/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Parses and transforms raw Google Drive image asset URLs into high-performance CDN-delivery targets.
 * 
 * Google Drive's standard share links (like drive.google.com/file/d/...) serve HTML pages with viewers, 
 * which cannot be embedded inside image source tags (img src="...").
 * This function extracts the unique file ID and converts it into a direct stream link (https://lh3.googleusercontent.com/d/[ID]).
 * This allows direct image mounting with referrer policies bypassed securely.
 * 
 * @param url The raw sharing or view link retrieved from Google Drive.
 * @returns The optimized direct CDN resource URL ready for img elements.
 */
export function getDirectImageUrl(url: string | undefined): string {
  if (!url) return "";

  const trimmed = url.trim();

  // Handle documents/files originating from Google Drive domains
  if (trimmed.includes("drive.google.com") || trimmed.includes("docs.google.com")) {
    let fileId = "";

    // 1. Regex match for standard /file/d/[FILE_ID] format
    const dMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (dMatch && dMatch[1]) {
      fileId = dMatch[1];
    } else {
      // 2. Fallback regex match for query parameter ?id=[FILE_ID] format
      const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (idMatch && idMatch[1]) {
        fileId = idMatch[1];
      }
    }

    if (fileId) {
      // Return the high-performance userusercontent streaming path
      return `https://lh3.googleusercontent.com/d/${fileId}`;
    }
  }

  // Fallback: If not a Google Drive link, return the original trimmed URL
  return trimmed;
}
