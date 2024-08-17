import axios from "axios";

export const fetchCharacters = async (
  page: number = 1
): Promise<RootObject> => {
  try {
    const response = await axios.get<RootObject>(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch characters");
  }
};
