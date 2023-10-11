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
                            <label for="inpNombre">Nombre completo<input name="nombre" id="inpNombre" type="text" placeholder="ej. Juan David Gomez" oninput="this.value = this.value.replace(/[0-9]/g, '')"; required></label>
                            <label for="inpProfesion">Profesión<input name="profesion" id="inpProfesion" type="text" placeholder="ej. Programador" oninput="this.value = this.value.replace(/[0-9]/g, '')"; required></label>
                            <label class="label-email">Email<input name="emails" class="inpEmail" type="text" placeholder="ej. JuanG@gmail.com" required></label>
                            <input type="button" class="addEmail" value="Agregar otro email" required>
                            <label class="label-telefono">Telefono<input name="telefonos" class="inpTelefono" type="text" placeholder="ej. 3182994155" oninput="this.value = this.value.replace(/[^0-9]/g, '')"; required></label>
                            <input type="button" class="addTelefono" value="Agregar otro telefono" required>
                            <label for="inpEdad">Edad<input name="edad" id="inpEdad" type="text" placeholder="ej. 26" oninput="this.value = this.value.replace(/[^0-9]/g, '');" required></label>	
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
                            <textarea id="inpSobremi" name="sobremi" placeholder="ej. ¡Hola! Soy María, una apasionada del diseño gráfico con 5 años de experiencia ..." required></textarea>
                        </label>

                        <label for="inpEducacion">Educación:
                            <textarea id="inpEducacion" name="educacion" placeholder="ej. Instituto Tecnológico - Ingeniería Eléctrica (2013-2017)" required></textarea>
                        </label>

                        <label for="inpExperiencia">Experiencia:
                            <textarea id="inpExperiencia" name="experiencias" placeholder="ej. Empresa de Software ABC - Desarrollador Senior (2011-2023)" required></textarea>
                        </label>

                        <label for="inpHobbies">Hobbies:
                            <textarea id="inpHobbies" name="hobbies" placeholder="ej. Ajedrez\n     Ciclismo\n     Pintura\n     Fotografía" required></textarea>
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
                        
                        <input type="button" class="addIdioma" value="Agregar otro idioma" required>

                        <label for="inpImgperfil">URL Foto Perfil<input type="text" name="imgperfil" id="inpImgperfil" placeholder="ej. https://imagenes.elpais.com/resizer/pnK2B1fp..." required></label>
                        
                        <!-- REDES SOCIALES -->
                        <p class="p-redes">Redes sociales:</p>
                        <div class="redes-sociales">
                            <label for="inpGitHub">URL Perfil GitHub<input type="text" name="redes" id="inpGitHub" placeholder="https://github.com/carlosdev" required></label>
                            <label for="inpLinkedin">URL perfil Linkedin<input type="text" name="redes" id="inpLinkedin" placeholder="https://www.linkedin.com/in/carlosrodriguez" required></label>
                            <label for="inpX">URL perfil X (Twitter)<input type="text" name="redes" id="inpX" placeholder="https://twitter.com/chanchitofeliz" required></label>
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
    t.usuariosTable(await usuario.getAll());
    ft.filterUsuarios({usuario, b})
    b.usuarioBtnsPagina({btns: document.querySelectorAll(".btnPagina"), usuario})
    b.usuarioBtnsModificar({btns:document.querySelectorAll(".btnModificar"), usuario})
    b.usuarioBtnsEliminar({btns:document.querySelectorAll(".btnEliminar"), usuario})
}

const sobremiMain = async (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Sobre mí</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Sobre mí</a></li>
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
                <p class="p-warning">*Si eliminas un registro tambien se eliminara el usuario al que pertenece, asegurate de querer realizar esta acción.*</p>
                <table>
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Nombre</th>
                            <th>Sobre mí</th>
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
    t.sobremiTable(await usuario.getAll());
    ft.filterSobremi({usuario, b})
    b.usuarioBtnsPagina({btns: document.querySelectorAll(".btnPagina"), usuario})
    b.usuarioBtnsEliminar({btns:document.querySelectorAll(".btnEliminar"), usuario})
}

const educacionMain = async (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Educación</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Educación</a></li>
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
                <p class="p-warning">*Si eliminas un registro tambien se eliminara el usuario al que pertenece, asegurate de querer realizar esta acción.*</p>
                <table>
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Nombre</th>
                            <th>Edudación</th>
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
    t.educacionTable(await usuario.getAll());
    ft.filterEducacion({usuario, b})
    b.usuarioBtnsPagina({btns: document.querySelectorAll(".btnPagina"), usuario})
    b.usuarioBtnsEliminar({btns:document.querySelectorAll(".btnEliminar"), usuario})
}

const experienciasMain = async (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Experiencias</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Experiencias</a></li>
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
                <p class="p-warning">*Si eliminas un registro tambien se eliminara el usuario al que pertenece, asegurate de querer realizar esta acción.*</p>
                <table>
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Nombre</th>
                            <th>Experiencias</th>
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
    t.experienciasTable(await usuario.getAll());
    ft.filterExperiencias({usuario, b})
    b.usuarioBtnsPagina({btns: document.querySelectorAll(".btnPagina"), usuario})
    b.usuarioBtnsEliminar({btns:document.querySelectorAll(".btnEliminar"), usuario})
}

const lenguajesMain = async (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Lenguajes</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Lenguajes</a></li>
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
                <p class="p-warning">*Si eliminas un registro tambien se eliminara el usuario al que pertenece, asegurate de querer realizar esta acción.*</p>
                <table>
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Nombre</th>
                            <th>Lenguajes de programación</th>
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
    t.lenguajesTable(await usuario.getAll());
    ft.filterLenguajes({usuario, b})
    b.usuarioBtnsPagina({btns: document.querySelectorAll(".btnPagina"), usuario})
    b.usuarioBtnsEliminar({btns:document.querySelectorAll(".btnEliminar"), usuario})
}

const hobbiesMain = async (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Hobbies</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Hobbies</a></li>
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
                <p class="p-warning">*Si eliminas un registro tambien se eliminara el usuario al que pertenece, asegurate de querer realizar esta acción.*</p>
                <table>
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Nombre</th>
                            <th>Hobbies</th>
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
    t.hobbiesTable(await usuario.getAll());
    ft.filterHobbies({usuario, b})
    b.usuarioBtnsPagina({btns: document.querySelectorAll(".btnPagina"), usuario})
    b.usuarioBtnsEliminar({btns:document.querySelectorAll(".btnEliminar"), usuario})
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
                <p class="p-warning">*Si eliminas un registro tambien se eliminara el usuario al que pertenece, asegurate de querer realizar esta acción.*</p>
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
    t.emailsTable(await usuario.getAll());
    ft.filterEmails({usuario, b})
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
                <p class="p-warning">*Si eliminas un registro tambien se eliminara el usuario al que pertenece, asegurate de querer realizar esta acción.*</p>
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
    t.telefonosTable(await usuario.getAll());
    ft.filterTelefonos({usuario, b})
    b.usuarioBtnsPagina({btns: document.querySelectorAll(".btnPagina"), usuario})
    b.usuarioBtnsEliminar({btns:document.querySelectorAll(".btnEliminar"), usuario})
}

const idiomasMain = async (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Idiomas</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Idiomas</a></li>
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
                <p class="p-warning">*Si eliminas un registro tambien se eliminara el usuario al que pertenece, asegurate de querer realizar esta acción.*</p>
                <table>
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Nombre</th>
                            <th>Idiomas</th>
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
    t.idiomasTable(await usuario.getAll());
    ft.filterIdiomas({usuario, b})
    b.usuarioBtnsPagina({btns: document.querySelectorAll(".btnPagina"), usuario})
    b.usuarioBtnsEliminar({btns:document.querySelectorAll(".btnEliminar"), usuario})
}

const redesMain = async (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Redes sociales</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Redes sociales</a></li>
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
                <p class="p-warning">*Si eliminas un registro tambien se eliminara el usuario al que pertenece, asegurate de querer realizar esta acción.*</p>
                <table>
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Nombre</th>
                            <th>Redes sociales</th>
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
    t.redesTable(await usuario.getAll());
    ft.filterRedes({usuario, b})
    b.usuarioBtnsPagina({btns: document.querySelectorAll(".btnPagina"), usuario})
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
                        <p><a href="${data.redes.linkedin}" target="_blank"><i class='bx bxl-linkedin-square'></i>${data.redes.linkedin.includes("www.") ? data.redes.linkedin.split("www.")[1] : data.redes.linkedin.split("https://")[1]}</a></p>
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

export default {
    usuariosMain,
    portfolioMain,
    emailsMain,
    telefonosMain,
    lenguajesMain,
    sobremiMain,
    educacionMain,
    experienciasMain,
    hobbiesMain,
    idiomasMain,
    redesMain
}