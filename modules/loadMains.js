import a from './cardsActions.js'
import b from './btnsActions.js'
import t from './loadTables.js'
import ft from './filterTables.js'
import usuario from '../storage/usuario.js'

const usuariosMain = async (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Portfolios</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Portfolios</a></li>
        </ul>
        <div class="info-data">
            <div class="card card-form">
                <form>
                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">nuevo portfolio</legend>
                        
                        <!-- INFORMACIÓN BASICA -->
                        <div class="first-inputs">
                            <label for="inpNombre">Nombre completo<input name="nombre" id="inpNombre" type="text" oninput="this.value = this.value.replace(/[0-9]/g, '')";></label>
                            <label for="inpProfesion">Profesión<input name="profesion" id="inpProfesion" type="text" oninput="this.value = this.value.replace(/[0-9]/g, '')";></label>
                            <label class="label-email">Email<input name="emails" class="inpEmail" type="text"></label>
                            <input type="button" class="addEmail" value="Agregar otro email">
                            <label class="label-telefono">Telefono<input name="telefonos" class="inpTelefono" type="text"></label>
                            <input type="button" class="addTelefono" value="Agregar otro telefono">
                            <label for="inpEdad">Edad<input name="edad" id="inpEdad" type="text" oninput="this.value = this.value.replace(/[^0-9]/g, '');"></label>	
                        </div>
                        <!-- INFORMACIÓN BASICA -->

                        <!-- LENGUAJES -->
                        <label>Lenguajes de programación:</label>
                        <div class="lenguajes">
                            <label><input name="lenguajes" type="checkbox" value="Javascript">Javascript</label>
                            <label><input name="lenguajes" type="checkbox" value="Python">Python</label>
                            <label><input name="lenguajes" type="checkbox" value="Java">Java</label>
                            <label><input name="lenguajes" type="checkbox" value="C#">C#</label>
                            <label><input name="lenguajes" type="checkbox" value="C++">C++</label>
                            <label><input name="lenguajes" type="checkbox" value="Ruby">Ruby</label>
                            <label><input name="lenguajes" type="checkbox" value="PHP">PHP</label>
                            <label><input name="lenguajes" type="checkbox" value="Swift">Swift</label>
                            <label><input name="lenguajes" type="checkbox" value="Go">Go</label>
                            <label><input name="lenguajes" type="checkbox" value="TypeScript">TypeScript</label>
                        </div>
                        <!-- LENGUAJES -->

                        <label for="inpSobremi">Sobre mí:
                            <textarea id="inpSobremi" name="sobremi"></textarea>
                        </label>

                        <label for="inpEducacion">Educación:
                            <textarea id="inpEducacion" name="educacion"></textarea>
                        </label>

                        <label for="inpExperiencia">Experiencia:
                            <textarea id="inpExperiencia" name="experiencias"></textarea>
                        </label>

                        <label for="inpHobbies">Hobbies:
                            <textarea id="inpHobbies" name="hobbies"></textarea>
                        </label>

                        <!-- IDIOMAS -->
                        <p>Idiomas</p>
                        <div class="idiomas">
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
                        </div>
                        <!-- IDIOMAS -->
                        
                        <input type="button" class="addIdioma" value="Agregar otro idioma">

                        <label for="inpImgperfil">URL Foto Perfil<input type="text" name="imgperfil" id="inpImgperfil"></label>
                        
                        <!-- REDES SOCIALES -->
                        <p class="p-redes">Redes sociales:</p>
                        <div class="redes-sociales">
                            <label for="inpGitHub">URL Perfil GitHub<input type="text" name="redes" id="inpGitHub"></label>
                            <label for="inpLinkedin">URL perfil Linkedin<input type="text" name="redes" id="inpLinkedin"></label>
                            <label for="inpX">URL perfil X (Twitter)<input type="text" name="redes" id="inpX"></label>
                        </div>
                        <!-- REDES SOCIALES -->

                    </fieldset>
                    <input class="btnSubmit" type="submit" value="guardar">
                </form>
            </div>
            <!-- TABLA DE DATOS -->
            <div class="card card-table">
                <div class="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input class="search-input" type="text" placeholder="Buscar usuario por nombre">
                </div>
                <table>
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Nombre</th>
                            <th>Email principal</th>
                            <th>Telefono principal</th>
                            <th>Lenguajes</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="myData"></tbody>
                </table>
            </div>
            <!-- TABLA DE DATOS -->
        </div>
    </main>
    `)
    a.usuariosAction(usuario)
    b.btnsAgregar()
    ft.filterUsuarios({usuario, b})
    t.usuariosTable(await usuario.getAll());
    b.usuarioBtnsPagina({btns: document.querySelectorAll(".btnPagina"), usuario})
    b.usuarioBtnsModificar({btns:document.querySelectorAll(".btnModificar"), usuario})
    b.usuarioBtnsEliminar({btns:document.querySelectorAll(".btnEliminar"), usuario})
}

const portfolioMain = (data) => {
    document.querySelector("main").remove();
    const content = document.querySelector("#content");
    const lenguajes = data.lenguajes.map(l => `<li class="li-lenguajes">${l}</li>`).join("")
    const idiomas = data.idiomas.map(i => `<li class="li-idiomas">${i}</li>`).join("")
    const educacion = data.educacion.map(e => `<li class="li-educacion">${e}</li>`).join("")
    const hobbies = data.hobbies.map(h => `<li class="li-hobbies">${h}</li>`).join("")
    const experiencia = data.experiencias.map(ex => `<li class="li-experiencia">${ex}</li>`).join("")
    const sobremi = []
    for (let i = 0; i < data.sobremi.length; i++) {
        if (i !== data.sobremi.length - 1){
            sobremi.push(`<p>${data.sobremi[i]}</p><br>`)
        } else {
            sobremi.push(`<p>${data.sobremi[i]}</p>`)
        }
    }
    content.insertAdjacentHTML("beforeend", `
    <main class="portfolio">
        <div class="card-portfolio">

            <div class="header-portfolio">
                <img class="imgPerfil" src="${data.imgperfil}">
                <div class="nomypro">
                    <h1 class="nombre">${data.nombre}</h1>
                    <h2 class="profesion">${data.profesion}</h2>
                </div>
            </div>
            
            <!-- BODY -->
            <div class="body-portfolio">

                <!-- COLUMNA 1 -->
                <div class="col-1">
                    <div class="contacto">
                        <h2>Contacto</h2>
                        <p><i class='bx bxs-envelope'></i>${data.emails[0]}</p>
                        <p><i class='bx bxs-phone-call'></i>${data.telefonos[0]}</p>
                    </div>
                    <div class="redes-sociales">
                        <h2>Redes Sociales</h2>
                        <p><a href="${data.redes.github}" target="_blank"><i class='bx bxl-github' ></i>${data.redes.github.split("https://")[1]}</a></p>
                        <p><a href="${data.redes.linkedin}" target="_blank"><i class='bx bxl-linkedin-square'></i>${data.redes.linkedin.split("www.")[1]}</a></p>
                        <p><a href="${data.redes.x}" target="_blank"><i class='bx bxl-twitter'></i>${data.redes.x.split("https://")[1]}</a></p>
                    </div>
                    <div class="lenguajes-p">
                        <h2>Habilidades</h2>
                        <ul>
                            ${lenguajes}
                        </ul>
                    </div>
                    <div class="p-idiomas">
                        <h2>Idiomas</h2>
                        <ul>
                            ${idiomas}
                        </ul>
                    </div>
                    <div class="hobbies">
                        <h2>Hobbies</h2>
                        <ul>
                            ${hobbies}
                        </ul>
                    </div>
                </div>
                <!-- COLUMNA 1 -->

                <!-- COLUMNA 2 -->
                <div class="col-2">

                    <div class="sobremi">
                        <h2>Sobre mí</h2>
                        ${sobremi.join("")}
                    </div>

                    <div class="educacion">
                        <h2>Educación</h2>
                        <ul>
                            ${educacion}
                        </ul>
                    </div>

                    <div class="experiencia">
                        <h2>Experiencia</h2>
                        <ul>
                            ${experiencia}
                        </ul>
                    </div>

                </div>
                <!-- COLUMNA 2 -->
            </div>
            <!-- BODY -->
            <div class="footer"></div>
        </div>
    </main>
    `)
}

const emailsMain = async (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Emails</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Emails</a></li>
        </ul>
        <div class="info-data info-data-sections">
            <!-- TABLA DE DATOS -->
            <div class="card card-table">
                <div class="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input class="search-input" type="text" placeholder="Buscar usuario por nombre">
                </div>
                <table>
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Nombre</th>
                            <th>Emails</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="myData"></tbody>
                </table>
            </div>
            <!-- TABLA DE DATOS -->
        </div>
    </main>
    `)
    ft.filterEmails({usuario, b})
    t.emailsTable(await usuario.getAll());
    b.usuarioBtnsPagina({btns: document.querySelectorAll(".btnPagina"), usuario})
    b.usuarioBtnsEliminar({btns:document.querySelectorAll(".btnEliminar"), usuario})
}

const telefonosMain = async (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Telefonos</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Telefonos</a></li>
        </ul>
        <div class="info-data info-data-sections">
            <!-- TABLA DE DATOS -->
            <div class="card card-table">
                <div class="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input class="search-input" type="text" placeholder="Buscar usuario por nombre">
                </div>
                <table>
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Nombre</th>
                            <th>Telefonos</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="myData"></tbody>
                </table>
            </div>
            <!-- TABLA DE DATOS -->
        </div>
    </main>
    `)
    ft.filterEmails({usuario, b})
    t.emailsTable(await usuario.getAll());
    b.usuarioBtnsPagina({btns: document.querySelectorAll(".btnPagina"), usuario})
    b.usuarioBtnsEliminar({btns:document.querySelectorAll(".btnEliminar"), usuario})
}
const lenguajesMain = async (content) => {
    
}
const sobremiMain = async (content) => {
    
}
const educacionMain = async (content) => {
    
}
const experienciasMain = async (content) => {
    
}
const hobbiesMain = async (content) => {
    
}
const idiomasMain = async (content) => {
    
}
const redesMain = async (content) => {
    
}

export default {
    usuariosMain,
    portfolioMain,
    emailsMain,
    telefonosMain
}