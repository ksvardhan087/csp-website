document.addEventListener("DOMContentLoaded", () => {

    const searchBox = document.getElementById("searchBox");
    const cards = document.querySelectorAll(".card");
    const services = document.getElementById("services");

    const noResult = document.createElement("h2");
    noResult.innerHTML = "No matching service found";
    noResult.style.textAlign = "center";
    noResult.style.color = "red";
    noResult.style.display = "none";

    services.appendChild(noResult);

    searchBox.addEventListener("input", function () {

        let value = this.value.toLowerCase().trim();

        if(value.length > 0){

            services.scrollIntoView({
                behavior:"smooth"
            });

        }

        let found = false;

        cards.forEach(card=>{

            let text = card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display="block";
                found=true;

            }
            else{

                card.style.display="none";

            }

        });

        noResult.style.display = found ? "none" : "block";

    });

});