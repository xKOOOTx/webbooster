const productSection = document.querySelectorAll('.product');
const closeForm = document.querySelector('.fa-times');
const form = document.getElementById('form');
const formWrapper = document.querySelector('.form')
const formProductName = document.querySelector('.form__productName')


productSection.forEach(el => {
    const productButton = el.querySelector('.product__button');
    const productName = el.querySelector('.product__name');


    productButton.addEventListener('click', () => {
        formWrapper.classList.add('form-active');
        formProductName.textContent = '';
        formProductName.innerHTML = productName.innerHTML;
    })
})

//  closing form by clicking outside
formWrapper.addEventListener('click', el => {
    if (el.target.classList.contains('form-active')) {
        formWrapper.classList.remove('form-active')
    }
    if (el.target.classList.contains('form__closeBtn')) {
        formWrapper.classList.remove('form-active')
    }
})

//  close form button animation
closeForm.addEventListener('mouseout', () => {
    closeForm.animate([
        {transform: 'rotate(-90deg)'}
    ], {
        duration: 200,
        iterations: 2
    })
})
closeForm.addEventListener('mouseenter', () => {
    closeForm.animate([
        {transform: 'rotate(90deg)'}
    ], {
        duration: 200,
        iterations: 2
    })
})

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', formSend)

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (!error === 0) {
            alert('Заполните все поля')
        } else {
            console.log('sending')
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            })

            if (response.ok) {
                let result = await response.json();
                alert(result.message)
                form.reset();
            } else {
                alert('Ошибка')
            }
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if(emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }


})

// return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
