console.log('oi')
document.querySelector('form').onsubmit = (event) => {
    const form = event.target
    console.log(form)
}