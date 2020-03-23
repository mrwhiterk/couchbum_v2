export const removeAuthSideItems = arr => {
  return arr.filter(x => x.title !== "Register" && x.title !== "Login");
};
