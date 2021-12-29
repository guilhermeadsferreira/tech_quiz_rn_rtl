export const mustMountQuizURL = (url: string, queryParam: string) => {
  if (url.includes("?")) {
    return `${url}&${queryParam}`;
  }

  return `${url}/api.php?${queryParam}`;
};
