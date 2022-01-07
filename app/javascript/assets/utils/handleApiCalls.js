const handleApiCalls = async (url, params) => {
  try {
    const response = await fetch(url, params);

    if (!response.ok) {
      new Error(response.statusText);
    }

    return await response.json();

  } catch (error) {
    console.error("Error: " + error.message);
  }
};

export const getDataFromApi = (url) => handleApiCalls(url, { method: 'get' });

export const removeDataFromApi = (url) => handleApiCalls(url, { method: 'delete' });

export const sendDataToApi = (url, method, data) =>
  handleApiCalls(url,
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
;