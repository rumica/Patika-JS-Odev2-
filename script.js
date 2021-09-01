let listItems = document.getElementsByTagName("li");
let input = document.querySelector("#task");

function finish(){
    for(let x = 0; x<listItems.length; x++) {
        listItems[x].addEventListener("click", function(){
            this.classList.toggle("done");
           
        })
    }
}

finish();






let icons = document.getElementsByTagName("span");

function removed(){
    for(let i=0; i<icons.length; i++) {
        icons[i].addEventListener("click", function(){
            let sil = this.parentElement;
            sil.remove();
        })
    }
}

removed();






let ekle = document.getElementById("liveToastBtn");


    function myFunction(){
    let li = document.createElement("li");
    li.innerHTML = input.value;

    let newspan = document.createElement("span");
    let newicon = document.createElement("i");
    newicon.setAttribute("class", "fas fa-trash");

    newspan.insertBefore(newicon, newspan.firstChild);
    li.insertBefore(newspan, li.firstChild);

    let ul = document.querySelector("#list");
    ul.insertBefore(li, ul.lastChild);

    finish();
    removed();
};
