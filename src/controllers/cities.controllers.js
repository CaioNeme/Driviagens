import httpStatus from "http-status";
import { citiesServices } from "../services/cities.service.js";

export async function postCityControllers(req, res) {
  const { name } = req.body;

  await citiesServices.postCityServices(name);
  res.sendStatus(httpStatus.CREATED);
}
