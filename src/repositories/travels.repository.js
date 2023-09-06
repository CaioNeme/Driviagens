import { db } from "../database/database.connection.js";

export async function postTravelsRepository(passengerId, flightId) {
  const travel = await db.query(
    `INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`,
    [passengerId, flightId]
  );

  return travel;
}
