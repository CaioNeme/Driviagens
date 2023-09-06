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
    console.log(error);
    if (error.code === "23505") {
      res.status(status.CONFLICT).send(error.detail);
    } else {
      res.sendStatus(status.INTERNAL_SERVER_ERROR);
    }
  }
}
