export async function getCar(url: string, id: number) {
  const response = await fetch(`${url}garage/${id}`);
  return response;
}