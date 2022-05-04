let priceTeller = document.querySelector('#price')

$('#quantity').on('keyup', function () {
  $(priceTeller).text('$' + this.value * 4.49)
})

$('#cancel').click(function () {
  $('.quarter-popup').hide()
})
$('#quarter').click(function () {
  $('.quarter-popup').show(500)
})
