import dayjs from "dayjs";
import {
  getFlightsRepository,
  postFlightsRepository,
} from "../repositories/fligths.repository.js";

async function postFlightsServices(city1, city2, date) {
  if (city1 === city2) {
    throw { type: "conflict", message: "Cidades iguais" };
  }
  if (!date) {
    throw { type: "unprocessableEntity", message: "Data inválida" };
  }
  if (dayjs().isAfter(dayjs(date).format("DD-MM-YYYY"))) {
    throw { type: "unprocessableEntity", message: "Data inválida" };
  }

  const resp = await postFlightsRepository(city1, city2, date);

  return resp;
}

async function getFlightsService(origin, destination, smallerDate, biggerDate) {
  if ((!smallerDate && biggerDate) || (smallerDate && !biggerDate)) {
    throw { type: "unprocessableEntity", message: "Data inválida" };
  }
  if (smallerDate && biggerDate && smallerDate > biggerDate) {
    throw { type: "badRequest", message: "Data inválida" };
  }

  let originName;
  let destinationName;

  if (!origin) {
    origin = null;
  } else {
    originName = origin.trim().toLowerCase();
  }
  if (!destination) {
    destination = null;
  } else {
    destinationName = destination.trim().toLowerCase();
  }

  const resp = await getFlightsRepository(originName, destinationName);

  const filteredFlights = resp.rows.filter((flight) => {
    const flightDate = dayjs(flight.date).format("DD-MM-YYYY");

    return (
      (!smallerDate || flightDate >= smallerDate) &&
      (!biggerDate || flightDate <= biggerDate)
    );
  });
  const newResp = filteredFlights.map((flight) => ({
    id: flight.id,
    origin: flight.origin,
    destination: flight.destination,
    date: dayjs(flight.date).format("DD-MM-YYYY"),
  }));

  return newResp;
}

export const flightsService = {
  postFlightsServices,
  getFlightsService,
};
