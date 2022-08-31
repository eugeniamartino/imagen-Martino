import { stock } from "./../data/data.js"

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000)
    })
}