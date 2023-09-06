import {
  getPassengersWithNameRepository,
  getPassengersWithoutNameRepository,
  postPassengersRepository,
} from "../repositories/passengers.repository.js";

function postPassengers(firstName, lastName) {
  return postPassengersRepository(firstName, lastName);
}

function getPassengers(name) {
  if (!name) {
    const passengerWithoutName = getPassengersWithoutNameRepository();

    if (passengerWithoutName.rowCount > 10) {
      return null;
    }

    return passengerWithoutName;
  }

  const passengerWithName = getPassengersWithNameRepository(name);

  if (passengerWithName.rowCount > 10) {
    return null;
  }

  return passengerWithName;
}

export const passengersService = { postPassengers, getPassengers };
