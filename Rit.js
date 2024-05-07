 // Function to update the total price
 function updateTotalPrice() {
  var totalPrice = 0;
  $('.item').each(function() {
    var price = parseFloat($(this).find('.total-price').text().replace('$', ''));
    var quantity = parseInt($(this).find('.quantity input').val());
    totalPrice += price * quantity;
  });
  $('#total-price').text(totalPrice.toFixed(2));
}

// Minus button click event
$('.minus-btn').on('click', function() {
  var $input = $(this).closest('.item').find('input');
  var value = parseInt($input.val());
  if (value > 1) {
    value--;
    $input.val(value);
    updateTotalPrice();
  }
});

// Plus button click event
$('.plus-btn').on('click', function() {
  var $input = $(this).closest('.item').find('input');
  var value = parseInt($input.val());
  if (value < 100) {
    value++;
    $input.val(value);
    updateTotalPrice();
  }
});

// Delete button click event
$('.delete-btn').on('click', function() {
  $(this).closest('.item').remove();
  updateTotalPrice();
});
$('.like-btn').on('click', function() {
$(this).toggleClass('clicked');
});