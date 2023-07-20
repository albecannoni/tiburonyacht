let form = document.querySelector('#formRichiesta');



//*innesco init
// window.addEventListener('load', init);

// function init() {
//    console.log('test init');
//    fillForm();
//    // underConstruction();
// }

// function fillForm (){
//    let adrMail = document.querySelector('#formRichiesta');
//    adrMail.setAttribute("action", 'mailto:info.tiburonyacht@gmail.com');
//    form.setAttribute('href', 'mailto:info.@tiburonyacht.com');
//    form.setAttribute("action", "mailto:info.@tiburonyacht.com");
// }

// function fillWapp() {   
//    btnHrefTel.setAttribute("href", "https://wa.me/393512537311");  
// }

// function underConstruction(){
// let body = document.querySelector('#Body');
// body.innerHTML = '';
// body.innerHTML= `<div id="contenitore">
// <h2>pagina in allestimento</h2>
// </div>`;
// console.log('pagina in allestimento');
// }



var Modal = document.getElementById('Modal');
let ModalTrigger = document.querySelector('#ModalTrigger');



window.addEventListener('load', init);

function init(){
 console.log('init')
 eventHandler('')
}
function eventHandler(){
    ModalTrigger.addEventListener('click', showModal)
}

function showModal(){
    closeButton = document.querySelector('.closeButton')
    console.log('modalTest');
    Modal.setAttribute('class', 'show');
    closeButton.addEventListener('click', closeModal);
}

function closeModal(){
    console.log('test close modal');
    Modal.setAttribute('class', 'modal');
}