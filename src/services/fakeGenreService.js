export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Self-help" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Management" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Research" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
