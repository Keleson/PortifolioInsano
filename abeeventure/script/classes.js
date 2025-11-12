class Obj{

    frame = 1;
    timer = 0; 

    constructor(x, y, width, height, image){
        this.x = x;
        this.y = y; 
        this.width = width;
        this.height = height;
        this.image = image; 
    }
    desenha(){
        var img = new Image;
        img.src = this.image; 
        pincel.drawImage(img, this.x, this.y, this.width, this.height);  
    }

    animation(name){
        this.timer += 1;
        if(this.timer > 10){
            this.timer = 0;
            this.frame += 1;  
        }
        if (this.frame > 4){
            this.frame = 1; 
        }
        this.image = "imagem/" + name + this.frame + ".png"; 
    }
}

class Sound {
    constructor(src, loop = false){
        this.audio = new Audio(src);
        this.audio.loop = loop;
    }
    play(){
        this.audio.currentTime = 0;
        this.audio.play();
    }
    stop(){
        this.audio.pause();
        this.audio.currentTime = 0;
    }
}

class SoundManager {
    constructor(){
        this.musicaMenu = new Sound("sfx/menu_musica.mp3", true);
        this.musicaJogo = new Sound("sfx/BG soundtrack.mp3", true);
        this.somFlor = new Sound("sfx/flower.mp3");
        this.somDano = new Sound("sfx/spider_collision.mp3");
        this.somVitoria = new Sound("sfx/vitoria.mp3");
        this.somGameOver = new Sound("sfx/gameOver.mp3");
    }

    tocarFlor(){
        this.somFlor.play();
    }

    tocarDano(){
        this.somDano.play();
    }

    tocarVitoria(){
        this.somVitoria.play();
    }

    tocarGameOver(){
        this.somGameOver.play();
    }

    tocarMusicaJogo(){
        //this.musicaMenu.stop();
        this.musicaJogo.play();
    }

    tocarMusicaMenu(){
       // this.musicaJogo.stop();
        this.musicaMenu.play();
    }

    pararTudo(){
        this.musicaMenu.stop();
        this.musicaJogo.stop();
    }
}

var controleAudio = new SoundManager; 

class Abelha extends Obj
{
    dir = 0; 
    life = 3;
    pontos = 0; 

    move(){
        this.x += this.dir;  
    }
    
    collide(obj){
        if(this.x < obj.x + obj.width && obj.x < this.x + this.width && this.y < obj.y + obj.height && obj.y < this.y + this.height)
        {
            return true;
        }
        else
        {
            return false; 
        }
    }
}

class Aranha extends Obj
{
    move(){

        this.y += 2; 

        if(this.y > 900){
            this.y = -50;
            this.x = Math.random() * (600 - 0);  
        } 
    }
    mudaPosicao(){
        this.y = -110;
        this.x = Math.random() * (600-0);
    }
}

class BG extends Obj
{
    move (speed, limit, pos){
        this.y += speed; 
        if (this.y > limit){
            this.y = pos;  
        }
    }
}

class Flower extends Aranha
{
    mudaPosicao(){
        this.y = -70;
        this.x = Math.random() * (600-0);
    }
}

class Text 
{
    draw(texto, x, y){
        pincel.font = "25px Arial";
        pincel.fillStyle = "White"; 
        pincel.fillText(texto, x, y); 
    }
}

class Hud
{
    draw(x, y, width, height, image){
        var img = new Image;
        img.src = image; 
        pincel.drawImage(img, x, y, width, height);  
    }
}

class GameOver extends Obj
{
    tocarSom()
    {
        controleAudio.tocarGameOver(); 
    }
    
}

class Win extends Obj
{
    tocarSom()
    {
        controleAudio.tocarVitoria();
    }
}

class Menu extends Obj
{
     tocaMusica()
    {
        controleAudio.tocarMusicaMenu();
    }      
}