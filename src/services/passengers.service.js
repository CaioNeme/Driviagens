import {
  getPassengersWithNameRepository,
  getPassengersWithoutNameRepository,
  postPassengersRepository,
} from "../repositories/passengers.repository.js";

function postPassengers(firstName, lastName) {
  return postPassengersRepository(firstName, lastName);
}

async function getPassengers(name) {
  if (!name) {
    const passengerWithoutName = await getPassengersWithoutNameRepository();

    if (passengerWithoutName.rowCount > 10) {
      throw {
        type: "internalServerError",
        message: "Too many requests",
      };
    }

    return passengerWithoutName;
  }

  const passengerWithName = await getPassengersWithNameRepository(name);

  if (passengerWithName.rowCount > 10) {
    throw {
      type: "internalServerError",
      message: "Too many requests",
    };
  }

  return passengerWithName;
}

export const passengersService = { postPassengers, getPassengers };
