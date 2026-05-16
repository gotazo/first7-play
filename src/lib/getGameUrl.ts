export function getGameSlug(id: string) {
  return id
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/^src\/content\/games\//, "")
    .replace(/^games\//, "")
    .replace(/\.(md|mdx)$/, "")
    .replace(/(^|\/)index$/, "")
    .split("/")
    .filter(Boolean)
    .join("/");
}

export function getGameUrl(id: string) {
  const slug = getGameSlug(id);

  return slug ? `/games/${slug}` : "/games";
}
