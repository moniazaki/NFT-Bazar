
    let i = document.querySelector(".icon");
    let link = document.querySelectorAll("link");
    let image=document.querySelector("img")

    function dark() {
        if (i.classList.contains("fa-sun")) { 
            link[2].href = "./assets/css/dark.css"; // Changed index to 2
            image.src="./assets/images/2.png"
            i.classList.replace("fa-sun", "fa-moon"); 
        } else {
            link[2].href = "./assets/css/style.css"; // Changed index to 2
            i.classList.replace("fa-moon", "fa-sun"); 
            image.src="./assets/images/1.png"
        }
    }

    i.addEventListener("click", dark);



