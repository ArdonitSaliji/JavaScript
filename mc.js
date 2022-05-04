let priceTeller = document.querySelector('#price')
let x = document.getElementsByClassName('x')
let extraItem = document.getElementsByClassName('extraItem')

$('#quantity').on('keyup', function () {
  $(priceTeller).text('$' + this.value * 4.49)
})

$('#cancel').click(function () {
  $('.quarter-popup').hide()
})
$('#quarter').click(function () {
  $('.quarter-popup').show(500)
})
$('.extraItem .x').click(function (e) {
  $(e.target).parent().hide(500)
})
