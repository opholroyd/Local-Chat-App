const socket = io()

const inpt = document.getElementById('inputBar')
const sub = document.getElementById('btn')
const chatOne = document.getElementById('rep1')

socket.on('message', (text => {
    console.log(text)
    chatOne.innerHTML = text
}))

sub.addEventListener('click', (e) => {
    e.preventDefault();
    let inptText = inpt.value;
    socket.emit('message', inptText)
})