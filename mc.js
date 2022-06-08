let x = document.querySelectorAll('.x');
let extraItems = $('.extraItems');
let extraItem = $('.extraItem');
let itemQuantity = $('#itemQuantity');
let quantity = $('#quantity');
let extraItemText = $('.extraItem').text();
let item = document.querySelectorAll('.extraItem').textContent;
const orderWrapper = $('.orderWrapper');
const arr = [];
let extraArr = [];
$('.add').on('click', function () {
  let total = $('.total');
  let poppedOption = $('option:selected').text().split('$').pop();
  let selectedOption = $('option:selected').text().split('+');
  let number = parseFloat(poppedOption) * itemQuantity.val() * quantity.val();
  let addExtraItem = $(`<p class='extraItem' id='extraItem'><span class='x'></span></p>`);
  let x = 4.5 * quantity.val();
  const optionToPush = `${itemQuantity.val()} Extra ${selectedOption[0]} +$${number}`;
  arr.push(number);
  extraArr.push(optionToPush);

  extraItems.append(addExtraItem);

  addExtraItem.prepend(optionToPush);
  let price007 = arr.reduce((total, amount) => total + amount);
  total.text('Total: $' + (x + price007).toFixed(2));

  console.log(extraArr);
  $('span').click(function (e) {
    $(e.target).parent().hide(500);
  });
});

$('#placeOrder').click(() => {
  let textToAppend = `
    <div class="orderContainer">
      <p>
        <span id="indicator">${itemQuantity.val()}</span>McDonald's Quarter 
      </p>
      <p class='orderContent'>${$('#extraItem').text()}</p>
    </div>
    `;
  orderWrapper.append(textToAppend);
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
