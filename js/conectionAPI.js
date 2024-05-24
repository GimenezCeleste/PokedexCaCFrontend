let contenedorPokemon = document.getElementById("pokemones");

let url = "https://pokeapi.co/api/v2/pokemon/";
for (let i = 1; i <= 151; i++) {
    fetch(url+i)
        .then((response)=>response.json())
        .then(data => mostrarPokemon(data))
}
function mostrarPokemon(data){
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card shadow-sm">
            <img src="${data.sprites.other.home.front_default}" class="bd-placeholder-img card-img-top" width="100%" height="200">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <h5>#${data.id}</h5>
                </div>
                <h4>${data.name}</h4>
                <p>${data.types[0].type.name}</p>
            </div>
        </div>
    `;
    console.log(data);
    contenedorPokemon.append(div);
}