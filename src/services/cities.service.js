import { errorsCities } from "../errors/errorsCities.js";
import {
  postCityRepository,
  verifyCity,
} from "../repositories/cities.repository.js";

async function postCityServices(name) {
  const cityName = name.trim().toLowerCase();
  const alreadyExists = await verifyCity(cityName);
  if (alreadyExists > 0) throw errorsCities.conflict(name);
  return postCityRepository(cityName);
}

export const citiesServices = { postCityServices };
