let priceTeller = document.querySelector('#price')
let x = document.querySelectorAll('.x')
let extraItems = $('.extraItems')
let extraItem = $('.extraItem')
let extraThing = document.getElementById('extraThing')
let itemQuantity = $('#itemQuantity')
let quantity = $('#quantity')
let addButton = $('.add')

let total = $('.total')

$(function () {
  total.text('Total: ' + priceTeller.textContent)
})
let price = document.getElementById('price').innerHTML
let priceSplit = price?.split('$')

// $('#quantity').on('keyup', function () {
//   $(priceTeller).text('$' + this.value * parseFloat(priceSplit[1]))
// })

addButton.on('click', function () {
  let total = $('.total')
  let text = document.createTextNode(
    extraThing.options[extraThing.selectedIndex].text
  )

  let number = 0.25 * itemQuantity.val() * quantity.val()
  let option = $('option:selected').val()

  let addExtraItem = $(
    `<p class='extraItem' id='extraItem'><span class='x'></span></p>`
  )

  console.log(localStorage.getItem('extra'))
  extraItems.append(addExtraItem)

  if (option == 1) {
    addExtraItem.prepend(
      itemQuantity.val() +
        ' Extra ' +
        (text.textContent = 'Tomatoes&nbsp;&nbsp;' + ' +$' + number)
    )
    let splitted = $('.extraItem').text().split('$').pop()
    localStorage.setItem('extra', splitted)

    var elem = document.getElementById('tot').innerHTML
    var elements = elem?.split('$')
    if (quantity.val() > 1) {
      total.text('Total: $' + (parseFloat(elements[1]) + number))
    } else {
      total.text('Total: $' + (parseFloat(elements[1]) + number))
    }
  }

  $('span').click(function (e) {
    $(e.target).parent().hide(500)
  })
})

$('.x').click(function (e) {
  $(e.target).parent().hide(500)
})

$('#cancel').click(function () {
  $('.quarter-popup').hide()
})
$('#quarter').click(function () {
  $('.quarter-popup').show(500)
})
