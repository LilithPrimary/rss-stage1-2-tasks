export async function getCars(url: string, page: number) {
  const response = await fetch(`${url}garage?_limit=7&_page=${page}`);
  return response;
}