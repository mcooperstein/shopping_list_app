function addItem() {
    //alert("I've just activated the addItem() function");

    //get the value of the input box
    var itemValue = $('#addItemValue').val();

    //validate input
    if (itemValue.length === 0) {
        alert('You need to add something!');
    }

    //if the input is valid ....
    else {
        //dynamicaly create one row inside the shopping list
        var row = $('<li><button class="checkbox">✓</button><span class="list">' + itemValue + '</span><button class="delete">x</button></li>');

        //add each row to the previous ones
        $('.shopping-list').append(row);

        //empty the input box after submit by reseting the value
        itemValue = $('#addItemValue').val('');
    }
}

function tickItem() {
    //alert("I've just activated the tickItem() function");

    //$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and add / remove the "ticked" class to it
    $(this).parent().toggleClass('ticked');
}

/*function to remove an item from the list clicking on the 'x' */
function deleteItem() {
    //alert("I've just activated the deleteItem() function");

    //$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and remove it
    $(this).parent().remove();
}

/*function to reset and clear the list */
function deleteAll() {
    //alert("I've just activated the deleteAll() function");

    //find the the UL container (in our case having the class shopping-list) which contains all the LIs and delete it
    $('.shopping-list').empty();
}

$(document).ready(function () {

    $('#add').on('click', function () {
        addItem();
    });


    $('.delete-all').on('click', function () {
        deleteAll();
    });

});

$(document).on('keypress', function (key) {
    if (key.keyCode == 13) {
        addItem();
    }
});

$(document).on('click', '.delete', deleteItem);

$(document).on('click', '.checkbox', tickItem);
