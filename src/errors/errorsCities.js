function notFound(resource = "Item") {
  return {
    type: "notFound",
    message: `${resource} não foi encontrado`,
  };
}

function conflict(resource = "Cidade") {
  return {
    type: "conflict",
    message: `${resource} já existe!`,
  };
}

export const errorsCities = { notFound, conflict };
