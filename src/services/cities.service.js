function reformatedName(name) {
  return name.trim().toLowerCase();
}

function verifyName(res) {
  if (!res.rows) {
    return "CONFLICT";
  } else {
    return "CREATED";
  }
}

export const citiesServices = { reformatedName, verifyName };
