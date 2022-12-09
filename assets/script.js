let form = document.querySelector('#formRichiesta');



//*innesco init
window.addEventListener('load', init);

function init() {
   console.log('test');
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
