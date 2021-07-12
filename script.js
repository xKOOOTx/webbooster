const productSection = document.querySelectorAll('.product');
const closeForm = document.querySelector('.fa-times');
const form = document.querySelector('.form');
const formProductName = document.querySelector('.form__productName')


productSection.forEach(el => {
    const productButton = el.querySelector('.product__button');
    const productName = el.querySelector('.product__name');


    productButton.addEventListener('click', () => {
        form.classList.add('form-active');
        formProductName.textContent = '';
        formProductName.innerHTML = productName.innerHTML;
    })
})

//  closing form by clicking outside
form.addEventListener('click', el => {
    if (el.target.classList.contains('form-active')) {
        form.classList.remove('form-active')
    }
    if (el.target.classList.contains('form__closeBtn')) {
        form.classList.remove('form-active')
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
