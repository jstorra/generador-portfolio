const usuarioBtnsPagina = () => {
}
const usuarioBtnsModificar = ({btns, usuario, checkLenguajes}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const res = await usuario.getOne(Number(btn.dataset.mod))
            document.querySelector(".fieldset-legend").textContent = "actualizar portfolio"
            document.querySelector(".btnSubmit").value = "actualizar"
            document.querySelector(".btnSubmit").setAttribute("data-edit", btn.dataset.mod)
            document.querySelector(".btnSubmit").style.backgroundColor = "orange"

            // nombre
            document.querySelector("#inpNombre").value = res.nombre

            // emails
            const labelEmail = document.querySelector(".label-email")
            const emails = res.emails.map(email => `
                <input name="emails" class="inpEmail" type="text" value="${email}">
                `).join("")
            labelEmail.innerHTML = `Email${emails}`


            document.querySelector("#inpTelefono").value = res.telefono
            document.querySelector("#inpEdad").value = res.edad
            document.querySelector("#inpSobremi").value = res.sobremi.join("\n\n")
            document.querySelector("#inpExperiencia").value = res.experiencia.join("\n\n")
            
            // lenguajes programación
            res.lenguajes.forEach(l => {
                checkLenguajes.forEach(e => {
                    if (e.value === l) e.checked = true
                })
            })


        })
    })
}
const usuarioBtnsEliminar = ({btns, usuario}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => await usuario.deleteOne(Number(btn.dataset.del)))
    })
}
const btnsAgregar = () => {
    const btnAgregarEmail = document.querySelector(".addEmail")
    const btnAgregarIdioma = document.querySelector(".addIdioma")
    const btnAgregarTelefono = document.querySelector(".addTelefono")
    btnAgregarEmail.addEventListener("click", () => {
        const labelEmail = document.querySelector(".label-email")
        labelEmail.insertAdjacentHTML("beforeend", `
            <input name="email" id="inpEmail" type="email" style="margin-top: 5px">
        `)
    })
    btnAgregarTelefono.addEventListener("click", () => {
        const labelTelefono = document.querySelector(".label-telefono")
        labelTelefono.insertAdjacentHTML("beforeend", `
            <input name="telefono" id="inpTelefono" type="text" style="margin-top: 5px">
        `)
    })
    btnAgregarIdioma.addEventListener("click", () => {
        const divIdiomas = document.querySelector(".idiomas")
        const selectIdiomas = document.querySelector(".select-idiomas")
        divIdiomas.appendChild(selectIdiomas.cloneNode(true))
    })
}

export default {
    usuarioBtnsPagina,
    usuarioBtnsModificar,
    usuarioBtnsEliminar,
    btnsAgregar
}
