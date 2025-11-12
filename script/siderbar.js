function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.querySelector(".xd").style.marginLeft = "250px";
}


function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.querySelector(".xd").style.marginLeft = "0";
}


function mudarFonte(fonte) {
  document.body.style.fontFamily = fonte + ', sans-serif';
}

//Carrosel script abaixo:

const imagens = [
  {

    src: "imagem/imagem_projeto1.png",
    titulo: "Projeto para o ultimo Bimestre",
    data: "Dezembro de 2024",
    descricao: "Projeto Final do 3º Ano do Ensino Médio na disciplina: Desenvolvimento de Jogos 3D. Desenvolvimento de um jogo em primeira pessoa no estilo Escape Room, com temática de terror. O objetivo principal é escapar de uma floresta cercada por criaturas hostis, utilizando mecânicas de exploração e coleta de itens para alcançar a saída. O projeto foi criado em equipe, com tema livre, e a escolha pelo gênero de terror visou proporcionar uma experiência mais desafiadora e alinhada ao interesse do público. O trabalho foi aprovado e elogiado pela professora responsável.",
    largura: "600px",
    altura: "500",

  },

  {
    src: "imagem/imagem_projeto2.png",
    titulo: "Projeto do Terceiro Bimestre",
    data: "Agosto de 2024",
    descricao: "Projeto do terceiro bimestre do 3º Ano do Ensino Médio na disciplina: Desenvolvimento de Jogos 3D. Projeto individual em primeira pessoa, proposto pela professora da disciplina, com o desafio de desenvolver um jogo baseado na própria trajetória de vida do aluno. Os obstáculos do jogo representavam dificuldades reais enfrentadas por cada desenvolvedor. Ao final, os participantes jogaram os projetos uns dos outros com o objetivo de interpretar e compreender os desafios pessoais retratados. A atividade proporcionou uma experiência profunda de empatia, autoconhecimento e reflexão, unindo aspectos técnicos do desenvolvimento de jogos com uma abordagem sensível e criativa.",
    largura: "600px",
    altura: "500",
  },

  {
    src: "imagem/imagem_projeto3.png",
    titulo: "Projeto TCC",
    data: "Em desenvolvimento",
    descricao: "Projeto do TCC na máteria: Projeto desenvolvimento de jogos. Archetype é um jogo educativo desenvolvido com o propósito de ensinar a história da arte por meio de uma experiência interativa e imersiva. Criado como trabalho de conclusão do curso de Jogos Digitais no IFPR, o projeto combina narrativa envolvente e mecânicas de quiz e exploração para guiar o jogador por diversos movimentos artísticos, como Renascimento, Barroco, Modernismo, entre outros. Durante sua produção, foram aplicados conceitos avançados de design instrucional, narrativa interativa, animação quadro a quadro (frame-by-frame) e gerenciamento de cenas na engine Unity. O desenvolvimento também envolveu pesquisa histórica aprofundada, criação de uma interface acessível e aplicação de testes com usuários, visando equilibrar a curva de aprendizado com a dinâmica de jogo.",
    largura: "600px",
    altura: "500",
  },

  {
    src: "imagem/imagem_projeto4.png",
    titulo: "Projeto pessoal",
    data: "Em desenvolvimento",
    descricao: "Um projeto pessoal em desenvolvimento, criado na Unity com suporte de áudio dinâmico via FMOD. Trata-se de um jogo em primeira pessoa do gênero RPG com elementos de puzzle, onde o jogador explora uma floresta misteriosa, coleta itens e resolve enigmas para encontrar a saída. O projeto combina mecânicas acessíveis, ambientação estilizada e trilha sonora imersiva, oferecendo uma experiência envolvente de aventura e raciocínio. Representa uma etapa prática de aprendizado e evolução técnica no desenvolvimento de jogos 3D.",
    largura: "600px",
    altura: "500",
  },

  {

    src: "imagem/start.png",
    largura: "600px",
    altura: "500",

  },

];
let indiceAtual = 0;
const imagensPorTela = 3;

function exibirImagens() {
  const container = document.getElementById("carrosel-imagens");
  container.innerHTML = "";

  for (let i = 0; i < imagensPorTela; i++) {
    const index = (indiceAtual + i) % imagens.length;
    const imagemInfo = imagens[index];
    const img = document.createElement("img");

    img.src = imagemInfo.src;
    img.alt = imagemInfo.titulo;
    img.title = imagemInfo.descricao;

    if (index == 4) {
      let a = document.createElement("a");
      a.href = "jogo.html";
      a.appendChild(img);
      container.appendChild(a);

    } else {


      //img.width = imagemInfo.largura;
      //img.height = imagemInfo.altura;



      // quando a imagem for clicada:
      img.onclick = function () {

        const popup = window.open("", `popup${index}`, "width=850,height=700,resizable=yes,scrollbars=yes");
        if (popup) {

          popup.document.write(`

      <html>
      <head> 
      <title>${imagemInfo.titulo}</title> 

      <style> 
      body{
      font-family: Arial, sans-serif;
      padding: 20px
      }

      img{
      width: ${imagemInfo.largura};
      height: ${imagemInfo.altura}; 
      border-radius: 8px; 
      display: block;
      margin-bottom: 15px;  
      }

      h1{
      margin-top: 0px; 
      }

      .info{
      margin-bottom: 10px; 
      }
      </style> 
      </head> 

      <body> 
      <h1> ${imagemInfo.titulo}</h1> 
      <div class = "info"> <strong> Data de criação:</strong> ${imagemInfo.data}</div> 
      <img src = "${imagemInfo.src}" alt =" ${imagemInfo.titulo}" > 
      <p> <strong> Descrição:</strong> ${imagemInfo.descricao} </p> 
      </body>
      </html>  
      `);

          popup.document.close();
          popup.focus();
        } else {
          alert("Por favor, permita pop-ups para visualizar as informações.");
        }
      };
      container.appendChild(img);
    }
  }
}

function mudarImagem(direcao) {
  indiceAtual = (indiceAtual + direcao * imagensPorTela + imagens.length) % imagens.length;
  exibirImagens();
}

document.addEventListener('DOMContentLoaded', exibirImagens);
