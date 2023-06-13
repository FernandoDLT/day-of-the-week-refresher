document.querySelector('#check').addEventListener('click', check)

function check() {
    const day = document.querySelector('#day').value.toLowerCase()
    if (day === 'tuesday' || day === 'thursday') {
        message = 'You have class today'; 
    } else if (day === 'saturday' || day === 'sunday') {
        message = 'It\'s the weekend!'
    } else if (day === 'monday' || day === 'wednesday') {
        message = 'These days are soooo long...';        
    } else {
        message = 'Take the day off!'
    }

    document.querySelector('#placeToSee').innerText = message
    document.querySelector('#placeToSee').style.color = 'red'
    document.querySelector('#placeToSee').style.fontSize = '54px'
}
