let x = document.querySelectorAll('.x');
let extraItems = $('.extraItems');
let extraItem = $('.extraItem');
let itemQuantity = $('#itemQuantity');
let quantity = $('#quantity');

const arr = [];

$('.add').on('click', function () {
  let total = $('.total');
  let selectedOption = $('option:selected').text().split('$').pop();
  let number = parseFloat(selectedOption) * itemQuantity.val() * quantity.val();
  let addExtraItem = $(`<p class='extraItem' id='extraItem'><span class='x'></span></p>`);
  let x = 4.5 * quantity.val();

  arr.push(number);
  let price007 = arr.reduce((total, amount) => total + amount);

  extraItems.append(addExtraItem);
  addExtraItem.prepend(`${itemQuantity.val()} Extra Tomatoes&nbsp;&nbsp;   +$ ${number.toFixed(2)}`);
  total.text('Total: $' + (x + price007).toFixed(2));

  $('span').click(function (e) {
    $(e.target).parent().hide(500);
  });
});
$('#placeOrder').click(() => {
  $('.orderWrapper').append(`<div class="orderContainer">
<p>
  <span id="indicator">${itemQuantity.val()}</span>McDonald's Quarter 
</p>
 <p class="orderContent">${extraItems.text()}</p>
              </div>`);
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
