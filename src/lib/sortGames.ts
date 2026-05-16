type TitledGame = {
  data: {
    title: string;
  };
};

export function sortGamesByTitle<TGame extends TitledGame>(
  games: TGame[]
) {
  return [...games].sort((a, b) =>
    a.data.title.localeCompare(
      b.data.title,
      undefined,
      {
        sensitivity: "base"
      }
    )
  );
}
