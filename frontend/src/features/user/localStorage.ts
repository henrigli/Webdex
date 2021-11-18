/*
    Methods inspired by https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
*/

export const saveUser = (state: { name: String, favorites: number[] }) => {
  try {
    const serializedName = JSON.stringify(state);
    localStorage.setItem("user", serializedName);
  } catch (err) {
    console.log(err);
  }
};

export const loadName = (): { name: String, favorites: [] } => {
  try {
    const serializedUser = localStorage.getItem("user");

    // eslint-disable-next-line
    if (serializedUser == undefined) {
      return { name: "", favorites: []};
    }

    const parsed = JSON.parse(serializedUser);

    return {
      name: parsed.name || "",
      favorites: parsed.favorites || []
    };
  } catch (err) {
    console.log(err);
    return { name: "", favorites: [] };
  }
};
