export const validacionDato = ({ nombreCampo, valor, tipoEsperado }) => {
    if (valor.constructor.name.toLowerCase() === "string") valor = valor.trim()
    if (valor.constructor.name.toLowerCase() === "array" && valor.length === 0) throw new Error(`Debes llenar el campo ${nombreCampo.toUpperCase()}.`)
    if (nombreCampo === "email" && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor)) throw new Error('El correo no es válido.')
    if (!valor) throw new Error(`El campo ${nombreCampo.toUpperCase()} no está definido.`);
    if (valor.constructor.name.toLowerCase() !== tipoEsperado.toLowerCase() || valor.constructor.name.toLowerCase() === "string" && valor.includes("<")) throw new Error(`El campo ${nombreCampo.toUpperCase()} tiene un formato inválido.`);
    return { [nombreCampo]: valor };
}

export const validacionObj = (obj) => {
  if (obj.constructor.name.toLowerCase() !== "object" || Object.keys(obj).length === 0) throw new Error('Usuario envie datos por favor.');
}