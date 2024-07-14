$(document).ready(function () {
    $('#addRowForm').submit(function (event) {
        event.preventDefault();

        var name = $('#nameInput').val();
        var age = $('#ageInput').val();

        if (name && age) {
            $('#tableBody').append('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
            $('#nameInput, #ageInput').val('');
        } else {
            alert('Please fill out all fields.');
        }
    });
});

//discovered Im unable to make notes on .html page. Here I have a drop down menu
//and a fields to put name and age. It isnt creating a row though...
