function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//////////////////////////////////////////////////////////////////////
// close modal



// Déclaration des variables

let firstName = "";
let lastName = "";
let email = "";
let birthdate = "";
let quantity = "";
let citys = "";
let terms ="";
let arrayFormData = [];
let NameRegex = /^[A-Za-zéèïù\- ]*$/;

firstName = document.getElementById("first");
lastName  = document.getElementById("last");
email = document.getElementById("email");
birthdate = document.getElementById("birthdate");
quantity = document.getElementById("quantity");
citys = document.getElementsByName("location");
let p = document.createElement("p"); 

// (e) pour empecher l'action par défaut au submit
const notSend = document.querySelector("div.modal-body form[name='reserve']")
notSend.addEventListener('submit', (e) => {
  e.preventDefault();
}, false);

// boucle sur chaque classe formdata
formData.forEach((data) => arrayFormData.push(data));
console.log(arrayFormData)
function invalidinput(index, context, currentinput){
              let p = document.createElement("p");

              currentinput.style.borderColor = "red";
              arrayFormData[index].setAttribute("data-error", "Veuillez entrer"+context);
              // p.innerHTML = "Veuillez utilisez"+context;
              // p.classList.add("important"+index);
              // p.style.color = "red";
   }


  // Vérification du Prénom
  function firstNameValidation(){
    if (firstName.value.length >=2 && NameRegex.test(firstName.value)) {
        firstName.style.borderColor = "green";
       arrayFormData[0].removeAttribute("data-error")
        return true
      } else {
        return invalidinput(0, "des lettres", firstName);     
      }
  };

  // Vérification du Nom 
  function lastNameValidation(){
     
    if (lastName.value.length >=2 && NameRegex.test(lastName.value)) {
        lastName.style.borderColor = "green";
        return true;
          } else {
            return invalidinput(1, "des lettres", lastName);     
      }
  };

//// Vérification quantité
function quantityValidation(){
  let p = document.createElement("p");
  if (typeof quantity.value == "number") {
    quantity.style.borderColor = "green";

    return true;
  } else {
    return  invalidinput(4, "des chiffres", quantity);
  }
};


/// VALIDATION DU MODAL
///// OUVERTURE DU MODAL

function openThanks (){
  const merci = document.querySelector(".merci")
  merci.style.display = "block";
  merci.style.zindex = "1"
}


function validate() {    

  if (firstNameValidation() && lastNameValidation() && quantityValidation() === true ) {
     
     modalbg.style.display = "none";
     console.log("les deux sont ok")
     return openThanks();
  } else {
    return false;
  }
}
//   // for (c in city){
//   //   alert(city[c]);
//   // }

//   // let resultFirstName = validFirstName(); 
//   // alert(resultFirstName)

// const btnSubmit = document.querySelector(".btn-submit");
// btnSubmit.addEventListener("click", submit);