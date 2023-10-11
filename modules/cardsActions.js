import t from "./loadTables.js";
import b from './btnsActions.js'
import usuario from "../storage/usuario.js";

const usuariosAction = async () => {
    const form = document.querySelector("form")
    const btnSubmit = document.querySelector(".btnSubmit")

    const sobreMi = document.querySelector("#inpSobremi")
    const educacion = document.querySelector("#inpEducacion")
    const experiencia = document.querySelector("#inpExperiencia")
    const hobbies = document.querySelector("#inpHobbies")

    const checkLenguajes = document.querySelectorAll("input[name='lenguajes']")
    
    const lenguajes = []
    const telefonos = []
    const emails = []
    const idiomas = []
    
    form.addEventListener("submit", async (e)=> {
        e.preventDefault()
        const inpEmails = document.querySelectorAll("input[name='emails']")
        const inpTelefonos = document.querySelectorAll("input[name='telefonos']")
        const selectIdiomas = document.querySelectorAll("select[name='idiomas']")

        const data = Object.fromEntries(new FormData(e.target))

        data["sobremi"] = sobreMi.value.split("\n").map(e => e.trim()).filter(e => e !== "")
        data["educacion"] = educacion.value.split("\n").map(e => e.trim()).filter(e => e !== "")
        data["experiencias"] = experiencia.value.split("\n").map(e => e.trim()).filter(e => e !== "")
        data["hobbies"] = hobbies.value.split("\n").map(e => e.trim()).filter(e => e !== "")
        
        // emails
        inpEmails.forEach(input => {
            if (input.value.trim() !== "" && !emails.includes(input.value.trim().toLowerCase())) emails.push(input.value.trim().toLowerCase())
        })
        data["emails"] = emails

        // telefonos
        inpTelefonos.forEach(input => {
            if (input.value.trim() !== "" && !telefonos.includes(input.value.trim().toLowerCase())) telefonos.push(input.value.trim().toLowerCase())
        })
        data["telefonos"] = telefonos

        // lenguajes programación
        checkLenguajes.forEach(input => {
            if (input.checked && !lenguajes.includes(input.value.charAt(0).toUpperCase() + input.value.slice(1))){
                lenguajes.push(input.value.charAt(0).toUpperCase() + input.value.slice(1))
            }
        })
        data["lenguajes"] = lenguajes

        // idiomas
        selectIdiomas.forEach(input => {
            input = input.value.trim().toLowerCase()
            if (input !== "" && !idiomas.includes(input.charAt(0).toUpperCase() + input.slice(1))){
                idiomas.push(input.charAt(0).toUpperCase() + input.slice(1))
            }
        })
        data["idiomas"] = idiomas

        // redes
        data["redes"] = {
            github: document.querySelector("#inpGitHub").value.trim(),
            linkedin: document.querySelector("#inpLinkedin").value.trim(),
            x: document.querySelector("#inpX").value.trim()
        }

        // solicitudes
        if (btnSubmit.value === "actualizar" && btnSubmit.getAttribute("data-edit")){
            let res = await usuario.putOne({id: Number(btnSubmit.dataset.edit), obj: data})
            res.status === 200 ? alert(`!! El perfil se ha actualizado !!`) : alert(`${res.message}`)
        } else {
            let res = await usuario.post(data)
            res.status === 201 ? alert(`!! El perfil se ha registrado !!`) : alert(`${res.message}`)
        }
    })
    b.btnsAgregar()
    t.usuariosTable(await usuario.getAll());
    b.usuarioBtnsPagina({btns: document.querySelectorAll(".btnPagina"), usuario})
    b.usuarioBtnsModificar({btns:document.querySelectorAll(".btnModificar"), usuario, checkLenguajes})
    b.usuarioBtnsEliminar({btns:document.querySelectorAll(".btnEliminar"), usuario})
};

export default {
    usuariosAction
}