"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact__form');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0){

        }else{
            alert('Заполните обязательные поля');
        }
    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);
        
            if(input.classList.contains('_tel')){
                 if (input.value === ''){
                    formAddError(input);
                    error++;
                 };
            }
        }
    }
    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
});