const usuarioBtnsPagina = () => {
}
const usuarioBtnsModificar = ({btns, usuario, checkLenguajes}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const res = await usuario.getOne(Number(btn.dataset.mod))
            document.querySelector(".btnSubmit").value = "actualizar"
            document.querySelector(".btnSubmit").setAttribute("data-edit", btn.dataset.mod)
            document.querySelector(".btnSubmit").style.backgroundColor = "orange"

            document.querySelector("#inpNombre").value = res.nombre
            document.querySelector("#inpEmail").value = res.email
            document.querySelector("#inpTelefono").value = res.telefono
            document.querySelector("#inpEdad").value = res.edad
            document.querySelector("#inpSobremi").value = res.sobremi.join("\n\n")
            document.querySelector("#inpExperiencia").value = res.experiencia.join("\n\n")
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
    btnAgregarEmail.addEventListener("click", () => {
        const inpEmail = document.querySelector(".label-email")
        inpEmail.insertAdjacentHTML("beforeend", `
            <input name="email" id="inpEmail" type="email">
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