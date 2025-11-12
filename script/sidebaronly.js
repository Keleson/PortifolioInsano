function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.querySelector(".content").style.marginLeft = "250px";
  }
  
 
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector(".content").style.marginLeft = "0";
  }
  
  
  function mudarFonte(fonte) {
    document.body.style.fontFamily = fonte + ', sans-serif';
  }
