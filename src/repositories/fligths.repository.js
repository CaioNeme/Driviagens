import { db } from "../database/database.connection.js";

export async function postFlightsRepository(origin, destination, date) {
  const flight = await db.query(
    `INSERT INTO flights ("origin", "destination", "date") VALUES ($1, $2, $3);`,
    [origin, destination, date]
  );

  return flight;
}

export async function getFlightsRepository(origin, destination) {
  const query = await db.query(
    `
    SELECT
      f.id,
      orig.name AS origin,
      dest.name AS destination,
      TO_CHAR(f.date, 'DD-MM-YYYY') AS date
    FROM
      flights AS f
    JOIN
      cities AS orig ON f.origin = orig.id
    JOIN
      cities AS dest ON f.destination = dest.id
    WHERE
      ($1::VARCHAR IS NULL OR orig.name = $1::VARCHAR)
      AND ($2::VARCHAR IS NULL OR dest.name = $2::VARCHAR)
    ORDER BY
      f.date;
    `,
    [origin, destination]
  );
  return query;
}
