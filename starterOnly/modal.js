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
const modalhero = document.querySelector(".hero-section");
const modalBody = document.querySelector(".modal-body");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalContent.style.display = "block";
}
//////////////////////////////////////////////////////////////////////



// Déclaration des variables

let firstName = "";
let lastName = "";
let email = "";
let birthdate = "";
let quantity = "";
let terms ="";
let arrayFormData = [];
let citys = [];
let p = document.createElement("p"); 
let NameRegex = /^[A-Za-zéèïùç\- ]*$/;
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ;
let birthdateRegex = /(\d{4})-(\d{2})-(\d{2})/;

// Déclaration des variables pour cibler les éléments
firstName = document.getElementById("first");
lastName  = document.getElementById("last");
email = document.getElementById("email");
birthdate = document.getElementById("birthdate");
quantity = document.getElementById("quantity");
const bodyForm = document.querySelector("div.modal-body form[name='reserve']");
const btnClose = document.querySelector(".close");
const modalContent = document.querySelector(".content");
const merci = document.querySelector(".merci");


// (e) pour empecher l'action par défaut au submit
bodyForm.addEventListener('submit', (e) => {
  e.preventDefault();
}, false);

// boucle sur chaque classe formdata
formData.forEach((data) => arrayFormData.push(data));

//// function qui affiche les messages d'erreur
function invalidinput(index, context){
  arrayFormData[index].setAttribute("data-error", "Veuillez"+context);
  arrayFormData[index].setAttribute("data-error-visible", true)
 };




  // Vérification du Prénom
function firstNameValidation(){
    if (firstName.value.length >=2 && NameRegex.test(firstName.value)) {
      firstName.style.borderColor = "green";
      arrayFormData[0].setAttribute("data-error","");
      arrayFormData[0].setAttribute("data-error-visible", false);
      return true;
        } else {
          invalidinput(0, " entrez des lettres");  
          return      false;
        }
    };

  // Vérification du Nom 
  function lastNameValidation(){
    if (lastName.value.length >=2 && NameRegex.test(lastName.value)) {
      lastName.style.borderColor = "green";
      arrayFormData[1].setAttribute("data-error", "");
      arrayFormData[1].setAttribute("data-error-visible", false);
      return true;
        } else {
          invalidinput(1, " entrez des lettres");    
          return false;
        }
    };
      // Vérification du mail

    function emailValidation(){
      if (emailRegex.test(email.value)) {
        email.style.borderColor = "green";  
        arrayFormData[2].setAttribute("data-error", "");
        arrayFormData[2].setAttribute("data-error-visible", false);
        return true;
          } else {
            invalidinput(2, " entrez une adresse valide.");    
            return false;
          }
      };

      // Vérification date de naissance
    function birthdateValidation(){
      if (birthdateRegex.test(birthdate.value)) {
        birthdate.style.borderColor = "green";  
        arrayFormData[3].setAttribute("data-error", "");
        arrayFormData[3].setAttribute("data-error-visible", false);
        return true;
          } else {
            invalidinput(3, " entrez une date de naissance valide.");    
            return false;
          }
      };


// Vérification participation
function quantityValidation(){
  let participation = parseInt(quantity.value);
  if (participation >=0 && participation <=99)  {
    quantity.style.borderColor = "green";  
    arrayFormData[4].setAttribute("data-error","");
    arrayFormData[4].setAttribute("data-error-visible", false);
    return true;
      } else {
        invalidinput(4, " entrez un nombre entre 0 et 99.");    
        return false;
      }
  };
  

 // fonction qui check si une case de ville est cochée. 
      function checkedValidation(){ 
        const checkboxes = document.querySelectorAll("input[name ='location']:checked");
        if (checkboxes.length === 1) {
          arrayFormData[5].setAttribute("data-error", "");
          arrayFormData[5].setAttribute("data-error-visible", false);
          return true;
          } else { 
            invalidinput(5, " cocher une case.");
            return false;
          }
        }     
     
// fonction qui check le CGV. 
function cgvValidation(){ 
  const cgv = document.getElementById("checkbox1");
  if (cgv.checked) {
    arrayFormData[6].setAttribute("data-error", "");
    arrayFormData[6].setAttribute("data-error-visible", false);
    return true;
    } else { 
      invalidinput(6, " cocher la case.");
      return false;
    }
  } 



/// VALIDATION DU MODAL
function validate() {  
  const isFirstNameValide =  firstNameValidation();
  const isLastNameValide = lastNameValidation();
  const isEmailValide = emailValidation();
  const isbirthdateValide = birthdateValidation();
  const isquantityValide = quantityValidation();
  const isCheck = checkedValidation();
  const isCgv = cgvValidation();
  const isValidate =  isFirstNameValide && isLastNameValide && isEmailValide && isbirthdateValide && isquantityValide && isCheck && isCgv;
  if ( isValidate) { 
     return openThanks();
  }
}


///// OUVERTURE DES REMERCIMENTS
function openThanks (){
  
  // création DOM pour le message de remerciement
  let newP = document.createElement('p');
  let newInput = document.createElement('input');
  let merciText = document.createTextNode(" Merci pour <br> votre inscription.");
  let merciClass = document.getElementsByName('merci');
  newP.className="merci-text";
  newInput.classList="btn-submit merci-btn-submit";
  newInput.value="Fermer";
  newInput.type = "submit";
  console.log(merciClass)
  
  // insertion de la div à un endroit précis (après le span close)
  btnClose.insertAdjacentHTML('afterend','<div class="merci"></div>');
  const merci = document.querySelector(".merci");
  
  merci.appendChild(newP);
  newP.appendChild(merciText);
  merci.appendChild(newInput);
  
  bodyForm.style.display = "none";
  merci.style.display = "block";
  
  

//fermture soit a la croix soit au bouton 
function close() {
  modalContent.style.display = "none";
  modalbg.style.display = "none";
}



// function qui reinitialise le form
function reinitForm() {
  
  merci.style.display ="none";
  bodyForm.style.display = "block";
  bodyForm.reset();
}


// Fermture du modal via le X
btnClose.addEventListener("click", () => {
  close();
  reinitForm();
  console.log("clicX")
}, false);

 // Fermture du modal merci via le btn "Fermer"
 const btnFermer = document.querySelector(".merci-btn-submit");
 btnFermer.addEventListener("click", () => {
   close();
   reinitForm();
   bodyForm.reset();
 }, false);
;

}






