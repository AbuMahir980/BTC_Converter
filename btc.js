const input = document.querySelector('input')
const button = document.querySelector('button')

button.addEventListener('click', () =>{
    const currValue = Number(input.value);
    console.log(currValue);
    input.value = '';

    
})