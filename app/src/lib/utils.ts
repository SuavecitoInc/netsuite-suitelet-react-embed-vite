export const fetchAPI = async <P, R>(endpoint: string, payload: P) => {
  console.log('ENDPOINT', endpoint);
  console.log('PAYLOAD', payload);
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...payload }),
  });
  const data: R = await response.json();

  return data;
};
