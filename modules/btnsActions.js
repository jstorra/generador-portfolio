import m from "./loadMains.js"

const usuarioBtnsPagina = ({btns, usuario}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            let res = usuario.getOne(Number(btn.dataset.pag))
            m.portfolioMain(await res)
        })
    })
}

const usuarioBtnsModificar = ({btns, usuario}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const checkLenguajes = document.querySelectorAll("input[name='lenguajes']")
            const res = await usuario.getOne(Number(btn.dataset.mod))
            document.querySelector(".fieldset-legend").textContent = "actualizar portfolio"
            document.querySelector(".btnSubmit").value = "actualizar"
            document.querySelector(".btnSubmit").setAttribute("data-edit", btn.dataset.mod)
            document.querySelector(".btnSubmit").style.backgroundColor = "orange"

            // nombre
            document.querySelector("#inpNombre").value = res.nombre

            // profesión
            document.querySelector("#inpProfesion").value = res.profesion

            // emails
            const labelEmail = document.querySelector(".label-email")
            const emails = res.emails.map(email => `
                <input name="emails" class="inpEmail" type="text" value="${email}" style="margin-top: 5px">
                `).join("")
            labelEmail.innerHTML = `Email${emails}`

            // telefonos
            const labelTelefonos = document.querySelector(".label-telefono")
            const telefonos = res.telefonos.map(telefono => `
                <input name="telefonos" class="inpTelefono" type="text" value="${telefono}" style="margin-top: 5px">
                `).join("")
            labelTelefonos.innerHTML = `Telefono${telefonos}`

            document.querySelector("#inpEdad").value = res.edad

            // lenguajes programación
            res.lenguajes.forEach(l => {
                checkLenguajes.forEach(e => {
                    if (e.value === l) e.checked = true
                })
            })

            document.querySelector("#inpSobremi").value = res.sobremi.join("\n\n")
            document.querySelector("#inpEducacion").value = res.educacion.join("\n\n")
            document.querySelector("#inpExperiencia").value = res.experiencias.join("\n\n")
            document.querySelector("#inpHobbies").value = res.hobbies.join("\n\n")
            
            // idiomas
            const divIdiomas = document.querySelector("div.idiomas")
            const optionIdiomas = document.querySelectorAll("select[name='idiomas'] option")
            const selects = []
            res.idiomas.forEach(i => {
                const options = []
                optionIdiomas.forEach(option => {
                    if (!option.value){
                        options.push(`<option value="">Selecciona un idioma</option>`)
                    } else if (option.value === i){
                        options.push(`<option value="${i}" selected>${i}</option>`)
                    } else {
                        options.push(`<option value="${option.value}">${option.value}</option>`)
                    }
                })
                selects.push(`
                <select class="select-idiomas" name="idiomas">
                    ${options.join("")}
                </select>
                `)
            })
            divIdiomas.innerHTML = selects.join("")

            // foto perfil
            document.querySelector("#inpImgperfil").value = res.imgperfil
            
            // redes
            document.querySelector("#inpGitHub").value = res.redes.github
            document.querySelector("#inpLinkedin").value = res.redes.linkedin
            document.querySelector("#inpX").value = res.redes.x
        })
    })
}

const usuarioBtnsEliminar = ({btns, usuario}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            let res = await usuario.deleteOne(Number(btn.dataset.del))
            if (res.status === 200) alert("!! El perfil se ha eliminado !!")
        })
            
    })
}

const btnsAgregar = () => {
    const btnAgregarEmail = document.querySelector(".addEmail")
    const btnAgregarIdioma = document.querySelector(".addIdioma")
    const btnAgregarTelefono = document.querySelector(".addTelefono")
    btnAgregarEmail.addEventListener("click", () => {
        const labelEmail = document.querySelector(".label-email")
        labelEmail.insertAdjacentHTML("beforeend", `
            <input name="emails" id="inpEmail" type="email" style="margin-top: 5px">
        `)
    })
    btnAgregarTelefono.addEventListener("click", () => {
        const labelTelefono = document.querySelector(".label-telefono")
        labelTelefono.insertAdjacentHTML("beforeend", `
            <input name="telefonos" id="inpTelefono" type="text" style="margin-top: 5px">
        `)
    })
    btnAgregarIdioma.addEventListener("click", () => {
        const divIdiomas = document.querySelector(".idiomas")
        divIdiomas.insertAdjacentHTML("beforeend", `
            <select class="select-idiomas" name="idiomas">
                <option value="" selected>Selecciona un idioma</option>
                <option value="Español">Español</option>
                <option value="Ingles">Ingles</option>
                <option value="Frances">Frances</option>
                <option value="Aleman">Aleman</option>
                <option value="Italiano">Italiano</option>
                <option value="Portugues">Portugues</option>
                <option value="Japones">Japones</option>
                <option value="Chino">Chino</option>
                <option value="Ruso">Ruso</option>
                <option value="Arabe">Arabe</option>
            </select>
        `)
    })
}

export default {
    usuarioBtnsPagina,
    usuarioBtnsModificar,
    usuarioBtnsEliminar,
    btnsAgregar
}