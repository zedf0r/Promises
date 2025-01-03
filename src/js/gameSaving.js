import json from "./parser";
import read from "./reader";

export class GameSavingLoader {
    static load() {
        return new Promise(resolve => {
            setTimeout(() => {
                return read()
                    .then(data => json(data))
                    .then(value => {
                    return resolve(JSON.parse(value))
                    })
                    .catch(error => {
                        throw new Error(error);
                    })
            }, 1000)
            
        })

    }
}