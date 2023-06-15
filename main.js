document.querySelector('#check').addEventListener('click', check)

function check() {
    const day = document.querySelector('#day').value.toLowerCase()

    if (day === 'tuesday' || day === 'thursday') {
        message = 'You have class today!';
        document.querySelector('#placeToSee').style.color = 'red'
    } else if (day === 'saturday' || day === 'sunday') {
        message = 'It\'s the weekend!'
    } else if (day === 'monday' || day === 'wednesday') {
        document.querySelector('#placeToSee').style.color = 'gray'
        message = 'These days are soooo long...';
    } else {
        message = 'Take the day off!'
        document.querySelector('#placeToSee').style.color = 'purple'
    }
    
    document.querySelector('h2').innerText = message
    document.querySelector('#placeToSee').style.fontSize = '54px'

    document.querySelector('#placeToSee').innerText = message
}