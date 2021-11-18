/*
    Methods inspired by https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
*/

export const saveName = (state: { name: String }) => {
  try {
    const serializedName = JSON.stringify(state);
    localStorage.setItem("name", serializedName);
  } catch (err) {
    console.log(err);
  }
};

export const loadName = (): { name: String, favorites: [] } => {
  try {
    const serializedName = localStorage.getItem("name");

    // eslint-disable-next-line
    if (serializedName == undefined) {
      return { name: "", favorites: []};
    }

    const parsed = JSON.parse(serializedName);

    return {
      name: parsed.name || "",
      favorites: parsed.favorites || []
    };
  } catch (err) {
    console.log(err);
    return { name: "", favorites: [] };
  }
};
