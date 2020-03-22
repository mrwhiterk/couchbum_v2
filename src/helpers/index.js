export const removeAuthSideItems = arr => {
    console.log('hit')
  return arr.filter(x => x.title !== "Register" && x.title !== "Login");
};
