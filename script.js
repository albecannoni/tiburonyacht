//*SCRIPT APP

//variabili globali
let modale = document.querySelector('#Modale');


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

function resetPool() {
    let pool = document.querySelector('#Pool');
    pool.innerHTML = ''
}

//!----------------------------------------------------------------------------
//funzioni che generano i contenuti

function bioGen() {
    console.log('click biografia');
    resetPool()

    let pool = document.querySelector('#Pool');
    pool.classList.add('d-flex', 'align-items-center', 'flex-column');
    let photo = document.createElement("div");
    photo.setAttribute('id', 'Photo');
    photo.classList.add('fototessera');
    pool.append(photo);

    let bioText = document.createElement("div");
    bioText.setAttribute('id', 'BioText');
    bioText.classList.add('testoBio');
    pool.appendChild(bioText);
    bioText.innerHTML = `Chiara Leonida Cannizzaro è nata nel 1993  in provincia di Varese ed è un'artista poliedrica. Fin dalla sua infanzia, ha coltivato la passione per la musica dedicandosi allo studio del violino. Ha conseguito la qualifica di tecnico di costruzione di scenografia presso le Scuole Tecniche San Carlo di Torino e quella di tecnico audio-luci presso l'Accademia Teatro alla Scala. Nel 2023, si è specializzata nella tutela del Diritto d'Autore nell'ambito musicale e dell'intrattenimento e nelle nuove tecnologie dell'arte, tra cui l'intelligenza artificiale, gli NFT e il metaverso, presso l'Alta Scuola Federico Stella sulla Giustizia Penale dell'Università Cattolica del Sacro Cuore di Milano. Chiara ha continuato la sua attività di progettazione artistica collaborando con diverse realtà culturali e curando progetti per bandi ministeriali, europei e privati. Ha lavorato con istituzioni prestigiose come il Teatro della Cooperativa di Milano in collaborazione con la Fondazione Cariplo e il Politecnico di Milano. Ha inoltre collaborato con associazioni culturali come NoMus, centro studi e ricerche sulla musica del '900 e contemporanea, in partnership con istituzioni di rilievo come la Fondazione Ugo e Olga Levi di Venezia e l'Archivio Storico Ricordi`

    // let slideBox = document.createElement("div");
    // slideBox.setAttribute('id', 'slideBox');
    // slideBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'bg-pesca', 'py-2');
    // pool.appendChild(slideBox);
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

//!----------------------------------------------------------------------------
//manutenzione
function underConstruction() {
    let body = document.querySelector('#Body');
    body.innerHTML = '';
    body.innerHTML = `<div id="contenitore">
 <h2>pagina in allestimento</h2>
 </div>`;
    console.log('pagina in allestimento');
}

