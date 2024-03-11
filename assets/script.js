//*SCRIPT PER TIBURONYACHT.COM
//variabii globali
let modale= document.getElementById('Modale')


//*innesco init
window.addEventListener('load', init);

function init() {
    eventHandler()
    // underConstruction();
}

function eventHandler(){
   console.log('in ascolto'); 
   let contatti = document.getElementById('contatti');
   contatti.addEventListener('click', modalShow)
}
//!----------------------------------------------------------------------------
//*FINESTRA MODALE
function modalShow(){   
    let modale= document.getElementById('Modale');
    modale.classList.remove('hideMod');
    modale.classList.add('modale');
    console.log('apertura finestra modale');
    
}

function closeButton(){
    let button = document.getElementById('closeB');
    button.addEventListener('click', hideMod);
}

function hideMod(){
let modale= document.getElementById('Modale');
    modale.classList.remove('modale');
    modale.classList.add('hideMod');
    console.log('chiusura finestra modale');

}

function fillForm (){
    let adrMail = document.querySelector('#formRichiesta');
    adrMail.setAttribute("action", 'mailto:info@tiburonyacht.com');
    form.setAttribute('href', 'mailto:info.@tiburonyacht.com');
    form.setAttribute("action", "mailto:info.@tiburonyacht.com");
 }
function fillFormMod (){
    let adrMail = document.querySelector('#formModale');
    adrMail.setAttribute("action", 'mailto:info@tiburonyacht.com');
    form.setAttribute('href', 'mailto:info.@tiburonyacht.com');
    form.setAttribute("action", "mailto:info.@tiburonyacht.com");
 }
 
 function fillWapp() {   
    btnHrefTel.setAttribute("href", "https://wa.me/393512537311");
 }
 
 function underConstruction(){
 let body = document.querySelector('#Body');
 body.innerHTML = '';
 body.innerHTML= `<div id="contenitore">
 <h2>pagina in allestimento</h2>
 </div>`;
 console.log('pagina in allestimento');
 }
// function modalShow(){
//     closeButton = document.querySelector('.closeButton')
//     console.log('modalTest');
//     Modale.setAttribute('class', 'showMod');
//     closeButton.addEventListener('click', closeModal);
// }

// function closeModal(){
//     console.log('test close modal');
//     Modal.setAttribute('class', 'modale');
// }