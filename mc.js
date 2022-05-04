let priceTeller = document.querySelector('#price')
let x = document.querySelectorAll('.x')
let extraItems = $('.extraItems')
let extraItem = $('.extraItem')
let extraThing = document.querySelector('select')
let itemQuantity = $('#itemQuantity')
let addButton = $('.add')

let span = document.createElement('span')
span.classList.add('x')

let addExtraItem = document.createElement('p')
let text = document.createTextNode(
  extraThing.options[extraThing.selectedIndex].text
)

addExtraItem.append('Extra ' + text.textContent)
addExtraItem.classList.add('extraItem')

addButton.on('click', () => {
  extraItem
    .text(itemQuantity.val() + ' ' + 'Extra ' + text.textContent)
    .append(span)
  addExtraItem.append(span)
  extraItems.append(addExtraItem)
  return extraItem
})

$(span).click(function (e) {
  $(e.target).parent().hide(500)
})
$('.x').click(function (e) {
  $(e.target).parent().hide(500)
})

$('#quantity').on('keyup', function () {
  $(priceTeller).text('$' + this.value * 4.49)
})

$('#cancel').click(function () {
  $('.quarter-popup').hide()
})
$('#quarter').click(function () {
  $('.quarter-popup').show(500)
})
