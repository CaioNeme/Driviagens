function conflict() {
  return {
    type: "conflict",
    message: `A cidade de origem tem que ser diferente do destino!`,
  };
}

function unprocessableEntity() {
  return {
    type: "unprocessableEntity",
    message: "A data deve ser maior que a data atual!",
  };
}

export const errorsFlights = { conflict, unprocessableEntity };
