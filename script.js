$(function() {

  var $toDoUL = $('#toDo_list');

  var $newItemForm = $('#new_toDo_item');

  var $itemNameBlank = $('#item_name');

  var $itemDescriptionBlank = $('#item_description');

  $newItemForm.on('submit', function(event) {
    event.preventDefault();
    var listItem = $('#item_name').val();
    var listDescription = $('#item_description').val();
    console.log(listItem);
    console.log(listDescription);

    // store our new shopping list item
    $toDoUL.push(listItem);

    // clear the form
    $itemNameBlank.val("");

    // append our new item to the page's shopping list
    $toDoUL.append('<li class="item">' + listItem + " " + listDescription + '</li>');
  });

  $toDoUL.on('click', '.item', function() {
    $(this).addClass('purchased');
    $(this).animate({opacity: '0.50'}, 1000);
  });

});


var toDoList = ["Soap", "Envelopes", "Dry Erase Markers"];
