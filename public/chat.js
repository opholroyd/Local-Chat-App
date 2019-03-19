const socket = io()

const inpt = document.getElementById('inputBar')
const sub = document.getElementById('btn')

socket.on('message', (text => {
    console.log(text)
}))

sub.addEventListener('click', (e) => {
    e.preventDefault();
    let inptText = inpt.value;
    socket.emit('message', inptText)
})