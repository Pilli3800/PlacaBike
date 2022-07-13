const BASE_URL = "";

export const getDataFromApi = async (url = BASE_URL) => {
  const response = await fetch(url);
  const data = await response.json();
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
