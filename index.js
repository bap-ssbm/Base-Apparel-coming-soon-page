const form = document.querySelector('.main__form')
const input = document.querySelector('.main__form__input')
const button = document.querySelector('.main__form__button')
const error = document.querySelector('.main__errortxt')

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

button.addEventListener('click', (event)=>{
    input.classList.remove('main__form__input--error')
    event.preventDefault();
    console.log(input.value)
    if(validateEmail(input.value)){
        console.log('good')
    }else{
        console.log('bad')
        input.classList.add('main__form__input--error')
        error.innerHTML = 'Please provide a valid email'
    }
})
//animations
let tl = gsap.timeline({defaults: { y:10, opacity:0 }})
tl.from(".main__header", { duration : 0.4})
.from(".main__paragraph", { duration : 0.5})
