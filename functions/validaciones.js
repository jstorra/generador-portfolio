export const validacionDato = ({ nombreCampo, valor, tipoEsperado }) => {
    if (valor.constructor.name.toLowerCase() === "string") valor = valor.trim()
    if (valor.constructor.name.toLowerCase() === "array" && valor.length === 0) throw new Error(`Debes llenar el campo ${nombreCampo.toUpperCase()}.`)
    if (nombreCampo === "emails"){
      valor.forEach(email => {
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) throw new Error(`El correo ${email} no es válido.`)
      });
    } 
    if (nombreCampo === "imgperfil" && !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(valor)) throw new Error('La URL de la foto de perfil no es válida.')
    if (nombreCampo === "redes"){
      for (const key in valor){
        if (key === "github" && !/^https:\/\/github\.com\/[a-zA-Z0-9_-]+$/.test(valor[key])) throw new Error(`La URL del perfil de ${key.toUpperCase()} no es válida.`)
        if (key === "linkedin" && !/^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+$/.test(valor[key])) throw new Error(`La URL del perfil de ${key.toUpperCase()} no es válida.`)
        if (key === "x" && !/^https:\/\/twitter\.com\/[a-zA-Z0-9_-]+$/.test(valor[key])) throw new Error(`La URL del perfil de ${key.toUpperCase()} no es válida.`)
      }
    }
    if (!valor) throw new Error(`El campo ${nombreCampo.toUpperCase()} no está definido.`);
    if (valor.constructor.name.toLowerCase() !== tipoEsperado.toLowerCase() || valor.constructor.name.toLowerCase() === "string" && valor.includes("<")) throw new Error(`El campo ${nombreCampo.toUpperCase()} tiene un formato inválido.`);
    return { [nombreCampo]: valor };
}

export const validacionObj = (obj) => {
  if (obj.constructor.name.toLowerCase() !== "object" || Object.keys(obj).length === 0) throw new Error('Usuario envie datos por favor.');
}
