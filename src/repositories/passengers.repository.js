import { db } from "../database/database.connection.js";

export async function postPassengersRepository(firstName, lastName) {
  const passengers = await db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
  return passengers;
}

export async function getPassengersWithoutNameRepository() {
  const passengers = await db.query(`
    SELECT
      CONCAT(p."firstName", ' ', p."lastName") AS passenger,
      COUNT(t."id") AS travels
    FROM
      "passengers" p
    LEFT JOIN
      "travels" t ON p."id" = t."passengerId"
    GROUP BY
      passenger
    ORDER BY
      travels DESC;
  `);

  return passengers;
}

export async function getPassengersWithNameRepository(name) {
  const passengers = await db.query(
    `
    SELECT
      CONCAT(p."firstName", ' ', p."lastName") AS passenger,
      COUNT(t."id") AS travels
    FROM
      "passengers" p
    LEFT JOIN
      "travels" t ON p."id" = t."passengerId"
    WHERE
      p."firstName" = $1 OR p."lastName" = $1
    GROUP BY
      passenger
    ORDER BY
      travels DESC;
  `,
    [name]
  );
  return passengers;
}
