let priceTeller = document.querySelector('#price')
let x = document.querySelectorAll('.x')
let extraItems = $('.extraItems')
let extraItem = $('.extraItem')
let extraThing = document.getElementById('extraThing')
let itemQuantity = $('#itemQuantity')
let quantity = $('#quantity')
let addButton = $('.add')
let number = 0.25
let total = $('.total')
let totalNumber = $('#totalN')

$(function () {
  total.text('Total: ' + priceTeller.textContent)
})

$('#quantity').on('keyup', function () {
  $(priceTeller).text('$' + this.value * 4.49)
  total.text('Total: ' + priceTeller.textContent)
})
addButton.on('click', function () {
  let total = $('.total')
  let text = document.createTextNode(
    extraThing.options[extraThing.selectedIndex].text
  )

  let option = $('option:selected').val()
  
  

  let addExtraItem = $(`<p class='extraItem'><span class='x'></span></p>`)

  if (option == 1) {
    addExtraItem.prepend(
      itemQuantity.val() +
        ' Extra ' +
        (text.textContent =
          'Tomatoes&nbsp;&nbsp;' + ' +$' + number * itemQuantity.val())
    )
    var elem = document.getElementById('tot').innerHTML;
    var elements = elem?.split('$');
    console.log(parseFloat(elements[1]))
    total.text(
      'Total: $' + (quantity.val() * parseFloat(elements[1]) + number * itemQuantity.val())
    )
  }

  if (option == 2) {
    addExtraItem.prepend(
      itemQuantity.val() +
        ' Extra ' +
        (text.textContent =
          'Prickles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
          ' +$' +
          (0.05 + number) * itemQuantity.val())
    )
    total.text(
      'Total: $' +
        (quantity.val() * 4.49 + (0.05 + number) * itemQuantity.val())
    )
  } else if (option == 3) {
    addExtraItem.prepend(
      itemQuantity.val() +
        ' Extra ' +
        (text.textContent =
          'Cabbages&nbsp;' + ' +$' + (number + 0.1) * itemQuantity.val())
    )
    total.text(
      'Total: $' + (quantity.val() * 4.49 + (0.1 + number) * itemQuantity.val())
    )
  } else if (option == 4) {
    addExtraItem.prepend(
      itemQuantity.val() +
        ' Extra ' +
        (text.textContent =
          'Cheese&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
          ' +$' +
          (number + 0.15) * itemQuantity.val())
    )
    total.text(
      'Total: $' +
        (quantity.val() * 4.49 + (0.15 + number) * itemQuantity.val())
    )
  } else if (option == 5) {
    addExtraItem.prepend(
      itemQuantity.val() +
        ' Extra ' +
        (text.textContent =
          'Onions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
          ' +$' +
          (number - 0.05) * itemQuantity.val())
    )
    total.text(
      'Total: $' +
        (quantity.val() * 4.49 + (number - 0.05) * itemQuantity.val())
    )
  }
  extraItems.append(addExtraItem)

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
