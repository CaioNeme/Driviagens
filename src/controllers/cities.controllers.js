import httpStatus from "http-status";
import { citiesServices } from "../services/cities.service.js";
import { postCityRepository } from "../repositories/cities.repository.js";

export async function postCityControllers(req, res) {
  const status = httpStatus;
  const { name } = req.body;

  try {
    const cityName = citiesServices.reformatedName(name);
    await postCityRepository(cityName);

    res.sendStatus(status.CREATED);
  } catch (error) {
    const httpCode = citiesServices.verifyName(error);

    if (httpCode === "CONFLICT") {
      res.status(status.CONFLICT).send(`City(${name}) already exists.`);
    }
  }
}
