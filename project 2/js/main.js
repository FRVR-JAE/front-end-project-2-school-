



/*course preview video */

function coursePreviewVideo(){
    const coursePreviewModal = document.querySelector(".js-course-preview-modal");
    if(coursePreviewModal){
        coursePreviewModal.addEventListener("shown.bs.modal", function(){
            this.querySelector(".js-course-preview-video").play();
            this.querySelector(".js-course-preview-video").currentTime = 0;
        });
        coursePreviewModal.addEventListener("hide.bs.modal", function(){
            this.querySelector(".js-course-preview-video").pause();
        });
    }
} 
coursePreviewVideo();

/*style-switcher*/ 
function styleSwitcherToggle(){
   const styleSwitcher = document.querySelector(".js-style-switcher"),
  styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

  styleSwitcherToggler.addEventListener("click", function(){
    styleSwitcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
  });

}
styleSwitcherToggle();


/*theme color */
function themeColors(){
  const colorStyle = document.querySelector(".js-color-style"),
  themeColorsContainer = document.querySelector(".js-theme-colors");

  themeColorsContainer.addEventListener("click", ({target}) => {
   if(target.classList.contains("js-theme-color-item")){
    localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
    setColor();
   }
  });

  function setColor(){
    let path = colorStyle.getAttribute("href").split("/");
    path = path.slice(0, path.length-1);
    colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");

    if(document.querySelector(".js-theme-color-item.active")){
        document.querySelector(".js-theme-color-item.active").classList.remove("active"); 
    }
    document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
  } 
    if(localStorage.getItem("color") !== null){
         setColor();
    }
    else{
        const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        document.querySelector("[data-js-theme-color=" + defaultColor + "]").classList.add("active");
    }
}
themeColors();

/* theme light & dark mode*/ 

function themeLightDark(){
    const darkModeCheckbox = document.querySelector(".js-dark-mode");

    darkModeCheckbox.addEventListener("click", function() {
        if(this.checked){
            localStorage.setItem("theme-dark", "true");
        }
        else{
            localStorage.setItem("theme-dark", "false");
        }
    });

}
themeLightDark();


