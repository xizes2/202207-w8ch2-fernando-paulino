import { useCallback } from "react";
import StarShipResults from "../interfaces/interfaces";

const url = process.env.REACT_APP_SHIPS_API;
const urlsApi = [url, `${url}?page=2`, `${url}?page=3`, `${url}?page=4`];

const useApi = (url: string) => {
  const getShips = useCallback(async () => {
    const response = await fetch(url);
    const data: StarShipResults = await response.json();

    return data;
  }, [url]);
  return { getShips };
};

export default useApi;
