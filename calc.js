let inp = document.querySelector('.current')
let out = document.querySelector('.result')
let buttons = document.querySelectorAll('button')

buttons.forEach((key) => {
  key.addEventListener('click', calculate)
})
function calculate() {
  let buttonText = this.innerText

  if (buttonText == 'AC') {
    inp.innerHTML = ''
    out.innerHTML = '0'
    return
  }

  if (buttonText == 'Del') {
    inp.textContent = inp.textContent.substr(0, inp.textContent.length - 1)
    return
  }

  if (buttonText == '=') {
    out.innerText = eval(inp.innerText)
  } else {
    inp.textContent += buttonText
    return
  }
}
// $('button').click(function () {
//   let inp = $('.current').text()
//   let numbers = $(this).text()
//   $('.output .current').text((inp += numbers))
// })

// $(buttons).click(function () {
//   $('.output .current').text(inp.substring(0, inp.length - 1))
// })

// console.log(inp)

// let inp = $('.current').text
// let buttons = document.querySelectorAll('button')
// let current = document.querySelector('.current')
// let result = document.querySelector('.result')
// buttons.forEach((key) => {
//   key.addEventListener('click', calculate)
// })

// function calculate() {
//   let buttonText = $(this).text()
//   if (buttonText == 'AC') {
//     $(current).text('')
//     $(result).text('0')
//   }
// }

// if (inp == 'Del') {
//   $('#del').click(function () {
//     $('.current').text(inp.substr(0, inp.textContent.length - 1))
//   })
// } else {
//   $('button').click(function () {
//     let inp = $('.current').text()
//     let numbers = $(this).text()
//     $('.output .current').text((inp += numbers))
//     console.log(inp)
//   })
// }

// $('#all-clear').click(function () {
//   $('.current').text('')
// })

// let output = document.querySelector('.current')
// let result = document.querySelector('.result')
// let keys = document.querySelectorAll('button')

// keys.forEach((key) => {
//   key.addEventListener('click', calculate)
// })

// function calculate() {
//   let buttonText = this.innerText
//   if (buttonText == 'AC') {
//     output.innerText = ''
//     result.innerText = '0'
//     return
//   }
//   if (buttonText == 'Del') {
//     output.textContent = output.textContent.substr(
//       0,
//       output.textContent.length - 1
//     )
//     return
//   }
// }
