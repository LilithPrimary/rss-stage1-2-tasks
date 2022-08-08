export async function deleteCar(url: string, id: number) {
  const response = await fetch(`${url}garage/${id}`, {
    method: 'DELETE',
  });
  return response;
}