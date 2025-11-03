const personajes = [
  { img: "rockwell isla.jpg", color: "#6ee95b" },
  { img: "rockwell scorched.jpg", color: "#8b7c1c" },
  { img: "rockwell aberration.jpg", color: "#9b22ab" },
  { img: "rockwell genesis.webp", color: "#43006c" }, 
];

function seleccionar_etapa(n) {
  document.getElementById('personaje').src = personajes[n].img;
  document.body.style.backgroundColor = personajes[n].color;
}
