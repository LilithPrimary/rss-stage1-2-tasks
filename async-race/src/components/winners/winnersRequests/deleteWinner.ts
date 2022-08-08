export async function deleteWinner(url: string, id: number) {
  const response = await fetch(`${url}winners/${id}`, {
    method: 'DELETE',
  });
  return response;
}