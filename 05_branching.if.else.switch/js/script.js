let a = 19

// if (a != 9) {
//     // true 
//     console.log('Yes')
// }
// else {
//     console.log('else')
// }

const button = document.querySelector('button')
const input = document.querySelector('.age')

button.onclick = () => {
    let num = +input.value
    if (num >= 16 && num < 60) {
        console.log('welcome!!!')
    }
    else if (num > 60) {
        console.log('Ты точно сюда?')
    }
    else {
       console.log('Ты не пройдешь!!!') 
    }

    switch (num) {
        case 15: 
        console.log('Еще год потерпи!')
        break;

        case 16: 
        console.log('Ура можно!!!')
        break;
        default: 
        console.log('oook')
    }
}

let b = 4

console.log(b == 3 || b == 7)






