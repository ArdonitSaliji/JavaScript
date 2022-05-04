let priceTeller = document.querySelector('#price')
let x = document.querySelectorAll('.x')
let extraItems = $('.extraItems')
let extraItem = $('.extraItem')
let extraThing = document.querySelector('select')
let itemQuantity = $('#itemQuantity')
let addButton = $('.add')

// let addExtraItem = document.createElement('p')

let text = document.createTextNode(
  extraThing.options[extraThing.selectedIndex].text
)

addButton.on('click', function () {
  let addExtraItem = $(`<p class='extraItem'></p>`)

  let span = $(`<span class='x'></span>`)

  addExtraItem.append(itemQuantity.val() + ' Extra ' + text.textContent)

  extraItem
    .text(itemQuantity.val() + ' ' + 'Extra ' + text.textContent)
    .append(span)

  extraItems.append(addExtraItem)

  console.log(text.text)
})

$('span').click(function (e) {
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
