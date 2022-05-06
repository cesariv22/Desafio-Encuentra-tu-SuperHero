$(document).ready(() => {
  $("#btnBuscar").click(function () {
    const numeroInput = $("#numeroHero").val();
      console.log(numeroInput);
      
      $.ajax({
      url:
        "https://www.superheroapi.com/api.php/4905856019427443/" + numeroInput,
      type: "GET",
      dataType: "JSON",
      success: (data) => {
        const hero = data.name;
        console.log(hero);
        document.getElementById("card").innerHTML = `
     <h1 class="title1">SuperHero encontrado</h1>
    <div class="card mb-3"> 
        <div class="row g-0">
            <div class="col-md-4">
              <img src="${data.image.url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Nombre: ${data.name}</h5>
                <p class="card-text">Conexiones: ${data.connections.relatives}</p>
                <p class="card-text"><small class="text-muted">Publicado por: ${data.biography.publisher}</small></p>
                <p class="border-bottom">${data.work.occupation}</p>
                <p class="border-bottom">Altura: ${data.appearance.height}</p>
                <p class="border-bottom">Peso: ${data.appearance.weight}</p>
                <p class="border-bottom">Alianzas: ${data.connections.relatives}</p>
              </div>
            </div>
          </div>
        </div>
        `;
      },
    });
  });
});
