export async function getWinner(url: string, id: number) {
  const response = await fetch(`${url}winners/${id}`);
  return response;
}