document.querySelector(".btn").addEventListener('click', () => {
        var textarea = document.querySelector("#miTextarea");
        var contenido = textarea.value
        console.log("Contenido del textarea:", contenido.split('\n'));
})