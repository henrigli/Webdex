/*
    Methods inspired by https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
*/

export const saveName = (state: {name: String}) => {
    try {
        const serializedName = JSON.stringify(state);
        localStorage.setItem('name', serializedName)
    } catch (err) {
        console.log(err);
    }
}

export const loadName = (): {name: String} => {
    try {
        const serializedName = localStorage.getItem('name');
        
        if (serializedName == undefined) {
            return {name: ''};
        }

        return JSON.parse(serializedName);
    } catch (err) {
        console.log(err);
        return {name: ''};
    }
}
