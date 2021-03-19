const cursos = [
  {
    title: "Sumas y restas",
    desc: "Aprende a hacer sumas y restas con un video interactivo.",
    level: "Primaria",
    subj: "Matemáticas",
    img: "dog1.jpg",
    link: "./pages/content/test.html",
  },
  {
    title: "Comprensión Lectora",
    desc: "Aprende a comprender la lectura mediante una divertida historia.",
    level: "Primaria",
    img: "dog1.jpg",
    subj: "Literatura",
    link: "https://www.youtube.com/watch?v=G1Q7XGA8SWs",
  },
  {
    title: "Aníma al Gato",
    desc: "Aprende como las cosas se mueven dentro de tu computadora.",
    level: "Primaria",
    subj: "Computación",
    img: "dog1.jpg",
    link: "https://www.youtube.com/watch?v=GLmz8hokjWI",
  },
  {
    title: "Educacion Física",
    desc: "Ejercita tu cuerpo con las cosas que encuentras en casa.",
    level: "Todos",
    subj: "Bienestar",
    img: "dog1.jpg",
    link: "https://www.youtube.com/watch?v=GiLnkt98w4U",
  },
  {
    title: "Hello World",
    desc: "Tu Primer Programa",
    level: "Secundaria",
    img: "dog1.jpg",
    subj: "Computación",
    link: "https://www.youtube.com/watch?v=st0MOWsGzu0",
  },
  {
    title: "Multiplicaciones",
    desc: "Aprende a multiplicar con un video interactivo.",
    level: "Primaria",
    img: "dog1.jpg",
    subj: "Matemáticas",
    link: "https://www.youtube.com/watch?v=AE4B0hgnz0E",
  },
  {
    title: "William Shakespeare",
    desc: "Conoce la historia detrás de las novelas y guiones de Shakespeare.",
    level: "Preparatoria",
    subj: "Literatura",
    img: "dog1.jpg",
    link: "https://www.youtube.com/watch?v=abBAwRhPKcs",
  },
  {
    title: "Inglés I",
    desc: "Comienza con tu aprendizaje de inglés con conversasiones diarias.",
    level: "Preparatoria",
    subj: "Inglés",
    img: "dog1.jpg",
    link: "https://www.youtube.com/watch?v=r-Kb8SrR5LQ",
  },
  {
    title: "Estados de México",
    desc: "Conoce los estados de México, en dónde están, y su capital.",
    level: "Primaria",
    subj: "Geografía",
    img: "dog1.jpg",
    link: "https://www.youtube.com/watch?v=4svX1x-d2N4",
  },
  {
    title: "Meditación",
    desc: "Aclara tu mente y cuerpo con este corto ejercicio de respiración.",
    level: "Todos",
    subj: "Bienestar",
    img: "dog1.jpg",
    link: "https://www.youtube.com/watch?v=IShkpOm63gg",
  },
  {
    title: "Inglés II",
    desc: "Continua con tu aprendizaje de inglés con conversasiones diarias.",
    level: "Preparatoria",
    subj: "Matemáticas",
    img: "dog1.jpg",
    link: "https://www.youtube.com/watch?v=vIz-e45XBxU",
  },
  {
    title: "Capitales del mundo",
    desc: "Aprende cuáles son las capitales más grandes del mundo.",
    level: "Primaria",
    subj: "Geografía",
    img: "dog1.jpg",
    link: "https://www.youtube.com/watch?v=A0vQc4y6W3k",
  },
];

cards = document.getElementById("main-cards");

cursos.forEach((curso) => {
  let content = `
    <div class="col-md-3 my-card-container ${curso.level}">
        <div class="my-card ${curso.subj}">
            <a href='${curso.link}' class="links" target='blank'>
                <div class='thumbnail-container'>
                    <img src="img/${curso.img}" class="thumbnail">
                </div>
                <div class="card-text">
                    <h2>${curso.title}</h2>
                    <h6 class='level'>${curso.level}</h4>
                    <h6>${curso.subj}</h6>
                    <p>${curso.desc}</p>
                </div>
            </a>
        </div>
    </div>

    `;
  cards.innerHTML += content;
});
