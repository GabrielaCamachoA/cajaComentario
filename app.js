const comentario_yutu = [];
const un_comentario = {
    persona: "gaby",
    comentario: "hola chicoooos"
}

function sendCommit(event) {
    event.preventDefault();
    let commit = document.getElementById("commit").value
    if (commit.trim() !=="") {
        un_comentario.comentario = document.getElementById("commit").value;
    document.getElementById("commit").value = "";    
    comentario_yutu.push({
        persona: un_comentario.persona,
        comentario: un_comentario.comentario
    })

    document.getElementById("comentario").innerHTML = "";
    comentario_yutu.forEach(
        (comentarios) => document.getElementById("comentario").innerHTML += `<div class="coment">
        <h4>@User-name</h4>
        <p>${comentarios.comentario}</p>
        </div>`
    )
    }
}