export async function getWinners(url: string, page = '', options = '', limit = '') {
  const response = await fetch(`${url}winners?_limit=${limit}&_page=${page}&${options}`);
  return response;
}