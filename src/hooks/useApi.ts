import { useCallback } from "react";

const url = process.env.REACT_APP_SHIPS_API;
const urlsApi = [url, `${url}?page=2`, `${url}?page=3`, `${url}?page=4`];

const useApi = (url: string) => {
  const getShips = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }, [url]);
  return { getShips };
};

export default useApi;
