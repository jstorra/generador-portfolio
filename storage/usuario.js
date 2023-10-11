import crud from "../functions/crud.js";
const endpoint = "/perfiles/";
const tabla = {
    nombre: "string",
    profesion: "string",
    emails: "array",
    telefonos: "array",
    edad: "string",
    lenguajes: "array",
    sobremi: "array",
    educacion: "array",
    experiencias: "array",
    hobbies: "array",
    idiomas: "array",
    imgperfil: "string",
    redes: "object",
};
const c = crud({ endpoint, tabla });
export default c;

// console.log(await c.getAll())
// console.log(await c.getOne());
// console.log(await c.deleteOne());
// console.log(await c.post(obj));
// console.log(await c.putOne({id: 1,obj}));
