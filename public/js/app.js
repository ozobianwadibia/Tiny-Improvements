//FUNCTION to refresh the DOM 
const refreshDOM = function() {
    location.reload();
}

const displayAll = () => {
        $('#showKudos').empty();
        $.ajax({
            url: '/api/kudos',
            method: 'GET'
        }).then(function(result) {
            console.log(result);
            for (let i = 0; i < result.length; i++) {
                $('#showKudos').append('<div class="display"><p>' + result[i].title + '</p>' + '<br>' + '<p>' + result[i].body + '</p></div>');
            }
        })
    }
    //calling the function above
displayAll();


//FUNCTION that submits the kudos
const submitKudos = () => {
    let input = $('#input').val().trim();
    let textarea = $('#textarea').val().trim();
    //sender input later
    //receiver input later
    const newEntry = {
        title: input,
        body: textarea
    }

    $.ajax({
        url: '/api/kudos',
        method: 'POST',
        data: newEntry
    }).then(function(newEntry) {
        console.log(newEntry);
    });
    $('#input').val('');
    $('#textarea').val('');
    refreshDOM();
}

$('#sendKudos').on('click', submitKudos);