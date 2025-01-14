export const getInitialsByName = (name: string | undefined): string => {
  if (!name) return "";
  return name
    .split(" ")
    .map((namePart) => namePart[0].toUpperCase())
    .join("");
};
