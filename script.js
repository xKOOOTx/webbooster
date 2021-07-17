const body = document.body;
const productSection = document.querySelectorAll('.product');
const closeForm = document.querySelector('.fa-times');
const productsWrapper = document.querySelector('.ulWrapper');
const formWrapper = document.querySelector('.wrapper');
const formProductName = document.querySelector('.item_name');


productSection.forEach(el => {
    const productButton = el.querySelector('.product__button');
    const productName = el.querySelector('.product__name');


    productButton.addEventListener('click', () => {
        const windowHeight = window.pageYOffset;
        formWrapper.classList.add('wrapper-active');
        formProductName.value = productName.innerHTML;
        formWrapper.style.top = `${windowHeight - 50}px`;
        body.style.overflow = 'hidden';
    })
})

//  closing form by clicking outside
formWrapper.addEventListener('click', el => {
    if (el.target.classList.contains('wrapper-active')) {
        formWrapper.classList.remove('wrapper-active');
        body.style.overflow = 'auto';
    }
    if (el.target.classList.contains('closeBtn__button')) {
        formWrapper.classList.remove('wrapper-active');
        formWrapper.style.top = `${window.pageYOffset}`;
        body.style.overflow = 'auto';
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
});
closeForm.addEventListener('mouseenter', () => {
    closeForm.animate([
        {transform: 'rotate(90deg)'}
    ], {
        duration: 200,
        iterations: 2
    })
});



