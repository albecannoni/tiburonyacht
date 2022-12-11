let form = document.querySelector('#formRichiesta');



//*innesco init
window.addEventListener('load', init);

function init() {
   console.log('test init');
   // underConstruction();
}

function fillForm (){
   let adrMail = document.querySelector('#formRichiesta');
   adrMail.setAttribute("action", 'mailto:info.tiburonyacht@gmail.com');
   form.setAttribute('href', 'mailto:info.tiburonyacht@gmail.com');
   form.setAttribute("action", "mailto:info.tiburonyacht@gmail.com");
}

function fillWapp() {   
   btnHrefTel.setAttribute("href", "https://wa.me/393512537311");  
}

function underConstruction(){
let body = document.querySelector('#Body');
body.innerHTML = '';
body.innerHTML= `<div id="contenitore">
<h2>sito in costruzione</h2>
</div>`;
console.log('pagina in allestimento');
}