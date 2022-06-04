let priceTeller = document.querySelector('#price');
let x = document.querySelectorAll('.x');
let extraItems = $('.extraItems');
let extraItem = $('.extraItem');
let extraThing = document.getElementById('extraThing');
let itemQuantity = $('#itemQuantity');
let quantity = $('#quantity');
let addButton = $('.add');
let total = $('.total');
let price = document.getElementById('price').innerHTML;
let priceSplit = price?.split('$');

const element = $('#tot').text().split('$').pop();

addButton.on('click', function () {
  let total = $('.total');

  let tot = $('#tot');
  let option = $('option:selected').val();
  let selectedOption = $('option:selected').text().split('$').pop();
  let number = selectedOption * itemQuantity.val() * quantity.val();
  let addExtraItem = $(`<p class='extraItem' id='extraItem'><span class='x'></span></p>`);

  if (option == 1) {
    var elem = document.getElementById('tot').innerHTML;
    var elements = elem?.split('$');
    let x = parseFloat(elements[1]) + number;
    let y = 4.5 * quantity.val();
    console.log(x);
    extraItems.append(addExtraItem);
    addExtraItem.prepend(`${itemQuantity.val()} Extra Tomatoes&nbsp;&nbsp;   +$ ${number}`);
    total.text('Total: $' + x);
  }

  $('span').click(function (e) {
    $(e.target).parent().hide(500);
  });
});

$('.x').click(function (e) {
  $(e.target).parent().hide(500);
});

$('#cancel').click(function () {
  $('.quarter-popup').hide();
});

$('#quarter').click(function () {
  $('.quarter-popup').show(500);
});
