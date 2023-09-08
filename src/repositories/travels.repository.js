import { db } from "../database/database.connection.js";

export async function postTravelsRepository(passengerId, flightId) {
  const respPassengers = await db.query(
    `SELECT * FROM "passengers" WHERE "id" = $1;`,
    [passengerId]
  );

  const respFlights = await db.query(
    `SELECT * FROM "flights" WHERE "id" = $1;`,
    [flightId]
  );

  if (respFlights.rowCount < 1 || respPassengers.rowCount < 1) {
    throw { type: "notFound", message: "O passageiro ou voo não existem!" };
  } else {
    const travel = await db.query(
      `INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`,
      [passengerId, flightId]
    );
    return travel;
  }
}
