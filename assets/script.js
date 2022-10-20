let form = document.querySelector('#formRichiesta');



//*innesco init
window.addEventListener('load', init);

function init() {
   console.log('test'); 
   
      
}

function fillForm (){
   let adrMail = document.querySelector('#formRichiesta');
   adrMail.setAttribute("action", 'mailto:alberto.cannoni@outlook.it');
   form.setAttribute('href', 'mailto:a.cannoni@hotmail.com')
   form.setAttribute("action", "mailto:a.cannoni@hotmail.com");
}

function fillWapp() {   
   btnHrefTel.setAttribute("href", "https://wa.me/393890172024");
   
  
}