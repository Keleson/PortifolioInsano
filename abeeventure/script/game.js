var pincel = document.getElementById("canvas").getContext("2d"); 

var bg = new BG(0, 0, 900, 720, "imagem/bg.png"); 
var bg2 = new BG(0, -720, 900, 720, "imagem/bg.png");
var flor = new Flower(2, 120, 50, 50, "imagem/flower1.png");  
var abelha = new Abelha(450 - 50, 360 - 50, 100, 100, "imagem/bee1.png");
var aranha = new Aranha(200, -50, 150, 150, "imagem/spider1.png");
var winScreen = new Win(0, 0, 900, 720, "imagem/youwin.png"); 
var GO = new GameOver(0, 0, 900, 720, "imagem/gameover.png"); 
var timer = new Text();  
var placar = new Text();
var perdeu = new Text(); 
var hud = new Hud(); 
var menu = new Menu(0, 0, 900, 720, "imagem/start.png"); 

// variaveis padrao
var jogar = false; 
var win = false;
var menu2 = true;
var temporizador = 90; 
var min ;   
var segs;   
var winF = Math.floor(Math.random() * 20) + 5; 


document.addEventListener("keydown", function(event)
{
    if(event.key === "d" || event.key === "D")
{
    abelha.dir = 3;
    
    if(abelha.x > 790){
        abelha.dir = 0; 
    }
}   

    if(event.key === "a" || event.key === "A")
{
    abelha.dir = -3;

    if(abelha.x < 10){
        abelha.dir = 0; 
    }
}


}); 
  
document.addEventListener("keyup", function (event)
{
    if(event.key === "d" || event.key === "D"){
        abelha.dir = 0; 
    }

    if(event.key === "a" || event.key === "A"){
        abelha.dir = 0; 
    }

}); 

document.addEventListener("keydown", function (event)
{
    if(event.key === "Enter"){
        menu2 = false;
        jogar = true; 
        controleAudio.tocarMusicaJogo();  
    } 

}); 


function tempo(){

    temporizador -= 0.01
    min = Math.floor (temporizador/60); 
    segs = Math.floor(temporizador%60); 
    if(segs < 10){
        segs = "0" + segs; 
    }
    if (temporizador <= 0){
        temporizador = "0:00"   
        jogar = false; 
    }
}

function collides()
{
    if(abelha.collide(aranha)){
        aranha.mudaPosicao(); 
        abelha.life -= 1; 
        controleAudio.tocarDano(); 
    }
    if(abelha.collide(flor)){
        flor.mudaPosicao(); 
        abelha.pontos += 1; 
        controleAudio.tocarFlor();
    }
}

function Draw()
{   
    bg.desenha(); 
    bg2.desenha(); 
    abelha.desenha();
    aranha.desenha(); 
    flor.desenha(); 
    placar.draw("Vida: " + abelha.life, 40, 35); 
    hud.draw(10, 17, 20, 20, "imagem/life_sprite.png"); 
    placar.draw("Flores: " + abelha.pontos + "/" + winF, 40, 70); 
    hud.draw(10, 50, 20, 20, "imagem/flower2.png"); 
    timer.draw(""+ min + ":" +  segs, 402 , 40); 
    controleAudio.tocarMusicaMenu(); 
}

function Update()
{   
    bg.move(6, 720, 0);
    bg2.move(6, 0, -720); 
    abelha.animation("bee");
    abelha.collide(aranha);
    aranha.animation("spider");
    abelha.move(); 
    aranha.move(); 
    flor.move();
    collides(); 
    tempo(); 
    ganhou(); 
    gameOver();
    
}

function ganhou()
{
    if (abelha.pontos === winF){
        jogar = false;
        win = true; 
        controleAudio.pararTudo(); 
        winScreen.tocarSom(); 
    }
}

function gameOver()
{   
    if(abelha.life === 0){
        jogar = false;  
        controleAudio.pararTudo(); 
        GO.tocarSom(); 
    }
    
}

function Main(){

      
    if (menu2 && !jogar){
        menu.desenha();
    }

    if(jogar)
    {   
        pincel.clearRect(0, 0, 900, 720); 
        Draw();
        Update(); 
    }
    if(!jogar && win)
    {
         pincel.clearRect(0, 0, 900, 720); 
         winScreen.desenha(); 
    }

    if(!jogar && !win && !menu2){
        pincel.clearRect(0, 0, 900, 720); 
        GO.desenha(); 
    }
   
}

setInterval(Main, 10); 