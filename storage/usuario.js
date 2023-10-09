import crud from "../functions/crud.js";
const endpoint = "/perfiles/";
const tabla = {
    nombre: "string",
    email: "string",
    telefono: "string",
    edad: "number",
    sobremi: "array",
    lenguajes: "array",
    experiencia: "array",
    redes: "object",
};
const c = crud({ endpoint, tabla });
export default c;

// let obj = {
//     nombre: "ricardo",
//     email: "nose@gmail.com",
//     telefono: "3141541151",
//     edad: 23,
//     sobremi: ["Apasionado programador", "loquito loquito"],
//     lenguajes: ["Java", "Python"],
//     experiencia: ["en Campus :)", "en la casa"],
//     linkrepos: "https://nosense.com"
// };

// console.log(await c.getAll())
// console.log(await c.getOne());
// console.log(await c.deleteOne());
// console.log(await c.post(obj));
// console.log(await c.putOne({id: 1,obj}));