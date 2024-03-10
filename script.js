//*SCRIPT APP

//variabili globali
let modale = document.getElementById('Modale');

//innesco init
window.addEventListener('load', init);


//!----------------------------------------------------------------------------
//Preparazione all' utente
function init() {
    eventHandler()   
    // underConstruction();
}

function eventHandler() {
    console.log('in ascolto');

    let contatti = document.getElementById('contatti');
    let bio = document.getElementById('Bio');
    let experience = document.querySelector('#Experience');
    let services = document.querySelector('#Services');
    let partner = document.querySelector('#Partner');

    contatti.addEventListener('click', modalShow);    
    bio.addEventListener('click', bioGen);    
    experience.addEventListener('click', experienceGen);
    services.addEventListener('click', servicesGen);
    partner.addEventListener('click', partnerGen);
}

//!----------------------------------------------------------------------------
//funzioni che generano i contenuti

function bioGen() {
    console.log('click biografia');
};
function experienceGen() {
    console.log('click experience');
};
function servicesGen() {
    console.log('click services');
};
function partnerGen() {
    console.log('click partner');
};

//!----------------------------------------------------------------------------
//*FINESTRA MODALE
function modalShow() {
    let modale = document.getElementById('Modale');
    modale.classList.remove('hideMod');
    modale.classList.add('modale');
    console.log('apertura finestra modale');

}

function closeButton() {
    let button = document.getElementById('closeB');
    button.addEventListener('click', hideMod);
}

function hideMod() {
    let modale = document.getElementById('Modale');
    modale.classList.remove('modale');
    modale.classList.add('hideMod');
    console.log('chiusura finestra modale');

}

function fillForm() {
    let adrMail = document.querySelector('#formRichiesta');
    adrMail.setAttribute("action", 'mailto:info@tiburonyacht.com');
    form.setAttribute('href', 'mailto:info.@tiburonyacht.com');
    form.setAttribute("action", "mailto:info.@tiburonyacht.com");
}
function fillFormMod() {
    let adrMail = document.querySelector('#formModale');
    adrMail.setAttribute("action", 'mailto:info@tiburonyacht.com');
    form.setAttribute('href', 'mailto:info.@tiburonyacht.com');
    form.setAttribute("action", "mailto:info.@tiburonyacht.com");
}

function fillWapp() {
    btnHrefTel.setAttribute("href", "https://wa.me/393512537311");
    btnHrefTel2.setAttribute("href", "https://wa.me/393512537311");
}
//under costruction
function underConstruction() {
    let body = document.querySelector('#Body');
    body.innerHTML = '';
    body.innerHTML = `<div id="contenitore">
 <h2>pagina in allestimento</h2>
 </div>`;
    console.log('pagina in allestimento');
}

