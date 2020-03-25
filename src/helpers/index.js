export const removeAuthSideItems = arr => {
  return arr.filter(x => x.title !== "Register" && x.title !== "Login");
};

export const removeAddNewPost = arr => {
  return arr.filter(x => x.title !== "Add New Listing" && x.title !== "User Profile");
}
