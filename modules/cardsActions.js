import { usuariosTable } from "./loadTables.js";
import b from './btnsActions.js'
import usuario from "../storage/usuario.js";

export const usuariosAction = async () => {
    const form = document.querySelector("form")
    const btnSubmit = document.querySelector(".btnSubmit")
    const checkboxes = document.querySelectorAll("input[name='lenguajes']")
    const sobreMi = document.querySelector("#inpSobremi")
    const experiencia = document.querySelector("#inpExperiencia")
    form.addEventListener("submit", async (e)=> {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        data["edad"] = Number(data.edad)
        data["sobremi"] = sobreMi.value.split("\n").map(e => e.trim()).filter(e => e !== "")
        data["experiencia"] = experiencia.value.split("\n").map(e => e.trim()).filter(e => e !== "")
        const lenguajes = []
        checkboxes.forEach(input => {
            if (input.checked && !lenguajes.includes(input.value.charAt(0).toUpperCase() + input.value.slice(1))){
                lenguajes.push(input.value.charAt(0).toUpperCase() + input.value.slice(1))
            }
        })
        data["lenguajes"] = lenguajes
        if (btnSubmit.value === "actualizar" && btnSubmit.getAttribute("data-edit")){
            let res = await usuario.putOne({id: Number(btnSubmit.dataset.edit), obj: data})
            res.status === 200 ? alert(`!! El perfil se ha actualizado !!`) : alert(`${res.message}`)
        } else {
            let res = await usuario.post(data)
            res.status === 201 ? alert(`!! El perfil se ha registrado !!`) : alert(`${res.message}`)
        }
    })
    usuariosTable(await usuario.getAll());
    // b.usuarioBtnsPagina(document.querySelectorAll(".btnPagina"))
    b.usuarioBtnsModificar({btns:document.querySelectorAll(".btnModificar"), usuario, checkboxes})
    b.usuarioBtnsEliminar({btns:document.querySelectorAll(".btnEliminar"), usuario})
};
