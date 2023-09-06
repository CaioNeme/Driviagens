function conflict() {
  return {
    type: "conflict",
    message: `A cidade de origem tem que ser diferente do destino!`,
  };
}

function unprocessable_entity() {
  return {
    type: "unprocessable_entity",
    message: "A data deve ser maior que a data atual!",
  };
}

export const errorsFlights = { conflict, unprocessable_entity };
