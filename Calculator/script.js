// Aydınlık Karanlık yapma butonu
const Butonum = document.querySelector(".changeButon");

// Sayfa yüklendiğinde localStorage'dan buton durumunu kontrol et
window.addEventListener("load", () => {
    const isActive = JSON.parse(localStorage.getItem("isActive"));
    if (isActive === false) {
        document.body.style.backgroundColor = "rgb(104, 100, 100)";
    }
});

Butonum.addEventListener("click", () => {
    let isActive = JSON.parse(localStorage.getItem("isActive"));
    isActive = !isActive;
    localStorage.setItem("isActive", isActive);

    if (isActive === false) {
        document.body.style.backgroundColor = "rgb(104, 100, 100)";
        Butonum.textContent = "light";
    } else {
        document.body.style.backgroundColor = "white";
        Butonum.textContent = "dark";
    }
});



//Tuşlar ile ilgili algoritmalar
///////////////////////////////////////////////////////
const input = document.querySelector(".input");
const equal = document.querySelector(".esittir");
const plus = document.querySelector(".toplama");
const eksi = document.querySelector(".cikarma");
const artiEksi = document.querySelector(".artiEksi");

const loop = document.querySelectorAll(".gri");

loop.forEach((clicked) => {
    clicked.addEventListener("click" , tiklama)
});


//-+ tuşuna basıldığında
let clickOnOf = true
artiEksi.addEventListener("click", ()=>{

    if(clickOnOf == true)
    {
        input.value = -input.value;
    }
    else if(clickOnOf == false){
        input.value = +input.value;
    }
    else{
        input.value = input.value;
    }
    clickOnOf = !clickOnOf;


});


//AC butonuna tıklanınca hepsini siler
function silme(){
    input.value = "";
}

//gri tuşlara basıldığında işlemler yapar döngü ile döner
let trueFalse = true;
function tiklama(e){
    input.value += e.target.innerHTML;

    if(e.target.innerHTML == "C"){
        input.value = input.value.slice(0,-2);
    }

    //console.log(e.target.innerHTML);
}

//eşittir tuşuna basınca olacak şeyler
equal.addEventListener("click", ()=>{

    try {
    if(input.value === ""){
        input.value ="İslem yok"
    }
    else{
        let answer = eval(input.value);
        input.value =answer;
    }
    } catch (error) {
        input.value = "Hatalı islem"
    }

})








