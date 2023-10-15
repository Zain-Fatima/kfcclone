document.addEventListener('DOMContentLoaded', function() {
    const menuBars = document.querySelector(".bars");
    const sidebars = document.querySelector("#sidebar");
    const overlay = document.querySelector("#overlay");
    const box=[...document.querySelectorAll("#carouselrow")];
    const prev=[...document.querySelectorAll("#lftbtn")];
    const next=[...document.querySelectorAll("#rgtbtn")];
    let imageTiles = document.querySelectorAll(".tdtiles2");
    let addtobuc = document.querySelectorAll(".addtob");
    
  
    let menuOpen = false;
  
    function openMenu() {
      menuOpen = true;
      sidebars.style.width = "300px";
      sidebars.style.padding = "20px";
      overlay.style.display = "block";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
  
    function closeMenu() {
      menuOpen = false;
      sidebars.style.width = "0px";
      sidebars.style.padding = "0px";
      overlay.style.display = "none";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  
    menuBars.addEventListener('click', function() {
        if (!menuOpen) {
          openMenu();
        }
    });
  
    overlay.addEventListener('click', function() {
        if (menuOpen) {
          closeMenu();
        }
    });
    
    box.forEach((item,i)=>{
      let boxdim=item.getBoundingClientRect();
      let boxwidth=(boxdim.width/5);
      
      
      next[i].addEventListener("click",()=>{
        item.scrollLeft+=(boxwidth);
        
      })
      prev[i].addEventListener("click",()=>{
        item.scrollLeft-=boxwidth;
        

      })


    })

    imageTiles.forEach(function(tile) {
      let img = tile.querySelector(".tdimg");
      
      tile.addEventListener("mouseover", function() {
          img.style.transform="scale(1.15)"; 
      });

      tile.addEventListener("mouseout", function() {
        img.style.transform="scale(1)"; 

      });
    });

    
    
});
  