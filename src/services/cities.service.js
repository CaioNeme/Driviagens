function reformatedName(name) {
  return name.trim().toLowerCase();
}

function verifyName(res) {
  if (!res.rows) throw new Error("Cidade não encontrada");
}

export const citiesServices = { reformatedName, verifyName };
